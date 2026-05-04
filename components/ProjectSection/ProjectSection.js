import React from "react";
import { projects } from "../config";
import ProjectCard from "./ProjectCard";
import { FaGithub } from "react-icons/fa";

const ProjectSection = () => {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View more on GitHub */}
        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/Krunal2206"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[var(--primary-color)] hover:bg-white/20 transition-all duration-200"
          >
            <FaGithub size={20} />
            <span className="font-medium">View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
