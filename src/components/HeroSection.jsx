import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Database,
  Globe,
  Layers,
  Sparkles,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { PiCodeBold, PiCodeDuotone, PiFileCSharpDuotone } from "react-icons/pi";
import { FaFlutter, FaReact } from "react-icons/fa6";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const particlesRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    // Create particles
    if (particlesRef.current) {
      const container = particlesRef.current;
      for (let i = 0; i < 20; i++) {
        createParticle(container);
      }
    }
  }, []);

  const createParticle = (container) => {
    const particle = document.createElement("div");

    // Random size between 2px and 6px
    const size = Math.random() * 4 + 2;

    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;

    // Random opacity
    const opacity = Math.random() * 0.5 + 0.1;

    // Random color
    const colors = ["#6366F1", "#8B5CF6", "#EC4899", "#3B82F6", "#10B981"];
    const color = colors[Math.floor(Math.random() * colors.length)];

    // Set styles
    particle.style.position = "absolute";
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.borderRadius = "50%";
    particle.style.backgroundColor = color;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.opacity = `${opacity}`;
    particle.style.filter = "blur(1px)";
    particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;

    // Animation
    const duration = Math.random() * 60 + 30;
    particle.style.animation = `float ${duration}s linear infinite`;

    // Add to container
    container.appendChild(particle);
  };

  if (!mounted) return null;

  return (
    <section
      id="home"
      className="relative min-h-screen pt-16 flex items-center overflow-hidden"
    >
      {/* Modern gradient background with noise texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: "url('/bg01.jpg')",
          }}
        ></div>
      </div>

      {/* Modern grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Particles container */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden">
        {/* Particles will be added here dynamically */}
      </div>

      {/* Updated gradient orbs with more subtle colors */}
      <div className="absolute top-10 -left-20 h-72 w-72 rounded-full bg-slate-800/10 blur-3xl" />
      <div className="absolute bottom-10 -right-20 h-80 w-80 rounded-full bg-slate-800/10 blur-3xl" />
      <div className="absolute top-2/3 left-1/4 h-60 w-60 rounded-full bg-slate-800/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 md:px-0 py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Redesigned left section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Enhanced status badge */}
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 px-4 py-1.5 text-sm backdrop-blur-md shadow-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-indigo-200 font-medium">
                Available for new projects
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-white leading-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <span className="block">
                  <GradientText
                    text="Eddy Ochieng"
                    delay={0.6}
                    gradient="from-indigo-300 via-slate-500 to-slate-200"
                  />
                </span>
                <div className="flex items-center space-x-2">
                  <span className="block mt-2">
                    <GradientText
                      text="Odhiambo"
                      delay={1.2}
                      gradient="from-indigo-400 via-indigo-100 to-slate-500"
                    />
                  </span>
                  <span className="animate-pulse text-indigo-300">|</span>
                </div>
              </motion.h1>

              <motion.div
                className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 via-blue-400 to-slate-300 rounded-full shadow-lg shadow-slate-500/10"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 1.8, duration: 0.5 }}
              />
            </div>

            <motion.div
              className="max-w-2xl space-y-5 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              <p className="text-xl font-open text-slate-300 leading-relaxed">
                A{" "}
                <span className="font-bold bg-gradient-to-r from-indigo-400 to-blue-200 bg-clip-text text-transparent">
                  Fullstack Software Developer
                </span>{" "}
                passionate about crafting elegant, innovative and competent
                professional digital solutions.
              </p>

              <div className="py-2">
                <span className="inline-block text-slate-300 font-medium text-lg mb-3">
                  Specialized in:
                </span>
                <div className="flex flex-wrap gap-3">
                  <EnhancedTechBadge
                    icon={<PiCodeDuotone className="h-5 w-5 text-slate-900" />}
                    label="JavaScript"
                    color="from-slate-300/80 to-slate-400/80"
                    textColor="text-slate-900"
                  />
                  <EnhancedTechBadge
                    icon={<PiCodeBold className="h-4 w-4 text-slate-900" />}
                    label="Typescript"
                    color="from-slate-300/80 to-slate-400/80"
                    textColor="text-slate-900"
                  />
                  <EnhancedTechBadge
                    icon={<FaReact className="h-4 w-4 text-slate-900" />}
                    label="React"
                    color="from-slate-300/80 to-slate-400/80"
                    textColor="text-slate-900"
                  />
                  <EnhancedTechBadge
                    icon={<FaFlutter className="h-4 w-4 text-slate-900" />}
                    label="Flutter"
                    color="from-slate-300/80 to-slate-400/80"
                    textColor="text-slate-900"
                  />

                  <EnhancedTechBadge
                    icon={
                      <PiFileCSharpDuotone className="h-5 w-5 text-slate-900" />
                    }
                    label="C#"
                    color="from-slate-300/80 to-slate-400/80"
                    textColor="text-slate-900"
                  />
                  <EnhancedTechBadge
                    icon={<Database className="h-4 w-4 text-slate-900" />}
                    label="MERN Stack"
                    color="from-slate-300/80 to-slate-400/80"
                    textColor="text-slate-900"
                  />
                </div>
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.5 }}
            >
              <motion.button
                className="group relative overflow-hidden flex items-center justify-center bg-gradient-to-r from-slate-600 to-slate-800 text-white border-0 px-8 py-3 rounded-xl text-lg font-medium shadow-lg shadow-slate-700/20 transition-all duration-200  "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.button>
              <motion.button
                className="group relative overflow-hidden flex items-center justify-center bg-transparent border border-slate-700/30 text-slate-300 hover:text-white hover:border-slate-400/50 px-8 py-3 rounded-xl text-lg font-medium transition-all duration-500 hover:bg-slate-800/10 backdrop-blur-sm"
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center">
                  Contact Me
                  <ExternalLink className="ml-2 h-5 w-5 opacity-70 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-slate-500 to-slate-400 group-hover:w-full transition-all duration-300" />
              </motion.button>
            </motion.div>

            {/* Enhanced social links */}
            <motion.div
              className="flex items-center gap-5 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.6, duration: 0.5 }}
            >
              <EnhancedSocialLink href="#" icon="github" />
              <EnhancedSocialLink href="#" icon="linkedin" />
              <EnhancedSocialLink href="#" icon="whatsapp" />
              <EnhancedSocialLink href="#" icon="email" />
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* 3D-like card with enhanced visuals */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-sm border border-slate-700/20 shadow-[0_0_25px_rgba(99,102,241,0.15)]">
              {/* Animated gradient border */}
              <div className="absolute inset-0 p-[1px] rounded-2xl overflow-hidden"></div>

              {/* Terminal header */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-slate-800/80 border-b border-slate-700/50 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs text-slate-400 mx-auto font-mono">
                  eddy@portfolio ~{" "}
                </div>
              </div>

              <div className="absolute inset-0 pt-8 flex items-center justify-center">
                <EnhancedCodeAnimation />
              </div>

              {/* Floating tech icons */}
              <FloatingTechIcon
                icon="/javascript.svg"
                alt="JavaScript"
                position="top-20 -right-4"
                size={40}
                animationDelay={0}
              />
              <FloatingTechIcon
                icon="/react.svg"
                alt="React"
                position="bottom-20 -left-6"
                size={40}
                animationDelay={1.5}
              />
              <FloatingTechIcon
                icon="/flutter.svg"
                alt="Flutter"
                position="-bottom-3 right-20"
                size={40}
                animationDelay={3}
              />

              {/* Decorative elements */}
              <div
                className="absolute top-1/2 left-1/2 h-2 w-2 rounded-full bg-slate-700 animate-ping"
                style={{ animationDuration: "5s", animationDelay: "2s" }}
              />
            </div>

            {/* Floating elements with enhanced visuals
            <motion.div
              className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-gradient-to-br from-slate-500/20 to-slate-600/20 backdrop-blur-md border border-slate-700/30 shadow-[0_0_15px_rgba(99,102,241,0.3)]"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 6,
                ease: "easeInOut",
              }}
            /> */}
            <motion.div
              className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-slate-600/10 to-slate-700/10 backdrop-blur-sm border border-slate-700/20 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 8,
                ease: "easeInOut",
              }}
            />

            {/* Stats cards */}
            <motion.div
              className="absolute -bottom-4 right-36 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-lg border border-slate-700/20 p-3 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <div className="text-xs text-slate-300 font-medium">
                Projects Completed
              </div>
              <div className="text-2xl font-bold text-white">25+</div>
            </motion.div>

            <motion.div
              className="absolute -right-10 top-1/3 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-lg border border-slate-700/20 p-3 shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              <div className="text-xs text-slate-300 font-medium">
                Client Satisfaction
              </div>
              <div className="text-2xl font-bold text-white">100%</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
      >
        <span className="text-sm text-slate-300 font-bold font-open">
          Scroll down
        </span>
        <div className="relative h-12 w-7 rounded-full border-2 border-slate-700/30 flex justify-center shadow-lg shadow-slate-500/10">
          <motion.div
            className="absolute top-1.5 h-2.5 w-2.5 bg-slate-400 rounded-full"
            animate={{
              y: [0, 18, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      {/* Custom CSS for animations */}
      <style jsx="true">{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(20px);
          }
          75% {
            transform: translateY(20px) translateX(10px);
          }
        }

        @keyframes gradient-rotate {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}

// Enhanced Tech Badge with gradient background
function EnhancedTechBadge({ icon, label, color, textColor }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${color} px-5 py-2 text-sm backdrop-blur-sm shadow-lg hover:shadow-lg hover:scale-105 transition-all duration-300 ${textColor} font-medium`}
    >
      {icon}
      <span className="font-extrabold font-nunito">{label}</span>
    </motion.div>
  );
}

// Enhanced Social Link with better hover effects
function EnhancedSocialLink({ href, icon }) {
  let IconComponent = null;

  switch (icon) {
    case "github":
      IconComponent = () => (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      );
      break;
    case "linkedin":
      IconComponent = () => (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
      break;

    case "whatsapp":
      IconComponent = () => (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.102-.471-.149-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.462 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      );
      break;
    case "email":
      IconComponent = () => (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      );
      break;
    default:
      IconComponent = () => <span />;
  }

  return (
    <motion.a
      href={href}
      className="group flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 text-indigo-300 border border-indigo-500/20 hover:text-white hover:border-indigo-400/50 hover:from-indigo-500/20 hover:to-purple-500/20 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        damping: 10,
        hover: {
          scale: 1.1,
          transition: {
            duration: 0.2,
          },
        },
      }}
    >
      {IconComponent && <IconComponent />}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.a>
  );
}

function GradientText({
  text,
  delay = 0,
  gradient = "from-indigo-400 via-purple-400 to-cyan-400",
}) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let timeout;
    let currentIndex = 0;

    const typeNextChar = () => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(typeNextChar, 100);
      }
    };

    const delayTimeout = setTimeout(() => {
      typeNextChar();
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(delayTimeout);
    };
  }, [text, delay]);

  return (
    <span
      className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
    >
      {displayText}
    </span>
  );
}

function FloatingTechIcon({ icon, alt, position, size, animationDelay }) {
  return (
    <motion.div
      className={`absolute ${position} z-10`}
      animate={{
        y: [0, -10, 0],
        rotate: [0, 10, 0],
      }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        duration: 4,
        delay: animationDelay,
        ease: "easeInOut",
      }}
    >
      <div className="relative bg-slate-800/80 backdrop-blur-md rounded-full p-2 border border-indigo-500/20 shadow-lg">
        <img
          src={icon || `/placeholder.svg?height=${size}&width=${size}`}
          alt={alt}
          width={size}
          height={size}
          className="rounded-full"
        />
      </div>
    </motion.div>
  );
}

function EnhancedCodeAnimation() {
  const codeLines = [
    "<Developer",
    '  name="Eddy Ochieng"',
    '  role="Fullstack Developer"',
    "  skills={[",
    "    'JavaScript',",
    "    'TypeScript',",
    "    'React',",
    "    'Flutter',",
    "    'MERN Stack',",
    "    'C# ASP.NET'",
    "  ]}",
    "  available={true}",
    "/>",
    "",
    "// Building innovative solutions",
    "// that solve real-world problems",
    "// with clean, efficient code.",
  ];

  return (
    <div className="w-full max-w-md rounded-lg bg-slate-900/90 p-4 font-mono text-xs sm:text-sm shadow-lg border border-indigo-500/10 overflow-hidden">
      <div className="space-y-1">
        {codeLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex"
          >
            <span className="text-slate-500 w-6 flex-shrink-0 select-none">
              {index + 1}
            </span>
            <span className="whitespace-pre">
              {line ? (
                <SyntaxHighlight line={line} />
              ) : (
                <span className="text-slate-600">&nbsp;</span>
              )}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Blinking cursor */}
      <motion.div
        className="h-4 w-2 bg-indigo-400 mt-1 ml-6"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
      />
    </div>
  );
}

function SyntaxHighlight({ line }) {
  // Simple syntax highlighting
  return (
    <span>
      {line.includes("//") ? (
        <>
          <span className="text-slate-500">{line}</span>
        </>
      ) : line.includes("<Developer") || line.includes("/>") ? (
        <>
          <span className="text-pink-400">{line.split(" ")[0]}</span>
          <span className="text-slate-300">
            {line.substring(line.split(" ")[0].length)}
          </span>
        </>
      ) : line.includes("name=") ||
        line.includes("role=") ||
        line.includes("skills=") ||
        line.includes("available=") ? (
        <>
          <span className="text-indigo-300">{line.split("=")[0]}</span>
          <span className="text-slate-300">=</span>
          {line.includes('"') ? (
            <>
              <span className="text-green-400">
                {line.substring(line.indexOf("=") + 1)}
              </span>
            </>
          ) : (
            <>
              <span className="text-yellow-400">
                {line.substring(line.indexOf("=") + 1)}
              </span>
            </>
          )}
        </>
      ) : line.includes("'") ? (
        <span className="text-green-400">{line}</span>
      ) : (
        <span className="text-slate-300">{line}</span>
      )}
    </span>
  );
}
