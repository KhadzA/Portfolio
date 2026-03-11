"use client";

import { ExternalLink, Github, Lock } from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  liveUrl?: string;
  isPrivate?: boolean; // EDIT: Set to true to show lock icon instead of code button
}

const projectsData: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description:
      "E-commerce web application with product catalog and shopping cart.",
    image: "/ecommerce.png",
    technologies: ["React", "Node.js", "Express"],
    github: "https://github.com/KhadzA/E-commerce",
    liveUrl: "#",
    isPrivate: false,
  },
  {
    id: "2",
    title: "Library Management System",
    description:
      "Library system for managing books, users, and reading feature with admin dashboard.",
    image: "/library.png",
    technologies: ["JavaScript", "Node.js", "MySQL", "CSS", "HTML"],
    github: "https://github.com/KhadzA/Library",
    liveUrl: "#",
    isPrivate: false,
  },
  {
    id: "3",
    title: "Recruitment System",
    description:
      "A recruitment system that stores user application to Google sheets",
    image: "/recsys.png", // EDIT: Replace with your actual project image
    technologies: [
      "React",
      "Typescript",
      "AppScript",
      "Google Sheets",
      "Vercel",
      "CSS",
    ],
    github: "https://github.com/KhadzA/RecSys1",
    liveUrl: "https://rec-sys1.vercel.app",
    isPrivate: false,
  },
  {
    id: "4",
    title: "Cafe Management Web app",
    description:
      "Point-of-sale and management system, Software engineering project 3rd year.",
    image: "/placeholder.svg", // EDIT: Replace with actual project image
    technologies: ["PHP", "CSS", "MySQL", "Javascript"],
    github: "https://github.com/KhadzA/Cafe",
    liveUrl: "#",
    isPrivate: false,
  },
  {
    id: "5",
    title: "ESP Resto",
    description:
      "A table reservation using IOT devices, a 2nd year project for IOT.",
    image: "/ESP32_Resto.png",
    technologies: ["Arduino", "Firebase", "ESP32", "IOT"],
    github: "https://github.com/KhadzA/ESP32_Resto",
    liveUrl: "https://esp32-firebase1-9e047.web.app/", // EDIT: Add live URL if available
    isPrivate: true,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 lg:px-16 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-400">
            Explore some of my recent work and contributions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all"
            >
              {/* Project Image - EDIT: Replace placeholder with actual images */}
              <div className="relative h-64 bg-slate-800 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.currentTarget.src =
                      "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%231e293b%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2216%22 fill=%22%23666%22 text-anchor=%22middle%22 dy=%22.3em%22%3EProject Image%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.isPrivate ? (
                    // Private source code indicator
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-400 rounded-lg cursor-default font-medium text-sm border border-slate-700">
                      <Lock size={16} />
                      Source code is private
                    </div>
                  ) : (
                    // Public source code link
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium text-sm"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
