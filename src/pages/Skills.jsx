import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Flutter", level: 80 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 85 },
        { name: "RESTful APIs", level: 90 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 70 },
        { name: "SQL Server", level: 80 },
        { name: "PostgreSQL", level: 80 },
        { name: "Sequelize ORM", level: 70 },
      ],
    },
    {
      title: "Cloud Services & DevOps",
      skills: [
        { name: "Azure CLI & DevOps", level: 75 },
        { name: "GitHub Actions", level: 80 },
        { name: "Docker", level: 50 },
        { name: "Kubernetes", level: 30 },
      ],
    },
    {
      title: "IT Support",
      skills: [
        { name: "Linux Systems", level: 80 },
        { name: "macOS", level: 85 },
        { name: "Windows", level: 100 },
        { name: "Ticketing Systems", level: 70 },
        { name: "Technical Troubleshooting", level: 90 },
      ],
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", py: 10 }}>
      <Container>
        <h2
          className="text-3xl font-bold text-gray-700  relative inline-block  pb-1 mb-8 bg-gradient-to-br from-primary to-secondary
      bg-clip-text text-transparent"
        >
          Skills and Expertise
        </h2>
        <Grid container spacing={4}>
          {skillCategories.map((category, categoryIndex) => (
            <Grid item xs={12} md={6} key={category.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <Paper sx={{ p: 3, borderRadius: 5 }}>
                  <h2 className="font-semibold font-poppins text-lg text-gray-500">
                    {category.title}
                  </h2>
                  {category.skills.map((skill, skillIndex) => (
                    <Box key={skill.name} sx={{ mt: 2, mb: 2 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <p className="font-poppins text-sm">{skill.name}</p>
                        <p className="font-poppins text-sm">{skill.level}%</p>
                      </Box>
                      <Box
                        sx={{
                          width: "100%",
                          bgcolor: "#eee",
                          borderRadius: 1,
                          height: 8,
                        }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          }}
                          style={{
                            height: "100%",
                            backgroundColor: "#1976d2",
                            borderRadius: 4,
                          }}
                        />
                      </Box>
                    </Box>
                  ))}
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
