import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full z-50 bg-background/40 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors">
          <a href="#home">{"<YourName />"}</a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-text/80 hover:text-primary transition-colors duration-300 ease-in-out relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-4 py-2 bg-primary/20 text-primary rounded-md hover:bg-primary hover:text-background transition-colors duration-300 ease-in-out"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-text hover:text-primary focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-md z-40 md:hidden">
          <nav className="flex flex-col items-center justify-center h-full space-y-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={toggleMenu}
                className="text-2xl text-text/80 hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={toggleMenu}
              className="px-6 py-3 bg-primary/20 text-primary rounded-md hover:bg-primary hover:text-background transition-colors duration-300"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
