import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Image,
  Menu,
  X,
} from "lucide-react";
import { projects } from "../data/projects";
import { FaGithub } from "react-icons/fa";

const ProjectsPage = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleProjectChange = (index) => {
    setCurrentProject(index);
    setCurrentImage(0);
    setIsMobileMenuOpen(false);
  };

  const handleNextImage = () => {
    if (projects[currentProject].images.length > 0) {
      setCurrentImage((prev) =>
        prev === projects[currentProject].images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (projects[currentProject].images.length > 0) {
      setCurrentImage((prev) =>
        prev === 0 ? projects[currentProject].images.length - 1 : prev - 1
      );
    }
  };

  const handleZoom = () => {
    setIsZoomed((prev) => !prev);
  };

  // Auto-switch images every 3 seconds
  useEffect(() => {
    if (projects[currentProject].images.length <= 1) return;

    const timer = setInterval(handleNextImage, 4000);
    return () => clearInterval(timer);
  }, [currentProject, currentImage]);

  return (
    <div className="min-h-screen font-poppins">
      <div className="container mx-auto px-4 pt-24 pb-8">
        <div className="text-center mb-4">
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
          <p className="pb-2">
            Choose a project from the left Navigation to view it on the right
            section. Click on an image to view or zoom fullscreen.
          </p>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50"
          >
            <Menu className="w-5 h-5" />
            <span>{projects[currentProject].name}</span>
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 min-h-[calc(100vh-250px)]">
          {/* Project Navigation - Desktop */}
          <div className="hidden md:block col-span-1 bg-white border border-gray-200 rounded-xl shadow-lg p-6 sticky top-24 h-[calc(100vh-250px)] overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              All Projects List
            </h3>
            <nav className="space-y-2">
              {projects.map((project, index) => (
                <motion.a
                  key={index}
                  href="#"
                  onClick={() => handleProjectChange(index)}
                  className={`block p-2 text-base rounded-lg hover:bg-gray-100 transition-colors ${
                    index === currentProject
                      ? "bg-primary/20 text-secondary font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  {project.name}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Project Details */}
          <div className="col-span-4 md:col-span-3 bg-white border border-gray-200 rounded-xl shadow-lg flex flex-col h-[calc(100vh-250px)]">
            <div className="relative h-[500px] overflow-hidden rounded-t-xl">
              {/* Project Image Carousel */}
              {projects[currentProject].images.length > 0 ? (
                <div className="relative w-full h-full">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImage}
                      src={projects[currentProject].images[currentImage]}
                      alt={`${projects[currentProject].name} - Image ${currentImage + 1}`}
                      className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{
                        opacity: { duration: 0.5, ease: "easeInOut" },
                        scale: { duration: 0.5, ease: "easeInOut" },
                      }}
                      onClick={handleZoom}
                    />
                  </AnimatePresence>

                  {/* Image Counter */}
                  {projects[currentProject].images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full">
                      {projects[currentProject].images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImage(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentImage
                              ? "bg-white w-6"
                              : "bg-white/50 hover:bg-white/80"
                          }`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Carousel Navigation */}
                  {projects[currentProject].images.length > 1 && (
                    <>
                      <motion.button
                        onClick={handlePrevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </motion.button>
                      <motion.button
                        onClick={handleNextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ChevronRight className="w-6 h-6" />
                      </motion.button>
                    </>
                  )}
                </div>
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <Image className="w-16 h-16 text-gray-400" />
                </div>
              )}
            </div>

            <div className="p-6 flex-1">
              <h2 className="text-xl font-bold text-secondary-two/70 mb-4">
                {projects[currentProject].name}
              </h2>
              <p className="text-gray-500 line-clamp-3 mb-6">
                {projects[currentProject].description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {projects[currentProject].tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href={projects[currentProject].githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text flex space-x-2 items-end font-semibold px-3 hover:text-blue-500 transition-colors"
                >
                  <FaGithub size={24} />
                  <span className="text-sm">View on GitHub</span>
                </a>
                <a
                  href={projects[currentProject].liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(130, 206, 220, 0.6), rgba(230, 230, 230, 1))",
                    color: "#048",
                  }}
                  className="group flex items-center text-sm mx-2 font-semibold hover:text-white hover:bg-gray-600 gap-2 px-5 py-2  text-secondary-two rounded-md transition-transform transform hover:scale-105"
                >
                  Live Demo{" "}
                  <ExternalLink
                    color="#048"
                    size={16}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-lg p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-700">
                  Projects
                </h3>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="space-y-2">
                {projects.map((project, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    onClick={() => handleProjectChange(index)}
                    className={`block px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors ${
                      index === currentProject
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-gray-500"
                    }`}
                  >
                    {project.name}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Zoom Overlay */}
      <AnimatePresence>
        {isZoomed && projects[currentProject].images.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 cursor-pointer"
            onClick={handleZoom}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[90%] max-h-[90vh]"
            >
              <motion.img
                src={projects[currentProject].images[currentImage]}
                alt={projects[currentProject].name}
                className="max-w-full max-h-[90vh] object-contain"
                layoutId={`project-image-${currentProject}-${currentImage}`}
              />

              {/* Navigation arrows in zoom view */}
              {projects[currentProject].images.length > 1 && (
                <>
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevImage();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </motion.button>
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextImage();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight className="w-8 h-8" />
                  </motion.button>
                </>
              )}

              {/* Image counter in zoom view */}
              {projects[currentProject].images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full">
                  {projects[currentProject].images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImage(index);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImage
                          ? "bg-white w-6"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsPage;
