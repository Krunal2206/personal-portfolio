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
            <div className="space-y-4 text-gray-300 text-justify leading-relaxed">
              <p>
                I'm Krunal Thakar, a Software Engineer and Master's student in
                Applied Computing at the University of Windsor. My work spans
                full-stack development, test automation, and DevOps — with a
                focus on building software that is reliable, scalable, and
                maintainable.
              </p>
              <p>
                I have hands-on experience designing CI/CD pipelines,
                containerizing applications with Docker, and building end-to-end
                test automation frameworks using tools like Selenium,
                Playwright, and Cucumber. I enjoy working across the stack —
                from crafting responsive UIs with React and Next.js to
                architecting backend services with Node.js, FastAPI, and RESTful
                APIs.
              </p>
              <p>
                I care deeply about code quality, automation, and delivering
                software that works the first time. Whether it's integrating AI
                capabilities, optimizing database performance, or setting up
                DevSecOps quality gates — I bring the same level of attention to
                detail to every layer of the stack.
              </p>
              <p>
                Outside of work, I enjoy contributing to open-source projects,
                exploring new technologies, and continuously sharpening my
                problem-solving skills. I'm always looking for opportunities to
                collaborate on meaningful projects and grow as an engineer.
              </p>
            </div>
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
