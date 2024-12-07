import { useEffect } from 'react';
import Slider from 'react-slick';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const ProjectCarousel = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "A brief description of project 1",
      image: "/project1.jpg"
    },
    // Add more projects here
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ width: '100%', mt: 8 }}>
      <Slider {...settings}>
        {projects.map((project) => (
          <Box key={project.id} sx={{ p: 2 }}>
            <Card sx={{ 
              height: '400px', 
              backgroundImage: `url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative'
            }}>
              <CardContent sx={{ 
                position: 'absolute', 
                bottom: 0, 
                width: '100%', 
                background: 'rgba(0,0,0,0.7)',
                color: 'white'
              }}>
                <Typography variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2">
                  {project.description}
                </Typography>
                <Button 
                  component={Link} 
                  to={`/projects/${project.id}`}
                  variant="contained" 
                  sx={{ mt: 2 }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ProjectCarousel;
