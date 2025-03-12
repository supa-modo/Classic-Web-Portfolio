import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectDetailsModal({
  activeProject,
  activeImageIndex,
  closeProjectDetail,
  nextImage,
  prevImage,
  setActiveImageIndex,
}) {
  if (!activeProject) return null;

  // Handle click outside the modal
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeProjectDetail();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={handleOverlayClick}
      >
        <motion.div
          className="relative w-full max-w-screen-xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800/90 rounded-3xl overflow-hidden shadow-2xl overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={closeProjectDetail}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-indigo-500/50 transition-all duration-300 border border-slate-700/30"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col h-[85vh]">
            {/* Image gallery */}
            <div className="relative lg:h-[70%] h-[500px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImageIndex}
                  src={activeProject.images[activeImageIndex]}
                  alt={`${activeProject.name} screenshot ${activeImageIndex + 1}`}
                  className="w-full h-full object-cover lg:h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>

              {/* Navigation buttons */}
              {activeProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-8/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-indigo-500/50 transition-all duration-300 border border-slate-700/30"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-indigo-500/50 transition-all duration-300 border border-slate-700/30"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Image counter */}
                  <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-sm text-xs text-white px-3 py-1 rounded-full border border-slate-700/30">
                    {activeImageIndex + 1} / {activeProject.images.length}
                  </div>
                </>
              )}

              {/* Thumbnail navigation for larger screens */}
              {activeProject.images.length > 1 && (
                <div className="absolute bottom-4 left-4 flex space-x-2 overflow-x-auto scrollbar-hide max-w-[80%] p-1">
                  {activeProject.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-12 h-12 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all ${
                        idx === activeImageIndex
                          ? "border-indigo-500 opacity-100"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Project information */}
            <div className="pt-8 pb-4 px-8 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl md:text-3xl font-extrabold font-open tracking-tight text-indigo-100">
                  {activeProject.name}
                </h2>
                <div className="flex gap-4">
                  {activeProject.githubLink && (
                    <a
                      href={activeProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 md:px-5 py-2 text-sm font-bold font-nunito tracking-wide rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-slate-700/30 transition-all duration-300"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span className="hidden md:inline">Source Code</span>
                    </a>
                  )}
                  {activeProject.liveLink && (
                    <a
                      href={activeProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 md:px-5 py-2 text-sm font-bold font-nunito tracking-wide rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="hidden md:inline">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {activeProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium font-open rounded-xl bg-indigo-500/10 text-indigo-200 border border-indigo-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm md:text-base text-slate-300 mb-6 sm:line-clamp-3 line-clamp-4 font-poppins">
                {activeProject.description}
              </p>

              {/* Technologies */}
              {activeProject.technologies && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Project timeframe */}
              {activeProject.timeframe && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Timeline
                  </h3>
                  <p className="text-slate-300">{activeProject.timeframe}</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
