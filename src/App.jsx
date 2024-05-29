import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <HeroSection />
        <Technologies />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </>
  );
};

export default App;
