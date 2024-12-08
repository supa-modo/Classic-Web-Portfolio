import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiFlutter,
  SiMongodb,
  SiPostgresql,
  SiSequelize,
  SiKubernetes,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import {
  FaDocker,
  FaGithub,
  FaWindows,
  FaLinux,
  FaServer,
  FaDesktop,
  FaUserTie,
} from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { SiMacos } from "react-icons/si";
import { HiOutlineDesktopComputer, HiSupport } from "react-icons/hi";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "ReactJS", icon: SiReact, color: "#61DAFB" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#000000" },
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "Azure CLI", icon: VscAzure, color: "#02569B" },
        { name: "Docker", icon: FaDocker, color: "#02569B" },
        { name: "GitHub Actions", icon: FaGithub, color: "#02569B" },
        { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "SQL Server", icon: DiMsqlServer, color: "#CC2927" },
        { name: "Sequelize ORM", icon: SiSequelize, color: "#CC2927" },
      ],
    },
  ];

  const miscellaneousSkills = [
    { name: "Windows", icon: FaWindows, color: "#0078D4" },
    { name: "Linux", icon: FaLinux, color: "#FCC624" },
    { name: "macOS", icon: SiMacos, color: "#A2AAAD" },
    { name: "Server Management", icon: FaServer, color: "#607D8B" },
    { name: "Microsoft Identity", icon: VscAzure, color: "#00A4EF" },
    {
      name: "Active Directory",
      icon: HiOutlineDesktopComputer,
      color: "#5E81AC",
    },
    { name: "DNS Configuration", icon: VscAzure, color: "#0089D6" },
    { name: "Technical Support", icon: HiSupport, color: "#4A90E2" },
    { name: "User Training", icon: FaUserTie, color: "#2ECC71" },
    { name: "Virtualization", icon: FaDesktop, color: "#9B59B6" },
    {
      name: "Remote Desktop",
      icon: HiOutlineDesktopComputer,
      color: "#34495E",
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 font-poppins">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-700 relative inline-block pb-1 mb-8 bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
            Skills and Expertise
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="py-4 px-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center border-b pb-2">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group"
                    >
                      <div className="bg-gray-100 p-3 rounded-full group-hover:bg-gray-300 transition-colors">
                        <skill.icon
                          size={30}
                          color={skill.color}
                          className="transition-transform"
                        />
                      </div>
                      <span className="text-[13px] text-gray-500 text-center font-semibold">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Miscellaneous Skills Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="lg:col-span-4 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-5 text-center border-b pb-3">
                Additional Technical Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {miscellaneousSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center space-y-2 p-3 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group"
                  >
                    <div className="bg-gray-100 p-5 rounded-full group-hover:bg-gray-300 transition-colors">
                      <skill.icon
                        size={30}
                        color={skill.color}
                        className="transition-transform"
                      />
                    </div>
                    <span className="text-[13px] text-gray-400 text-center font-semibold">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
                {/* Stylish "+ others" element */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center justify-center space-y-2 p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/10 cursor-pointer group"
                >
                  <div className="bg-white/90 p-3 rounded-full group-hover:bg-white transition-colors">
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary to-secondary">
                      +
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 font-semibold bg-clip-text text-transparent bg-gradient-to-br from-primary to-secondary">
                    Others...
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
