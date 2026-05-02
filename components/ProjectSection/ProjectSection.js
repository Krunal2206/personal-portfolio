import React from "react";
import { projects } from "../config";
import ProjectCard from "./ProjectCard";

/**
 * Project showcase section using CardSpotlight hover effect.
 */
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
      </div>
    </section>
  );
};

export default ProjectSection;
