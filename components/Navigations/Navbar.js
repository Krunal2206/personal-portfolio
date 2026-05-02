import React from "react";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import { socials } from "../config";
import { Link } from "react-scroll";
import SocialIcons from "../Common/SocialIcons";
import NavigationLinks from "./NavigationLinks";

/**
 * Main navbar visible on desktop. Includes logo, nav links, and social icons.
 */
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="fixed-navbar">
      {/* Left: Hamburger menu & logo */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] cursor-pointer"
        >
          <FaBars className="w-6 h-6" />
        </button>

        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={70}
            height={70}
            className="-mt-4"
          />
        </Link>
      </div>

      {/* Center: Navigation links */}
      <div className="hidden md:flex min-w-[400px] lg:min-w-[500px]">
        <NavigationLinks
          className="justify-between w-full border border-white/30 px-6 py-4 rounded-full list-none"
          container="div"
        />
      </div>

      {/* Right: Social icons */}
      <div className="flex space-x-3 sm:space-x-5 text-[var(--primary-color)]">
        <SocialIcons items={socials} />
      </div>
    </nav>
  );
};

export default Navbar;
