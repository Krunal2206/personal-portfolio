import Link from "next/link";
import { HiOutlineSparkles } from "react-icons/hi2";

export const metadata = {
  title: "404 — Page Not Found | Krunal Thakar",
};

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      {/* Glowing 404 */}
      <h1 className="text-[120px] sm:text-[160px] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 select-none">
        404
      </h1>

      {/* Icon */}
      <HiOutlineSparkles size={36} className="text-[#b49bff] mb-4 -mt-4" />

      {/* Message */}
      <h2 className="text-2xl sm:text-3xl font-bold text-[var(--primary-color)] mb-4">
        Page Not Found
      </h2>
      <p className="text-[var(--tertiary-color)] max-w-md mb-10 text-base leading-relaxed">
        The page you're looking for doesn't exist or has been moved. Let's get
        you back to somewhere useful.
      </p>

      {/* Back home button */}
      <Link
        href="/"
        className="relative overflow-hidden px-8 py-3 rounded-full transition-all duration-200 hover:bg-gray-800 bg-white/10 backdrop-blur-md border border-white/20 text-[var(--primary-color)] font-medium"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
