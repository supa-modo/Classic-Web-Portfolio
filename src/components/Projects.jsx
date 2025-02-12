import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import esoko3 from "../assets/images/esoko/esoko3.png";
import kms1 from "../assets/images/kms/kms1.png";
import welfare1 from "../assets/images/welfare/welfare1.png";
import hslive1 from "../assets/images/hslive/hslive01.png";
import elite1 from "../assets/images/elite-fitness/elite1.png";

const Projects = () => {
  const navigate = useNavigate();
  const projects = [
    {
      name: "Staff Welfare Loans & Savings",
      description:
        "A demonstration of a full-stack web platform with features for managing, creating, editing loan applications and keeping track of member account savings records and interest accrued for staff members part of a welfare program in an organization.",
      technologies: ["React", "Node.js", "PostgreSql", "WebSockets"],
      githubLink:
        "https://github.com/supa-modo/Sacco-Welfare-Loans-and-Savings",
      liveLink: "https://orange-stone-09645d41e.4.azurestaticapps.net/",
      image: welfare1,
    },
    {
      name: "eSoko E-commerce Fashion Store",
      description:
        "A full-stack e-commerce platform that connects buyers to eSoko's fashion collection of men's, women's and children's clothes and accessories.",
      technologies: ["React", "Vite", "Redux", "Node.Js", "Express"],
      githubLink: "https://github.com/private-repo/esoko",
      liveLink: "https://icy-smoke-09e427410.4.azurestaticapps.net/",
      image: esoko3,
    },
    {
      name: "Private Jet Charter Site",
      description:
        "A static webapp for a private jet charter company to showcase their services and receive enquiries and communications with potential clients. Site showcases their jet fleet along with priccing and amenities among more other features.",

      technologies: ["React", "TailwindCss", "Shadcn"],
      githubLink: "https://github.com/supa-modo/HsLive-Bookings",
      liveLink: "https://www.shineluxuryprivatejets.com/",
      image: hslive1,
    },
    {
      name: "AfCHPR KMS",
      description:
        "This is a full stack react and node system that handles sharing and managing of documents across departments and units based on a heirarchical access control with options of storing several translated versions of the document's original language in other languages.",

      technologies: ["React", "Node", "Express", "PostgreSQL"],
      githubLink: "https://github.com/supa-modo/African-Court-KMS",
      liveLink: "https://african-court-kms.vercel.app/",
      image: kms1,
    },
    {
      name: "Gym Website",
      description:
        "A static website for a gym to showcase their services and receive enquiries and communications with potential clients. Site showcases their gym facilities and priccing and amenities among more other features.",
      technologies: ["React", "TailwindCss", "Framer Motion", "Shadcn"],
      githubLink: "https://github.com/supa-modo/gym-website",
      liveLink: "https://elite-fitness-zeta.vercel.app/",
      image: elite1,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen pt-4 pb-6 md:pt-6 md:pb-8 font-poppins"
    >
      <div className="md:px-20 px-4 mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 relative inline-block pb-1 mb-6 md:mb-8 bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
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
          <p className="pb-1 text-xs sm:text-sm md:text-base">
            Click on View All Projects button below this section to view and
            browse more about all the projects I've completed.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-100 border border-primary/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative h-40 sm:h-48 md:h-56 lg:h-64">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute px-4 sm:px-6 inset-0 bg-primary/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg sm:text-xl font-semibold text-background mb-1 sm:mb-2">
                    {project.name}
                  </h3>
                  <p className="text-background/80 text-xs sm:text-sm line-clamp-3 sm:line-clamp-4">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="p-3 sm:p-4 flex flex-col border-t">
                <h3 className="font-semibold text-secondary-two text-sm sm:text-base mb-1 sm:mb-2">
                  {project.name}
                </h3>
                <div className="flex flex-wrap gap-1 md:gap-2 mb-2 sm:mb-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-gray-500 rounded-lg text-[10px] sm:text-[11px] font-semibold"
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
                    className="text-text flex space-x-1 sm:space-x-2 items-end font-semibold px-2 sm:px-3 hover:text-blue-500 transition-colors"
                  >
                    <FaGithub size={20} className="w-4 h-4 sm:w-6 sm:h-6" />
                    <span className="text-[10px] sm:text-xs">
                      View on GitHub
                    </span>
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
                    className="group flex items-center text-xs sm:text-sm mx-1 sm:mx-2 font-semibold hover:text-white hover:bg-gray-600 gap-1 sm:gap-2 px-3 sm:px-5 py-1 sm:py-2 text-secondary-two rounded-md transition-transform transform hover:scale-105"
                  >
                    <span className="text-[10px] sm:text-xs md:text-[13px]">
                      Live Demo
                    </span>
                    <ExternalLink
                      color="#048"
                      size={14}
                      className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-6 md:mt-8">
          <button
            onClick={() => {
              navigate("/projects");
            }}
            className="group pl-4 pr-3 sm:pl-5 sm:pr-4 md:pl-7 md:pr-5 lg:px-9 py-1.5 sm:py-2 md:py-[11px] font-semibold border border-gray-300 text-white rounded-lg sm:rounded-xl shadow-lg transition-transform transform hover:scale-105 bg-gradient-to-br from-secondary to-primary/30"
          >
            <div className="flex space-x-1 sm:space-x-2 md:space-x-3">
              <span className="text-xs sm:text-sm md:text-base">
                View All My Projects
              </span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
