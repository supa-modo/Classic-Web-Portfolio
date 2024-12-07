import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: "rgba(255, 255, 255, 0.95)",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            color: "#333",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Portfolio
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component={Link}
            to="/"
            color="inherit"
            sx={{ color: "#333" }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/projects"
            color="inherit"
            sx={{ color: "#333" }}
          >
            Projects
          </Button>
          <Button
            component={Link}
            to="/experience"
            color="inherit"
            sx={{ color: "#333" }}
          >
            Experience
          </Button>
          <Button
            component={Link}
            to="/skills"
            color="inherit"
            sx={{ color: "#333" }}
          >
            Skills
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
