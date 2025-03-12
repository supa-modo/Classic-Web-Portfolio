import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion } from "framer-motion";
import Portfolio from "/portfolio.png";
import { useNavigate } from "react-router-dom";
import { TbDownload } from "react-icons/tb";
import { IoClose, IoMenu } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-800/90 backdrop-blur-sm shadow-md border-b border-indigo-500/10"
          : "bg-transparent"
      }`}
    >
      <div className=" sm:w-[87%] mx-auto px-4">
        <div className="flex md:h-20 h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className=" cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="flex md:space-x-5 space-x-3 items-center">
              <div className="md:rounded-2xl rounded-xl overflow-hidden w-12 h-10 sm:w-16 sm:h-14">
                <img
                  src="/logo.gif"
                  alt="logo"
                  className="w-full h-full object-fit"
                />
              </div>
              <span className="text-xl font-bold font-open bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Eddy Odhiambo
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.pathname !== "/") {
                    navigate("/");
                    setTimeout(() => {
                      document
                        .getElementById(item.href.substring(1))
                        ?.scrollIntoView({ behavior: "smooth" });
                    }, 100); // Small delay to allow page transition
                  } else {
                    document
                      .getElementById(item.href.substring(1))
                      ?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`px-3 py-2 text-[0.92rem] font-bold font-open transition-colors relative ${
                  activeSection === item.href.substring(1)
                    ? "text-white"
                    : "text-indigo-200/70 hover:text-white"
                }`}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-indigo-500 to-purple-500"
                    layoutId="navbar-indicator"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </a>
            ))}
            <button
              className="ml-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold font-poppins border-0 flex items-center gap-2 px-5 py-2 rounded-lg text-[0.84rem]"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Eddy_Odhiambo_Resume.pdf";
                link.download = "Eddy_Odhiambo_Resume.pdf"; // The name the file will be saved as
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <TbDownload className="h-4 w-4" />
              Resume/CV
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-md p-2 text-indigo-200 hover:bg-indigo-500/10 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <IoClose className="h-6 w-6" />
            ) : (
              <IoMenu className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-slate-900/95 backdrop-blur-md border-b border-indigo-500/10"
        >
          <div className="container mx-auto px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  if (window.location.pathname !== "/") {
                    navigate("/");
                    setTimeout(() => {
                      document
                        .getElementById(item.href.substring(1))
                        ?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  } else {
                    document
                      .getElementById(item.href.substring(1))
                      ?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`block px-3 py-2 text-base font-medium ${
                  activeSection === item.href.substring(1)
                    ? "text-white bg-indigo-500/10 rounded-md"
                    : "text-indigo-200/70 hover:text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2 pb-1">
              <button
                className="w-full font-medium font-poppins bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0 flex items-center justify-center gap-1 px-3 py-1.5 rounded-md text-[0.8rem]"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/resume.pdf";
                  link.download = "Eddy_Odhiambo_Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <TbDownload className="h-5 w-5" />
                Resume/CV
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
