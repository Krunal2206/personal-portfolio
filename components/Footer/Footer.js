import Image from "next/image";

/**
 * Responsive footer with logo and copyright.
 */
const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row py-4 sm:py-0 items-center justify-center sm:justify-between sm:px-8 bg-gray-900 text-white">
      {/* Logo */}
      <div className="mb-2">
        <Image src="/logo.png" alt="Logo" width={60} height={60} />
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} Krunal Thakar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
