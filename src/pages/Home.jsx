import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "./Experience";
import Footer from "../components/Footer";
import backgroundImage from "../assets/images/background.jpg";

const Home = () => {
  return (
    <div className="min-h-screen text-text relative">
      {/* Content */}
      <div className="relative z-10">
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
