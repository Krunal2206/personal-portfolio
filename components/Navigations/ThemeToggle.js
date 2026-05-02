"use client";

import { useTheme } from "@/lib/useTheme";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="cursor-pointer p-2 rounded-full hover:bg-white/10 transition text-[var(--primary-color)]"
    >
      {theme === "dark" ? <MdLightMode size={22} /> : <MdDarkMode size={22} />}
    </button>
  );
};

export default ThemeToggle;
