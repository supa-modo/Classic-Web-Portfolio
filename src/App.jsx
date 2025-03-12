import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllProjectsPage from "./pages/AllProjectsPage";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/HomePage";

function App() {
  return (
    <>
      <Analytics />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjectsPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
