import { Box, Container, Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "ICT Technical Specialist (Intern)",
      company: "African Court on Human and People's Rights",
      period: "September, 2024 - Present",
      description:
        "Developed and maintained web applications using React, Node.js, and various databases. Implemented new features and improved application performance.",
      skills: ["Technical Support", "Server Management", "React", "MySql"],
    },
    {
      title: "IT Technical Support (Intern)",
      company: "East African Community Secretariat",
      period: "July 2023 - July, 2024",
      description:
        "Provided technical support and troubleshooting for various systems. Managed support ticketing system and resolved user issues.",
      skills: ["Linux", "macOS", "Ticketing Systems", "Technical Support"],
    },
    // Add more experiences here
  ];

  return (
    <Box sx={{ minHeight: "100vh", pt: 16 }}>
      <Container className="font-poppins">
        <h2 className="text-3xl font-bold text-gray-700 relative inline-block pb-1 mb-8 bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
          Professional Work Experience
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{
              duration: 1.4,
              ease: "easeInOut",
            }}
            className="absolute mx-auto bottom-[-12px] left-0 h-[2px] bg-gradient-to-r from-secondary to-white"
          />
        </h2>
        <Timeline position="alternate">
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Box
                    sx={{
                      p: 3,
                      paddingX: 5,
                      bgcolor: "background.paper",
                      borderRadius: 4,
                      boxShadow: 1,
                    }}
                  >
                    <h2 className="font-semibold font-poppins text-gray-600">
                      {exp.title}
                    </h2>
                    <h3 className="text-gray-400 font-semibold font-poppins text-sm">
                      {exp.company}
                    </h3>
                    <p className="text-xs text-secondary font-semibold py-1 font-poppins">
                      {exp.period}
                    </p>
                    <p className="text-[15px] text-gray-500 font-poppins">
                      {exp.description}
                    </p>
                    <Box sx={{ mt: 2 }}>
                      {exp.skills.map((skill) => (
                        <Typography
                          key={skill}
                          component="span"
                          sx={{
                            mr: 1,
                            px: 1,
                            py: 0.5,
                            bgcolor: "primary.light",
                            color: "primary.contrastText",
                            borderRadius: 1,
                            display: "inline-block",
                            mb: 1,
                            fontFamily: "Poppins",
                            fontSize: "0.8rem",
                          }}
                        >
                          {skill}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
};

export default Experience;
