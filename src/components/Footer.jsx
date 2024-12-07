import React from "react";
import {
  FaBehance,
  FaDribbble,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/supa-modo",
      color: "#5E81AC",
      label: "GitHub",
    },
    {
      icon: FaWhatsapp,
      href: "https://dribbble.com/your-profile",
      color: "#2E8B57",
      label: "Whatsapp",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/your-profile",
      color: "#E4405F",
      label: "Instagram",
    },
    {
      icon: FaLinkedinIn,
      href: "https://linkedin.com/in/your-profile",
      color: "#4299E1",
      label: "LinkedIn",
    },
    {
      icon: FaEnvelope,
      href: "mailto:your-email@example.com",
      color: "#718096",
      label: "Email",
    },
  ];

  return (
    <footer className="relative font-poppins bg-gradient-to-br from-[#dfe9f3] to-[#F0F9FF] text-gray-800 py-10 overflow-hidden">
      {/* Subtle background shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-sky-200 to-blue-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-sky-100 to-white rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div
                  className="absolute -inset-2 bg-white/30 rounded-full blur-md group-hover:opacity-50 transition-all duration-300"
                  style={{ backgroundColor: `${link.color}20` }}
                ></div>
                <link.icon
                  size={26}
                  color={link.color}
                  className="relative transform transition-transform duration-300 group-hover:scale-110"
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Creative CTA */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500">
              Let's Create Something Extraordinary
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm">
              Transforming ideas into visually stunning designs. Ready to bring
              your creative vision to life?
            </p>
            <motion.a
              href="mailto:your-email@example.com"
              className="inline-block group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="px-8 py-[10px] bg-gradient-to-r from-sky-500 to-blue-500 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform rounded-lg">
                Get in Touch
              </div>
            </motion.a>
          </motion.div>

          {/* Copyright with Artistic Touch */}
          <motion.div
            className="mt-10 text-gray-500 text-sm pt-4 border-t border-sky-500/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p>© {currentYear} Eddy Ochieng Odhiambo. All Rights Reserved.</p>
            <p className="text-xs mt-2 text-gray-400">
              Crafted with creativity and passion
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
