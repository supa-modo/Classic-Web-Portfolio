import React from "react";
import { Download, Github, Linkedin } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import profileImg from "/photo.jpg?url";

const Hero = () => {
  const handleDownloadResume = () => {
    window.open("/path/to/your/resume.pdf", "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-16"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <p className="text-primary text-lg font-medium">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text">
              Your Name
            </h1>
            <h2 className="text-2xl md:text-3xl text-text/70">
              Software Developer & Creative Technologist
            </h2>
          </div>

          <p className="text-text/80 max-w-xl mx-auto md:mx-0">
            Passionate developer crafting innovative digital solutions with a
            blend of creativity and technical expertise. Transforming ideas into
            elegant, efficient code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-background rounded-md hover:bg-primary-dark transition-colors"
            >
              <Download size={20} />
              Download Resume
            </button>

            <div className="flex items-center justify-center gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-primary transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-primary/10 rounded-full absolute inset-0 animate-blob"></div>
            <img
              src={profileImg}
              alt="Your Profile"
              className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-primary/50 shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Animated Background Blob */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
