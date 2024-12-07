import React from "react";
import { ChevronRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import esoko1 from "../assets/images/esoko/esoko1.png";
import ilala1 from "../assets/images/ilalaCollege/ilala1.png";

const Projects = () => {
  const projects = [
    {
      name: "Project Management App",
      description:
        "Full-stack project management tool with real-time collaboration features.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      githubLink: "#",
      liveLink: "#",
      image: ilala1,
    },
    {
      name: "Mobile Fitness Tracker",
      description:
        "Cross-platform mobile app for tracking workout routines and progress.",
      technologies: ["Flutter", "Firebase", "GetX"],
      githubLink: "#",
      liveLink: "#",
      image: esoko1,
    },
    {
      name: "E-commerce Dashboard",
      description:
        "Admin dashboard for managing products, orders, and analytics.",
      technologies: ["React", "Express", "PostgreSQL", "Chart.js"],
      githubLink: "#",
      liveLink: "#",
      image: "/ecommerce-dashboard.jpg",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 font-poppins">
      <div className="px-20 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            My Projects
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-100 border border-primary/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold text-background mb-2">
                    {project.name}
                  </h3>
                  <p className="text-background/80 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="p-4 flex flex-col border-t">
                <h3 className=" font-semibold text-text mb-2">
                  {project.name}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-lg text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text flex space-x-2 items-end font-semibold px-3 hover:text-blue-500 transition-colors"
                  >
                    <FaGithub size={24} />
                    <span className="text-xs">View on GitHub</span>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm mx-2 font-semibold hover:text-secondary gap-2 px-5 py-2 bg-primary/20 text-gray-500 rounded-md hover:bg-primary/10 transition-colors"
                  >
                    Live Demo <ExternalLink color="#3498db" size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-8">
          <button
            className="px-6 py-3 font-semibold border border-gray-300 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
            style={{
              background:
                "linear-gradient(to right, rgba(130, 206, 250, 0.4), rgba(255, 255, 255, 1))",
              color: "#048",
            }}
          >
            <div className="flex space-x-3">
              <span>View All Projects</span>
              <ChevronRight />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
