import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  MapPin,
  Briefcase,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import {
  PiMapPinAreaDuotone,
  PiStackDuotone,
  PiUserListDuotone,
} from "react-icons/pi";
import { TbBriefcaseFilled, TbCalendarDot } from "react-icons/tb";

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Example experience data - replace with your actual experience
  const experiences = [
    {
      company: "African Court on Human & Peoples Rights",
      position: "IT Specialist [Intern]",
      duration: "September 2024 - December 2024",
      location: "Arusha, Tanzania",
      description:
        "Responsible for the maintenance and support of the organization's IT infrastructure, including servers, networks, and desktop systems. Also involved in the implementation of new IT projects and policies.",
      achievements: [
        "Assisted in the setup and configuration of new IT equipment and systems",
        "Provided technical support to users and resolved IT issues",
        "Participated in the development of the Court's Knowledge Management System",
      ],
      technologies: [
        "SAP",
        "Active Directory",
        "Server Management",
        "React",
        "Express",
        "JavaScript",
        "Network Maintenance",
        "Node.js",
        "PostgreSQL",
        "Video & Multi-Language Audio Conferencing",
      ],
    },
    {
      company: "East African Community Secretariat",
      position: "IT Technical Officer",
      duration: "July 2023 - August 2024",
      location: "Arusha, Tanzania",
      description:
        "Responsible for the maintenance and support of the organization's IT infrastructure, including servers, networks, and desktop systems.",
      achievements: [
        "Created a meeting attandance signing system to ease the process of signing meeting attandance and move from paper based system.",
        "Responsible for the maintenance and support of the organization's IT infrastructure, including servers, networks, and desktop systems.",
        "Provided technical support in setup of conference room for both virtual and physical meetings.",
      ],
      technologies: [
        "Active Directory",
        "Server Management",
        "Network Maintenance",
        "JavaScript",
        "Node.js",
        "MongoDB",
        "Express",
        "React",
      ],
    },
    {
      company: "MobileTech Labs",
      position: "Mobile App Developer Intern",
      duration: "April 2023 - June 2023",
      location: "Nairobi, Kenya",
      description:
        "Specialized in cross-platform mobile app development using Flutter. Worked on consumer-facing applications with complex state management and API integrations.",
      achievements: [
        "Launched a successful mobile application with a combined 100K+ downloads",
        "Reduced app load time by 50% through optimization and caching strategies",
        "Integrated biometric authentication enhancing app security",
      ],
      technologies: ["Flutter", "Dart", "Firebase", "Javascript", "RESTful APIs"],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-20 bg-slate-900 overflow-hidden"
      ref={sectionRef}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Animated gradient orbs */}
      <div className="absolute top-40 -left-20 h-80 w-80 rounded-full bg-indigo-900/10 blur-3xl" />
      <div className="absolute bottom-20 -right-20 h-72 w-72 rounded-full bg-purple-900/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 w-full">
        <motion.div
          className="text-center mb-6 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center justify-center px-4 py-1 md:px-5 md:py-1.5 text-xs md:text-sm font-medium font-open rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <PiUserListDuotone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            Expert
          </motion.div>
          <h2 className="text-3xl mt-2 md:text-4xl lg:text-5xl font-extrabold mb-2 md:mb-4 text-white">
            Work{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="h-1 w-16 md:w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-4 md:mt-6 text-base md:text-xl text-slate-300 max-w-2xl mx-auto px-4 md:px-0">
            My professional journey across various companies and projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Timeline tabs navigation */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-900/50 backdrop-blur-md rounded-xl border border-slate-700/30 p-1 shadow-lg">
              {experiences.map((exp, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-4 transition-all duration-300 rounded-lg ${
                    activeTab === index
                      ? "bg-gradient-to-r from-indigo-900/40 to-slate-800/40 text-white shadow-md"
                      : "hover:bg-slate-800/30 text-slate-300"
                  }`}
                  whileHover={{ x: activeTab !== index ? 5 : 0 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3
                        className={`font-extrabold font-nunito ${activeTab === index ? "text-indigo-300" : "text-slate-200"}`}
                      >
                        {exp.company}
                      </h3>
                      <p className="text-sm opacity-80">{exp.position}</p>
                    </div>
                    <ChevronRight
                      className={`h-5 w-5 transition-all duration-300 ${
                        activeTab === index
                          ? "text-indigo-400 opacity-100"
                          : "text-slate-500 opacity-50"
                      }`}
                    />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Experience content */}
          <motion.div
            className="lg:col-span-8 bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-sm rounded-xl border border-slate-700/30 p-4 md:p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeTab === index ? 1 : 0,
                  y: activeTab === index ? 0 : 20,
                }}
                transition={{ duration: 0.4 }}
                className={`bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-sm rounded-xl border border-slate-700/30 p-6 shadow-lg h-full ${
                  activeTab === index ? "block" : "hidden"
                }`}
              >
                <div className="mb-4 md:mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
                    {exp.position}
                  </h3>
                  <h4 className="text-lg md:text-xl font-bold font-open tracking-tight text-indigo-400 mb-3 md:mb-4">
                    {exp.company}
                  </h4>

                  <div className="flex flex-wrap gap-6 mb-4 text-sm text-slate-200">
                    <div className="flex items-center gap-1.5">
                      <TbCalendarDot className="h-5 w-5 text-indigo-400" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <PiMapPinAreaDuotone className="h-5 w-5 text-indigo-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-slate-400 mb-4">{exp.description}</p>

                  <div className="mt-6">
                    <h5 className="text-white font-semibold mb-3 flex items-center">
                      <TbBriefcaseFilled className="h-5 w-5 mr-2 text-indigo-400" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-2 text-slate-400">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start"
                        >
                          <ChevronRight className="h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                          <span className="ml-2">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-3 flex items-center">
                    <PiStackDuotone className="h-5 w-5 mr-2 text-indigo-400" />
                    Technologies / Skills
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="px-4 py-1 rounded-xl text-xs font-medium font-open bg-gradient-to-r from-slate-800 to-slate-900 text-indigo-300 border border-indigo-500/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
