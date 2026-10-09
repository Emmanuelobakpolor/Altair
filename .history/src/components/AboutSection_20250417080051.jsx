import React, { useEffect, useState } from "react";
import "./aboutsection.css";
import logo from "../assets/Atlair_logo_white_cropped-1.webp";
import dashboardImage from "../assets/sh-hero-1024x772.webp";

const AboutSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <div className="hero-bg">
      <div className="hero-content">
        <div>
          <h3>ABOUT</h3>
        </div>
        <div></div>
      </div>
      <div className="dashboard-images">
        <span>
          <img src={dashboardImage} alt="Dashboard image" width={350} />
        </span>
      </div>
    </div>
  );
};

export default AboutSection;
