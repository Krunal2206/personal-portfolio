/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevents browsers from MIME-sniffing a response away from the declared content-type
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Stops the page being loaded in an iframe — prevents clickjacking
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // Forces HTTPS for 2 years, includes subdomains
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // Controls how much referrer info is sent with requests
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Restricts which browser features the page can use
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // Basic content security policy — tighten further if needed
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // Next.js needs inline scripts for hydration, tsParticles needs workers
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
              // Tailwind, motion, and inline styles all need this
              "style-src 'self' 'unsafe-inline'",
              // Profile image, logo, particle canvas — all same-origin + data URIs for canvas
              "img-src 'self' data: blob:",
              // tsParticles spawns web workers as blobs
              "worker-src 'self' blob:",
              // Resend email API
              "connect-src 'self' https://api.resend.com https://vitals.vercel-insights.com",
              "font-src 'self'",
              "frame-src 'none'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
