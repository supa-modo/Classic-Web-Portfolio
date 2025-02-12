import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Code,
  Briefcase,
  Award,
  MapPin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import Portfolio from "/portfolio.png";
import { TbMessage } from "react-icons/tb";

const NavbarAndHero = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
  ];

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-sm shadow-md font-poppins"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
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
                  <TbMessage size={20} className="hover:animate-bounce" />
                  <span className="text-sm"> Contact Me</span>
                </div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="text-gray-600 focus:outline-none"
            >
              {isOpen ? (
                <X size={24} className="text-red-500" />
              ) : (
                <Menu size={24} />
              )}
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
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 py-4 px-4 md:hidden"
            >
              <div className="container mx-auto space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full text-left px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-all flex items-center justify-between group"
                  >
                    <span className="font-medium text-sm">{item.name}</span>
                    <motion.div
                      initial={{ x: -4, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className="w-1.5 h-1.5 rounded-full bg-primary transform scale-0 group-hover:scale-100 transition-transform"
                    />
                  </motion.button>
                ))}
                <motion.button
                  onClick={() => {
                    setIsContactModalOpen(true);
                    setIsOpen(false);
                  }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="w-full mt-2 px-4 py-2.5 bg-gradient-to-br from-secondary to-primary/30 text-white rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                >
                  <TbMessage size={18} className="group-hover:animate-bounce" />
                  <span className="font-medium text-sm">Contact Me</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-primary/10 to-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block px-4 py-2 bg-primary/5 rounded-full"
                >
                  <span className="text-primary font-medium">
                    Full Stack Developer
                  </span>
                </motion.div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Eddy Ochieng
                  </span>
                  <br />
                  <span className="text-gray-700">Odhiambo</span>
                </h1>
                <p className="text-gray-600 text-lg">
                  Crafting innovative digital solutions with creativity and
                  technical expertise
                </p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "Node.js",
                  "Express",
                  "Flutter",
                  "SQL",
                  "MongoDB",
                ].map((skill) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white shadow-lg rounded-lg text-sm font-medium text-primary"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  <Download size={20} />
                  <span>Download CV</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-primary/20 text-primary rounded-lg hover:bg-primary/5 transition-all"
                >
                  View Projects
                </motion.button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Briefcase, value: "2+", label: "Years" },
                  { icon: Code, value: "15+", label: "Projects" },
                  { icon: Award, value: "3+", label: "Certificates" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all text-center"
                  >
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="font-bold text-xl text-gray-800">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative hidden md:block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
              <div className="relative aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src="/api/placeholder/600/600"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavbarAndHero;
