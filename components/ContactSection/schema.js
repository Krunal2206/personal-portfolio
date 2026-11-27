import * as z from "zod";

export const contactSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First Name must be at least 2 characters")
    .max(50, "First Name must be at most 50 characters"),
  lastName: z
    .string()
    .trim()
    .min(2, "Last Name must be at least 2 characters")
    .max(50, "Last Name must be at most 50 characters"),
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(254, "Email is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be at most 2000 characters"),
});
