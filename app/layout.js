import Navigation from "@/components/Navigations/Navigation";
import "./globals.css";
import Particles from "@/components/Particles/Particles";
import ScrollToTop from "@/components/Common/ScrollToTop";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Krunal's Developer Portfolio",
  description: "Official portfolio of Krunal Thakar, a MERN stack developer.",
  keywords:
    "Krunal, developer portfolio, full-stack, MERN, React, JavaScript, Next.js",
  author: "Krunal",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Krunal's Developer Portfolio",
    description:
      "Explore Krunal's work in full-stack development, AI, and more.",
    url: "https://your-website-url.com", // Replace later
    site_name: "Krunal's Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Krunal's Developer Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    title: "Krunal's Developer Portfolio",
    description:
      "Discover Krunal's skills and projects as a full-stack developer.",
    image: "/images/twitter-card.jpg",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    android: "/android-icon.png",
  },
  themeColor: "#030014",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
      </body>
    </html>
  );
}
