"use client";

import { aboutTabs } from "../config/aboutTabs";
import { Tabs } from "../UI/Tabs";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="container mx-auto px-6 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-12 lg:mb-16">
        <div className="w-full max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            About Me
          </h2>

          {/* Bio + Image row */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-[var(--secondary-color)] shadow-lg shadow-[#7042f855]">
                <Image
                  src="/profile.jpg"
                  alt="Krunal Thakar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Biography */}
            <p className="text-gray-300 text-justify leading-relaxed">
              I am Krunal, a passionate developer specializing in MERN stack,
              AI, and web automation. With experience in e-commerce, smart
              automation, and theme development, I love building seamless
              digital experiences. Always eager to learn and contribute to
              open-source projects.
            </p>
          </div>
        </div>
      </div>

      {/* Experience/Education Tabs */}
      <div className="w-full lg:flex lg:items-start lg:gap-12 lg:max-w-6xl lg:mx-auto">
        <Tabs
          containerClassName="w-full lg:space-x-8"
          contentClassName="w-full"
          tabs={aboutTabs}
        />
      </div>
    </section>
  );
};

export default AboutSection;
