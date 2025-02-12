import React from "react";
import { motion } from "framer-motion";
import { Download, Code, Briefcase, Award, MapPin, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import profileImg from "/photo.jpg?url";

const HeroAbout = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/EddyOchiengOdhiambo-Resume.pdf";
    link.download = "EddyOchiengOdhiambo-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/supa-modo",
      color: "#5E81AC",
      name: "My Github",
    },
    {
      icon: FaLinkedinIn,
      href: "https://linkedin.com/in/eddy-o-odhiambo",
      color: "#4299E1",
      name: "LinkedIn",
    },
  ];

  return (
    <section
      id="hero"
      className="relative py-24 md:pt-36 font-poppins overflow-hidden"
    >
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
            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-6 py-2 bg-primary/10 rounded-xl"
              >
                <span className="text-primary/70 font-semibold">
                  Full Stack Software Developer
                </span>
              </motion.div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight font-nunito">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Eddy Ochieng Odhiambo
                </span>
              </h1>
              <p className="text-gray-600 text-sm md:text-lg">
                Professional Developer crafting innovative, competent digital
                solutions with creativity and technical expertise. Transforming
                ideas into elegant, efficient professional code.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Node.js",
                "Express",
                "Flutter",
                "SQLServer",
                "PostgreSQL",
                "MongoDB",
              ].map((skill) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-1 bg-primary/15 border border-primary/5 shadow-lg rounded-lg text-xs md:text-[0.8rem] font-semibold text-primary/70"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pl-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex space-x-2 items-center"
                >
                  <link.icon
                    size={26}
                    color={link.color}
                    className="hover:text-opacity-80 transition-all"
                  />
                  <span className="text-sm font-semibold text-gray-500">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-2 text-sm bg-gradient-to-r from-primary/60 to-secondary text-white rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <Download size={20} />
                <span>Download my CV</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-2 text-sm border-2 border-primary/20 text-primary rounded-lg hover:bg-primary/5 transition-all"
              >
                View Projects
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 pt-6">
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
                  className="px-4 py-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all text-center"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="font-bold text-xl text-gray-800">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
              {/* Location and Contact Details */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center items-center space-x-6 text-gray-500 mb-8"
              >
                <div className="flex items-center space-x-2">
                  <MapPin size={18} className="text-red-500" />
                  <span className="text-sm">Nairobi, Kenya</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={18} className="text-primary" />
                  <span className="text-sm">eddieodhiambo11@gmail.com</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl" />
            <div className="relative aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img
                src={profileImg}
                alt="Eddy Ochieng Odhiambo Profile"
                className="object-cover "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
