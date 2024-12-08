import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Portfolio from "/portfolio.png";
import { Link, useNavigate } from "react-router-dom";
import ContactModal from "./ContactModal";
import { TbMessage } from "react-icons/tb";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", type: "scroll", target: "hero" },
    { name: "Experience", type: "route", target: "/experience" },
    { name: "Projects", type: "scroll", target: "projects" },
    { name: "Skills", type: "route", target: "/skills" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleNavigation = (item) => {
    if (item.type === "scroll") {
      // First check if we're on the home page
      if (window.location.pathname !== "/") {
        // If not, navigate to home page first
        navigate("/");
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.getElementById(item.target);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // If already on home page, just scroll
        scrollToSection(item.target);
      }
    } else {
      navigate(item.target);
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm font-poppins">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="flex space-x-6 items-center">
              <img src={Portfolio} alt="logo" className="w-12 h-12" />
              <span>Eddy O. Odhiambo</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavigation(item)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="text-gray-600 hover:text-primary transition-colors font-semibold relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}

            <motion.button
              onClick={() => setIsContactModalOpen(true)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="px-6 py-2 bg-gradient-to-br from-secondary to-primary/30 text-white rounded-lg shadow-md hover:shadow-lg group"
            >
              <div className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform">
                <TbMessage size={20} className="" />
                <span className="text-sm"> Contact Me</span>
              </div>
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="text-gray-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-white/95 backdrop-blur-md z-40 md:hidden"
            >
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-xl font-semibold text-gray-800 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.button
                  onClick={() => {
                    setIsContactModalOpen(true);
                    setIsOpen(false);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="px-8 py-3 bg-gradient-to-br from-primary to-secondary text-white rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  Contact Me
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
