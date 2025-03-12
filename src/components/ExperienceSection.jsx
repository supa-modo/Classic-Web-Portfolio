import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  MapPin,
  Briefcase,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { PiMapPinAreaDuotone, PiStackDuotone, PiUserListDuotone } from "react-icons/pi";
import { TbBriefcaseFilled, TbCalendarDot } from "react-icons/tb";

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Example experience data - replace with your actual experience
  const experiences = [
    {
      company: "TechCorp Solutions",
      position: "Senior Frontend Developer",
      duration: "Jan 2023 - Present",
      location: "Nairobi, Kenya",
      description:
        "Leading frontend development for enterprise applications using React and TypeScript. Improved application performance by 40% through code optimization and modern state management techniques.",
      achievements: [
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and established best practices for the team",
        "Developed reusable component library used across multiple projects",
      ],
      technologies: ["React", "TypeScript", "Redux", "Tailwind CSS"],
    },
    {
      company: "Innovate Digital",
      position: "Full Stack Developer",
      duration: "Mar 2021 - Dec 2022",
      location: "Remote",
      description:
        "Designed and developed full-stack web applications for clients in finance and healthcare sectors. Focused on responsive design and accessibility compliance.",
      achievements: [
        "Created an appointment scheduling system that increased client bookings by 35%",
        "Integrated payment gateways and reduced transaction failures by 25%",
        "Developed custom dashboards for data visualization",
      ],
      technologies: ["JavaScript", "Node.js", "MongoDB", "Express", "React"],
    },
    {
      company: "MobileTech Labs",
      position: "Mobile App Developer",
      duration: "Jun 2019 - Feb 2021",
      location: "Nairobi, Kenya",
      description:
        "Specialized in cross-platform mobile app development using Flutter. Worked on consumer-facing applications with complex state management and API integrations.",
      achievements: [
        "Launched 5 successful mobile applications with a combined 100K+ downloads",
        "Reduced app load time by 50% through optimization and caching strategies",
        "Integrated biometric authentication enhancing app security",
      ],
      technologies: ["Flutter", "Dart", "Firebase", "RESTful APIs", "SQLite"],
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center justify-center px-5 py-1.5 mb-4 text-sm font-medium font-open rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <PiUserListDuotone className="w-5 h-5 mr-2" />
            Expert
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold font- mb-4 text-white">
            Work{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-6 text-slate-300 text-xl max-w-2xl mx-auto">
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
            className="lg:col-span-8"
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
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.position}
                  </h3>
                  <h4 className="text-lg font-bold font-open tracking-tight text-indigo-400 mb-4">
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
