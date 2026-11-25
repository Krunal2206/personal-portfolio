import { Resend } from "resend";
import { NextResponse } from "next/server";
import { contactSchema } from "@/components/ContactSection/schema";

// Basic rate limiting
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;
const requestCounts = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const recentRequests = (requestCounts.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < WINDOW_MS,
  );

  if (recentRequests.length >= MAX_REQUESTS) {
    requestCounts.set(ip, recentRequests);
    return true;
  }

  recentRequests.push(now);
  requestCounts.set(ip, recentRequests);

  if (recentRequests.size > 1000) {
    for (const [key, timestamps] of requestCounts) {
      if (timestamps.every((timestamp) => now - timestamp >= WINDOW_MS)) {
        requestCounts.delete(key);
      }
    }
  }
  return false;
}

// Helper Functions
const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const reply = (success, message, status) =>
  NextResponse.json({ success, message }, { status });

// Handler
export async function POST(req) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return reply(false, "Too many messages. Please try again later.", 429);
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return reply(false, "Invalid request.", 400);
  }

  // Honeypot: real users never see or fill this field. Pretend success so bots get no signal that they were detected.
  if (typeof body?.website === "string" && body.website.trim() !== "") {
    return reply(true, "Message sent successfully!", 200);
  }

  // Server-side validation (never trust the client)
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return reply(
      false,
      parsed.error.issues[0]?.message ?? "Invalid form data.",
      400,
    );
  }

  const { firstName, lastName, email, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_RECEIVER_EMAIL;
  if (!apiKey || !to) {
    console.error(
      "Contact API: RESEND_API_KEY or CONTACT_RECEIVER_EMAIL is not set",
    );
    return reply(false, "Contact form is temporarily unavailable.", 500);
  }

  const resend = new Resend(apiKey);

  const fullName = `${firstName} ${lastName}`.replace(/[\r\n]+/g, " ");

  try {
    const { error } = await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL ||
        "Portfolio Contact <onboarding@resend.dev>",
      to,
      subject: `New message from ${fullName}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Portfolio Contact</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Name</td>
              <td style="padding: 8px;">${escapeHtml(fullName)}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 8px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555; vertical-align: top;">Message</td>
              <td style="padding: 8px; white-space: pre-wrap;">${escapeHtml(message)}</td>
            </tr>
          </table>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return reply(
        false,
        "Could not send your message. Please try again.",
        502,
      );
    }

    return reply(true, "Message sent successfully!", 200);
  } catch (err) {
    console.error("Contact API error:", err);
    return reply(false, "Internal server error.", 500);
  }
}
