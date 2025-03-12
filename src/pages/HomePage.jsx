import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";

const Home = () => {
  return (
    <div className="min-h-screen text-text relative overflow-x-hidden">
      {/* Content */}
      <div className="relative z-10 w-full">
        <main className="">
          <HeroSection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
        </main>
      </div>
    </div>
  );
};

export default Home;
