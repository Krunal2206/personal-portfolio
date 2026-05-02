import Navigation from "@/components/Navigations/Navigation";
import "./globals.css";
import Particles from "@/components/Particles/Particles";
import ScrollToTop from "@/components/Common/ScrollToTop";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/lib/useTheme";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Krunal Thakar | Full Stack Developer",
  description:
    "Official portfolio of Krunal Thakar, a MERN stack developer specializing in React, Next.js, Node.js, and web automation.",
  keywords:
    "Krunal Thakar, developer portfolio, full-stack, MERN, React, JavaScript, Next.js, MongoDB, Node.js",
  authors: [{ name: "Krunal Thakar" }],
  robots: "index, follow",
  metadataBase: new URL("https://krunal.dev"), // ← your real domain
  openGraph: {
    title: "Krunal Thakar | Full Stack Developer",
    description:
      "Explore Krunal's work in full-stack development, MERN stack, and web automation.",
    url: "https://krunal.dev",
    siteName: "Krunal Thakar Portfolio",
    images: [
      {
        url: "/images/og-image.jpg", // create this — see note below
        width: 1200,
        height: 630,
        alt: "Krunal Thakar | Full Stack Developer",
      },
    ],
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krunal Thakar | Full Stack Developer",
    description:
      "Discover Krunal's skills and projects as a full-stack developer.",
    images: ["/images/og-image.jpg"],
    // removed site — you don't have a Twitter handle, don't fake one
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#030014",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {/* Background particles effect */}
          <Particles />

          {/* Sticky navigation bar */}
          <Navigation />

          {/* Page content */}
          {children}

          {/* Scroll restoration helper */}
          <ScrollToTop />

          {/* Site footer */}
          <Footer />

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
