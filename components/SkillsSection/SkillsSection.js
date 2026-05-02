"use client";

import { skills } from "@/components/config/skills";
import SkillCard from "./SkillCard";

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full lg:max-w-6xl mx-auto py-20">
      <h2 className="text-4xl font-bold text-center hero-title mb-12">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center lg:max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
