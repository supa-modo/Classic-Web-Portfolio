import React from "react";
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiFlutter,
  SiMongodb,
  SiPostgresql,
  SiSqlite,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#000000" },
      ],
    },
    {
      category: "Mobile",
      skills: [{ name: "Flutter", icon: SiFlutter, color: "#02569B" }],
    },
    {
      category: "Databases",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "SQL Server", icon: SiSqlite, color: "#CC2927" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-background/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            My Skills
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-background border border-primary/10 rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-semibold text-text mb-6 text-center">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center space-y-2 p-3 rounded-md hover:bg-primary/5 transition-colors"
                  >
                    <skill.icon
                      size={40}
                      color={skill.color}
                      className="mb-2 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-sm text-text/80 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
