"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { CardSpotlight } from "../UI/card-spotlight";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => (
  <CardSpotlight>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden shadow-lg transition transform hover:-translate-y-2"
    >
      <div className="relative h-48 w-full">
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
        <p className="text-[var(--tertiary-color)] mb-8">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="font-bold text-[var(--secondary-color)]">
            Tech Stack:
          </h4>
          <ul className="flex flex-wrap gap-2 mt-1">
            {project.techStack.map((tech, index) => (
              <li key={index} className="text-sm bg-white/20 px-2 py-1 rounded">
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="flex justify-between items-center">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition"
          >
            <FaGithub size={20} />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition"
          >
            <FaExternalLinkAlt size={20} />
            <span className="text-sm">Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  </CardSpotlight>
);

export default ProjectCard;