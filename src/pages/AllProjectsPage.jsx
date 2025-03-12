import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  ExternalLink,
  Code,
  X,
  ArrowLeft,
} from "lucide-react";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import { PiCodeDuotone } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import ProjectDetailsModal from "../components/ProjectDetailsModal";

export default function AllProjectsPage() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [filter, setFilter] = useState("All");
  const [projectsToShow, setProjectsToShow] = useState(projects);
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: false, amount: 0.2 });

  // Get unique tags from all projects for filtering
  const allTags = [
    "All",
    ...new Set(projects.flatMap((project) => project.tags)),
  ];

  // Effect to filter projects when filter changes
  useEffect(() => {
    if (filter === "All") {
      setProjectsToShow(projects);
    } else {
      setProjectsToShow(
        projects.filter((project) => project.tags.includes(filter))
      );
    }
  }, [filter]);

  // Project detail view handlers
  const openProjectDetail = (project) => {
    setActiveProject(project);
    setActiveImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeProjectDetail = () => {
    setActiveProject(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (activeProject) {
      setActiveImageIndex((prev) =>
        prev === activeProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (activeProject) {
      setActiveImageIndex((prev) =>
        prev === 0 ? activeProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950/30 w-full relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      {/* Decorative orbs - moved inside the container to prevent overflow */}
      <div className="absolute top-1/4 left-0 h-72 w-72 rounded-full bg-indigo-600/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 h-80 w-80 rounded-full bg-purple-600/5 blur-3xl" />

      <div className="max-w-screen-2xl relative z-10 mx-auto px-4 py-24">
        {/* Page header */}
        <motion.div
          ref={headerRef}
          className="mb-12 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center justify-center px-5 py-1.5 mb-4 text-sm font-medium font-nunito rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <PiCodeDuotone className="w-5 h-5 mr-2" />
            Portfolio
          </motion.div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 pb-2 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
            All Projects
          </h1>

          <p className="text-base sm:text-lg font-nunito font-semibold text-indigo-100/80">
            Explore my complete portfolio showcasing a variety of projects
            across different technologies and domains. Each project includes
            detailed information and multiple screenshots.
          </p>
        </motion.div>

        {/* Filter tags - Modified for horizontal scrolling */}
        <div className="mb-10 w-full overflow-x-auto scrollbar-hide">
          <div className="flex gap-2.5 pb-2 w-max">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  filter === tag
                    ? "bg-indigo-500 text-white"
                    : "bg-slate-800/80 text-slate-300 hover:bg-indigo-500/20 border border-slate-700/30"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {projectsToShow.map((project, index) => (
            <motion.div
              key={project.name}
              className="group rounded-2xl overflow-hidden border border-slate-700/30 bg-slate-900/50 backdrop-blur-sm hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => openProjectDetail(project)}
            >
              {/* Project card content */}
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium font-open rounded-xl bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-open text-white mb-2 group-hover:text-indigo-200 transition-colors">
                  {project.name}
                </h3>

                <p className="text-xs sm:text-sm font-poppins text-slate-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <button className="text-indigo-300 text-xs sm:text-sm font-bold font-open inline-flex items-center hover:text-indigo-200 transition-colors">
                  View Details
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <ProjectDetailsModal
        activeProject={activeProject}
        activeImageIndex={activeImageIndex}
        closeProjectDetail={closeProjectDetail}
        nextImage={nextImage}
        prevImage={prevImage}
        setActiveImageIndex={setActiveImageIndex}
      />
    </div>
  );
}
