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
  SiTailwindcss,
  SiNextdotjs,
  SiMacos,
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
import { HiOutlineDesktopComputer, HiSupport } from "react-icons/hi";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      description: "Building beautiful, responsive user interfaces",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Flutter", icon: SiFlutter, color: "#02569B" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      ],
    },
    {
      category: "Backend Engineering",
      description: "Crafting robust server-side solutions",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      ],
    },
    {
      category: "Cloud & DevOps",
      description: "Deploying and scaling applications",
      skills: [
        { name: "Azure", icon: VscAzure, color: "#0089D6" },
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
        { name: "GitHub", icon: FaGithub, color: "#181717" },
        { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      ],
    },
    {
      category: "Database Management",
      description: "Designing and optimizing data solutions",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "SQL Server", icon: DiMsqlServer, color: "#CC2927" },
        { name: "Sequelize", icon: SiSequelize, color: "#52B0E7" },
      ],
    },
  ];

  const technicalSkills = [
    { name: "Windows", icon: FaWindows, color: "#0078D4" },
    { name: "Linux", icon: FaLinux, color: "#FCC624" },
    { name: "macOS", icon: SiMacos, color: "#000000" },
    { name: "Server Admin", icon: FaServer, color: "#607D8B" },
    { name: "Azure ID", icon: VscAzure, color: "#00A4EF" },
    {
      name: "Active Directory",
      icon: HiOutlineDesktopComputer,
      color: "#5E81AC",
    },
    { name: "DNS Config", icon: VscAzure, color: "#0089D6" },
    { name: "Tech Support", icon: HiSupport, color: "#4A90E2" },
    { name: "Training", icon: FaUserTie, color: "#2ECC71" },
    { name: "Virtualization", icon: FaDesktop, color: "#9B59B6" },
    {
      name: "Remote Desktop",
      icon: HiOutlineDesktopComputer,
      color: "#34495E",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-20 "
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-skill-subtext font-medium tracking-wider text-sm uppercase">
            Technical Expertise
          </span>
          <h2 className="mt-2 text-4xl font-bold text-skill-text">
            Skills & Capabilities
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-skill-card rounded-2xl p-6 shadow-lg shadow-skill-shadow border border-skill-border transition-all duration-300 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-skill-text mb-2">
                {category.category}
              </h3>
              <p className="text-skill-subtext text-sm mb-6">
                {category.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center group/skill"
                  >
                    <div className="p-3 rounded-xl bg-skill-icon group-hover/skill:bg-skill-icon-hover transition-colors duration-200">
                      <skill.icon
                        className="w-6 h-6 group-hover/skill:animate-icon-bounce"
                        style={{ color: skill.color }}
                      />
                    </div>
                    <span className="mt-2 text-sm text-skill-subtext group-hover/skill:text-skill-text transition-colors duration-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 bg-skill-card rounded-2xl p-8 shadow-lg shadow-skill-shadow border border-skill-border"
        >
          <h3 className="text-2xl font-semibold text-skill-text text-center mb-8">
            Additional Technical Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center group/tech transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-4 rounded-xl bg-skill-icon group-hover/tech:bg-skill-icon-hover transition-colors duration-200">
                  <skill.icon
                    className="w-6 h-6 group-hover/tech:animate-icon-bounce"
                    style={{ color: skill.color }}
                  />
                </div>
                <span className="mt-3 text-sm text-skill-subtext group-hover/tech:text-skill-text text-center transition-colors duration-200">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
