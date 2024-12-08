import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "./ExperiencePage";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen text-text relative">
      {/* Content */}
      <div className="relative z-10">
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Experience />
        </main>
      </div>
    </div>
  );
};

export default Home;
