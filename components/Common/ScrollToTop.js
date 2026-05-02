"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when scrolled down 200px
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`cursor-pointer fixed bottom-24 right-6 md:bottom-10 md:right-10 bg-[var(--primary-color)] text-[var(--background-color)] p-3 rounded-full shadow-lg transition-all duration-300 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      } hover:bg-[var(--secondary-color)]`}
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
};

export default ScrollToTop;
