import React from "react";
import { Award, Code, Briefcase } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: <Code size={32} className="text-primary" />,
      value: "3+",
      label: "Years of Experience",
    },
    {
      icon: <Briefcase size={32} className="text-primary" />,
      value: "20+",
      label: "Completed Projects",
    },
    {
      icon: <Award size={32} className="text-primary" />,
      value: "5+",
      label: "Tech Certifications",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <p className="text-text/80 leading-relaxed">
              I'm a dedicated software developer with a passion for creating
              innovative and efficient digital solutions. My journey in tech
              began with a curiosity to understand how complex systems work,
              which has evolved into a career of crafting elegant code and
              solving real-world problems.
            </p>
            <p className="text-text/80 leading-relaxed">
              Specializing in full-stack development, I leverage modern
              technologies to build scalable and user-centric applications. My
              approach combines technical expertise with creative
              problem-solving, ensuring that each project not only meets but
              exceeds expectations.
            </p>
            <div className="flex flex-wrap gap-4">
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
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Stats and Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-background/20 backdrop-blur-sm border border-primary/10 rounded-lg p-6 text-center shadow-sm transform transition-all hover:scale-105"
              >
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <h3 className="text-2xl font-bold text-text mb-2">
                  {stat.value}
                </h3>
                <p className="text-text/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
