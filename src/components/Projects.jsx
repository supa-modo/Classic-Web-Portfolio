import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import esoko1 from "../assets/images/esoko/esoko1.png";
import esoko2 from "../assets/images/esoko/esoko2.png";
import ilala1 from "../assets/images/ilalaCollege/ilala1.png";
import meetings1 from "../assets/images/meetingAttendance/meetings1.png";

const Projects = () => {
  const projects = [
    {
      name: "Health College Website",
      description:
        "Static frontend only website as a landing page for a health college to showcase their school and programmes offered",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      githubLink: "#",
      liveLink: "#",
      image: ilala1,
    },
    {
      name: "E-commerce Fashion Store Website",
      description:
        "Full-stack ecommerce platform for buyer and seller interaction in the sale of fashion clothes and accessories",
      technologies: ["Flutter", "Firebase", "GetX"],
      githubLink: "#",
      liveLink: "#",
      image: esoko2,
    },
    {
      name: "E-commerce Dashboard",
      description:
        "Admin dashboard for managing products, orders, and analytics.",
      technologies: ["React", "Express", "PostgreSQL", "Chart.js"],
      githubLink: "#",
      liveLink: "#",
      image: meetings1,
    },
    {
      name: "E-commerce Fashion Store Website",
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
      image: meetings1,
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 font-poppins">
      <div className="md:px-20 px-3 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-700 relative inline-block pb-1 mb-8 bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
            Projects Completed
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{
                duration: 1.4,
                ease: "easeInOut",
              }}
              className="absolute mx-auto bottom-[-12px] left-0 h-[2px] bg-gradient-to-r from-secondary to-white"
            />
          </h2>
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
                <div className="absolute px-6 inset-0 bg-primary/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                    style={{
                      background:
                        "linear-gradient(to left, rgba(130, 206, 220, 0.6), rgba(230, 230, 230, 1))",
                      color: "#048",
                    }}
                    className="flex items-center text-sm mx-2 font-semibold hover:text-white hover:bg-gray-600 gap-2 px-5 py-2  text-secondary-two rounded-md transition-transform transform hover:scale-105"
                  >
                    Live Demo <ExternalLink color="#048" size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-8">
          <button className="px-9 py-[11px] font-semibold border border-gray-300 text-white rounded-xl shadow-lg transition-transform transform hover:scale-105 bg-gradient-to-br from-secondary to-primary/30">
            <div className="flex space-x-3">
              <span className="">View All My Projects</span>
              <ChevronRight />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
