import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code,
  ExternalLink,
  Github,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { projects } from "../data/projects";
import { PiCodeDuotone, PiLinkDuotone } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  const [width, setWidth] = useState(0);
  const carouselRef = useRef(null);
  const featuredRef = useRef(null);
  const isInView = useInView(featuredRef, { once: false, amount: 0.2 });

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        setWidth(
          carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
        );
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Next and previous project handlers
  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section
      id="projects"
      className="relative py-24 bg-gradient-to-b from-slate-950/70 via-slate-900 to-slate-900 overflow-hidden"
    >
      {/* Modern gradient background with noise texture */}

      {/* <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: "url('/bg01.jpg')",
          }}
        ></div> */}

      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-indigo-600/5 blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 h-80 w-80 rounded-full bg-purple-600/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 w-full">
        {/* Section header */}
        <motion.div
          className="text-center mb-10"
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
            <PiCodeDuotone className="w-5 h-5 mr-2" />
            My Work
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 pb-3 bg-gradient-to-r from-slate-100 to-indigo-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <p className="text-lg text-indigo-100/80 max-w-2xl mx-auto">
            Explore my portfolio of projects spanning web development, mobile
            applications, AI solutions, and blockchain innovations.
          </p>
        </motion.div>

        {/* Featured Project Spotlight */}
        <div ref={featuredRef} className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl shadow-2xl shadow-indigo-500/10"
          >
            <div className="grid md:grid-cols-2 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700/30">
              {/* Featured Project Image */}
              <div className="relative h-[17rem] md:h-[28rem] overflow-hidden">
                <motion.img
                  src={projects[activeProject].images[0]}
                  alt={projects[activeProject].name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.05 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent md:bg-gradient-to-t md:from-transparent md:to-transparent" />

                {/* Project navigation */}
                <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
                  <button
                    onClick={prevProject}
                    className="w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700/30 flex items-center justify-center text-white hover:bg-indigo-500/20 hover:border-indigo-400/30 transition-all duration-300"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextProject}
                    className="w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700/30 flex items-center justify-center text-white hover:bg-indigo-500/20 hover:border-indigo-400/30 transition-all duration-300"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Project count indicator */}
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-xs text-white px-3 py-1 rounded-full border border-slate-700/30">
                  {activeProject + 1} / {projects.length}
                </div>
              </div>

              {/* Featured Project Info */}
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <motion.h3
                    className="text-2xl md:text-3xl font-extrabold font-open tracking-tight text-indigo-300 mb-3"
                    key={projects[activeProject].name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {projects[activeProject].name}
                  </motion.h3>

                  <motion.p
                    className="text-slate-300 mb-6 md:text-lg font-nunito "
                    key={`desc-${activeProject}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {projects[activeProject].description}
                  </motion.p>

                  {/* Tags */}
                  <motion.div
                    className="flex flex-wrap gap-2 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {projects[activeProject].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1 text-xs font-medium font-open rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-200 border border-indigo-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </div>

                {/* Project links */}
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {projects[activeProject].githubLink && (
                    <a
                      href={projects[activeProject].githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2 text-sm font-medium font-nunito rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-slate-700/30 transition-all duration-300"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>Source Code</span>
                    </a>
                  )}
                  {projects[activeProject].liveLink && (
                    <a
                      href={projects[activeProject].liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2 text-sm font-medium font-nunito rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white transition-all duration-300"
                    >
                      <PiLinkDuotone className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section divider */}
        <div className="flex items-center justify-center mb-10">
          <div className="h-px w-full max-w-sm bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
          <span className="mx-4 text-indigo-300 text-sm font-bold font-open">
            More Projects
          </span>
          <div className="h-px w-full max-w-sm bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        </div>

        {/* Projects carousel */}
        <motion.div
          ref={carouselRef}
          className="overflow-hidden cursor-grab"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="flex gap-6 px-2 py-4"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={`carousel-${project.name}`}
                className="relative min-w-[280px] sm:min-w-[320px] lg:min-w-[420px] h-[360px] group rounded-2xl overflow-hidden flex-shrink-0 border border-slate-700/30 backdrop-blur-sm"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project background with gradient overlay */}
                <div className="absolute inset-0">
                  <img
                    src={project.images[2]}
                    alt={project.name}
                    className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/10" />
                </div>

                {/* Project content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="text-xs font-medium font-open bg-indigo-500/20 text-indigo-200 px-3 py-1 rounded-xl w-fit mb-4 backdrop-blur-sm border border-indigo-500/20">
                    {project.tags[0]}
                  </span>

                  <h3 className="text-xl font-bold font-open tracking-tight text-white mb-2 group-hover:text-indigo-200 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-sm text-slate-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Project links */}
                  <div className="flex gap-3 mt-auto">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800/80 backdrop-blur-sm text-white hover:bg-indigo-500/30 hover:text-white transition-all duration-300 border border-slate-700/30"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800/80 backdrop-blur-sm text-white hover:bg-indigo-500/30 hover:text-white transition-all duration-300 border border-slate-700/30"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 border-2 border-indigo-500/0 rounded-xl group-hover:border-indigo-500/30 transition-all duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* View all projects button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="/projects"
            className="group relative overflow-hidden flex items-center justify-center bg-gradient-to-r from-slate-800 to-slate-900 text-white font-nunito px-8 py-3 rounded-xl text-lg font-bold shadow-lg shadow-slate-900/20 transition-all duration-300 hover:shadow-indigo-500/20 border border-slate-700/30"
          >
            <span className="relative z-10 flex items-center">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-indigo-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
