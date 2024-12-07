import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      name: "Project Management App",
      description:
        "Full-stack project management tool with real-time collaboration features.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      githubLink: "#",
      liveLink: "#",
      category: "Fullstack",
    },
    {
      name: "Mobile Fitness Tracker",
      description:
        "Cross-platform mobile app for tracking workout routines and progress.",
      technologies: ["Flutter", "Firebase", "GetX"],
      githubLink: "#",
      liveLink: "#",
      category: "Mobile",
    },
    {
      name: "E-commerce Dashboard",
      description:
        "Admin dashboard for managing products, orders, and analytics.",
      technologies: ["React", "Express", "PostgreSQL", "Chart.js"],
      githubLink: "#",
      liveLink: "#",
      category: "Fullstack",
    },
  ];

  const filters = ["All", "Fullstack", "Mobile", "Frontend", "Backend"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-16 md:py-24 bg-background/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            My Projects
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>

          {/* Project Filters */}
          <div className="flex justify-center space-x-4 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeFilter === filter
                    ? "bg-primary text-background"
                    : "bg-primary/10 text-primary hover:bg-primary/20"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-background border border-primary/10 rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-text mb-2">
                  {project.name}
                </h3>
                <p className="text-text/70 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text hover:text-primary transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"
                >
                  Live Demo <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
