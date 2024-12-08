import React from "react";
import { motion } from "framer-motion";
import { Download, Code, Briefcase, Award, MapPin, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import profileImg from "/photo.jpg?url";

const HeroAbout = () => {
  const handleDownloadResume = () => {
    window.open("/path/to/your/resume.pdf", "_blank");
  };

  const stats = [
    {
      icon: <Briefcase size={30} className="text-primary" />,
      value: "3+",
      label: "Years of Experience",
    },
    {
      icon: <Code size={30} className="text-primary" />,
      value: "20+",
      label: "Completed Projects",
    },
    {
      icon: <Award size={30} className="text-primary" />,
      value: "5+",
      label: "Tech Certifications",
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/supa-modo",
      color: "#5E81AC",
    },
    {
      icon: FaLinkedinIn,
      href: "https://linkedin.com/in/your-profile",
      color: "#4299E1",
    },
  ];

  return (
    <section
      id="home"
      className="relative py-16 md:pt-36 font-poppins overflow-hidden"
    >
      {/* Subtle Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-sky-200 to-blue-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-sky-100 to-white rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="text-lg text-gray-600 mb-2">Hello, I'm</p>
              <h1 className="text-4xl font-bold text-gray-700 bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                Eddy Ochieng Odhiambo
              </h1>
              <h2 className="text-2xl font-semibold text-gray-500 mt-2">
                A FullStack Software Developer & Creative Technologist
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed">
              I am a passionate developer crafting innovative and competent
              digital solutions with a blend of creativity and technical
              expertise. Transforming ideas into elegant, efficient professional
              code.
            </p>

            {/* Skills Highlight */}
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Node.js",
                "Express",
                "Flutter",
                "MongoDB",
                "PostgreSQL",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
                className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-center space-x-2">
                  <Download size={18} />
                  <span>Download Resume</span>
                </div>
              </motion.button>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <link.icon
                      size={24}
                      color={link.color}
                      className="hover:text-opacity-80 transition-all"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
              <img
                src={profileImg}
                alt="Eddy Ochieng Odhiambo"
                className="relative z-10 w-80 h-80 object-cover rounded-full shadow-lg"
              />
            </div>
          </motion.div>
        </div>

        <div className="container mx-auto pt-16 px-4 relative z-10">
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
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-gray-700">{stat.value}</h3>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroAbout;
