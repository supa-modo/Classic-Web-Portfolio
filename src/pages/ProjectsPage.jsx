import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description:
        "Detailed description of project 1. Include the problem it solves, your role, and the impact.",
      technologies: ["React", "Node.js", "MongoDB"],
      images: ["/project1-1.jpg", "/project1-2.jpg"],
      link: "https://github.com/yourusername/project1",
    },
    // Add more projects here
  ];

  return (
    <Box sx={{ minHeight: "100vh", pt: 10 }}>
      <Container>
        <h2
          className="text-3xl font-bold text-gray-700  relative inline-block  pb-1 mb-8 bg-gradient-to-br from-primary to-secondary
      bg-clip-text text-transparent"
        >
          Projects Completed
        </h2>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: { xs: "100%", md: "40%" },
                      objectFit: "cover",
                    }}
                    image={project.images[0]}
                    alt={project.title}
                  />
                  <CardContent sx={{ flex: "1" }}>
                    <Typography variant="h5" component="div" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      paragraph
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      {project.technologies.map((tech) => (
                        <Chip key={tech} label={tech} sx={{ mr: 1, mb: 1 }} />
                      ))}
                    </Box>
                    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                      {project.images.slice(1).map((image, index) => (
                        <Box
                          key={index}
                          component="img"
                          src={image}
                          sx={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                            borderRadius: 1,
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
