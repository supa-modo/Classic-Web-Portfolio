import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ChevronDown,
  Terminal,
  Brain,
  BarChart4,
  Zap,
  Layers,
  GitBranch,
  Laptop,
} from "lucide-react";
import {
  PiBrainDuotone,
  PiGitBranchDuotone,
  PiLaptopDuotone,
  PiStackDuotone,
  PiTerminalDuotone,
} from "react-icons/pi";
import { IoBarChart } from "react-icons/io5";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Define skill categories
  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend",
      icon: <PiLaptopDuotone className="w-6 h-6" />,
      description:
        "Creating responsive, intuitive, and visually appealing user interfaces",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "Javascript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 80 },
        { name: "Flutter", level: 98 },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: <PiTerminalDuotone className="w-6 h-6" />,
      description:
        "Building robust, scalable server-side applications and APIs",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express", level: 85 },
        { name: "Typescript", level: 80 },
        { name: "Javascript", level: 75 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 82 },
      ],
    },
    {
      id: "devops",
      name: "DevOps",
      icon: <PiGitBranchDuotone className="w-6 h-6" />,
      description: "Managing deployment, CI/CD, and infrastructure automation",
      skills: [
        { name: "Docker", level: 85 },
        { name: "Azure CLI", level: 92 },
        { name: "GitHub Actions", level: 80 },
        { name: "Render", level: 78 },
        { name: "Vercel", level: 88 },
        { name: "Railway", level: 85 },
      ],
    },
    {
      id: "data",
      name: "Data & AI",
      icon: <PiBrainDuotone className="w-6 h-6" />,
      description: "Leveraging data analytics and AI for intelligent solutions",
      skills: [
        { name: "PostgreSQL", level: 75 },
        { name: "MsSQL", level: 88 },
        { name: "Data Visualization", level: 85 },
        { name: "MongoDB", level: 82 },
        { name: "Firebase", level: 85 },
        { name: "Sequelize", level: 72 },
      ],
    },
  ];

  // Find the active category data
  const activeCategoryData = skillCategories.find(
    (cat) => cat.id === activeCategory
  );

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 bg-slate-900 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      {/* Decorative orbs */}
      <div className="absolute bottom-1/4 -left-20 h-72 w-72 rounded-full bg-indigo-600/5 blur-3xl" />
      <div className="absolute top-1/4 -right-20 h-80 w-80 rounded-full bg-purple-600/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 w-full">
        {/* Section header */}
        <motion.div
          className="text-center mb-8 md:mb-16"
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
            <Zap className="w-3 h-3 md:w-4 md:h-4 mr-2" />
            Expertise
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 bg-gradient-to-r from-slate-300 to-indigo-300 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <p className="text-base md:text-lg text-indigo-100/80 max-w-2xl mx-auto px-4 md:px-0">
            With a diverse skill set spanning multiple domains, I bring
            versatility and depth to every project I work on. Here's what I
            bring to the table.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Skill categories sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700/30 overflow-hidden">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left px-4 py-3 flex items-center transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-indigo-500/20 to-indigo-500/5 border-l-2 border-indigo-500"
                      : "hover:bg-slate-800/50"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center mr-3 ${
                      activeCategory === category.id
                        ? "bg-indigo-500/20 text-indigo-300"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {category.icon}
                  </div>
                  <span
                    className={
                      activeCategory === category.id
                        ? "text-white font-medium"
                        : "text-slate-300"
                    }
                  >
                    {category.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Custom animated skill graphic */}
            <motion.div
              className="hidden lg:flex mt-8 h-64 relative bg-slate-900/30 backdrop-blur-sm rounded-xl border border-slate-700/30 p-4 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <PiStackDuotone
                  className="w-44 h-44 text-indigo-500"
                  strokeWidth={0.6}
                />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-center">
                <h3 className="text-white text-lg font-bold font-nunito mb-2">
                  Why It Matters
                </h3>
                <p className="text-slate-300 text-sm">
                  Technical excellence is just the beginning. I combine these
                  skills with problem-solving, creativity, and attention to
                  detail to build solutions that truly make a difference.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-700/30">
                  <div className="flex items-center text-indigo-300 text-sm">
                    <span>Always learning and improving</span>
                    <ChevronDown className="w-4 h-4 ml-2 animate-bounce" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills visualization */}
          <motion.div
            className="lg:col-span-4 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700/30 p-4 md:p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            key={activeCategory}
          >
            {activeCategoryData && (
              <>
                <div className="mb-6 md:mb-8">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mr-3">
                      {activeCategoryData.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-extrabold font-nunito text-white">
                      {activeCategoryData.name}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-slate-300">
                    {activeCategoryData.description}
                  </p>
                </div>

                <motion.div
                  className="grid md:grid-cols-2 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {activeCategoryData.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="group relative"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-white text-sm md:text-[0.95rem] font-bold font-nunito">
                          {skill.name}
                        </h4>
                        <span className="text-indigo-300 text-sm font-open font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>

                      {/*  skill info box overlay with edge detection */}
                      <div
                        className={`absolute ${
                          index % 2 === 0 ? "left-0" : "right-0"
                        } top-full mt-2 w-full max-w-[300px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20 transform group-hover:translate-y-1 pointer-events-none`}
                        style={{
                          transitionProperty: "opacity, visibility, transform",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        <div className="p-3 bg-slate-800/95 backdrop-blur-sm rounded-md text-xs text-slate-300 shadow-lg border border-slate-700/50 relative">
                          {/* Small arrow pointing to the skill */}
                          <div
                            className={`absolute -top-2 ${
                              index % 2 === 0 ? "left-6" : "right-6"
                            } w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-slate-800/95`}
                          ></div>

                          {skill.level >= 90
                            ? "Expert level proficiency with deep knowledge"
                            : skill.level >= 80
                              ? "Advanced skills with substantial experience"
                              : skill.level >= 70
                                ? "Strong working knowledge and practical application"
                                : "Competent with fundamental understanding"}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Additional visual elements */}
                <div className="grid grid-cols-3 gap-4 mt-10 pt-6 border-t border-slate-700/30">
                  <motion.div
                    className="bg-slate-800/50 rounded-lg py-4 px-2 text-center backdrop-blur-sm border border-slate-700/30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mx-auto mb-3">
                      <IoBarChart className="w-6 h-6 text-indigo-300" />
                    </div>
                    <h5 className="text-white font-medium text-xs sm:text-sm md:text-base">
                      Years Experience
                    </h5>
                    <p className="text-indigo-300 text-xl sm:text-2xl font-bold font-open">
                      5+
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-slate-800/50 rounded-lg py-4 px-2 text-center backdrop-blur-sm border border-slate-700/30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mx-auto mb-3">
                      <PiLaptopDuotone className="w-7 h-7 text-indigo-300" />
                    </div>
                    <h5 className="text-white font-medium text-xs sm:text-sm md:text-base">
                      Projects Completed
                    </h5>
                    <p className="text-indigo-300 text-xl sm:text-2xl font-bold font-open">
                      25+
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-slate-800/50 rounded-lg py-4 px-2 text-center backdrop-blur-sm border border-slate-700/30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mx-auto mb-3">
                      <PiStackDuotone className="w-7 h-7 text-indigo-300" />
                    </div>
                    <h5 className="text-white font-medium text-xs sm:text-sm md:text-base">
                      Technologies
                    </h5>
                    <p className="text-indigo-300 text-xl sm:text-2xl font-bold font-open">
                      20+
                    </p>
                  </motion.div>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
