import React, { useEffect, useState } from "react";
import "./aboutsection.css";
import logo from "../assets/Atlair_logo_white_cropped-1.webp";
import dashboardImage from "../assets/sh-hero-1024x772.webp";

const HeroSection = () => {
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
      <header className={`main-header ${isScrolled ? "scrolled" : ""}`}>
        <nav className="navbar">
          <div className="logo">
            <span className="logo-icon">
              <img src={logo} alt="Atlair Logo" width={200} />
            </span>
          </div>
          <button className="toggle-btn" onClick={toggleMenu}>
            ☰
          </button>
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li>SERVICES</li>
            <li>INDUSTRIES</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <li>NEWSLETTER</li>
            <li>AI BOOK</li>
          </ul>
          <button className="cta-btn">BOOK A 20-MINUTE CALL</button>
        </nav>
      </header>
      <div className="hero-content">
        <h1>
          AI and Machine Learning Consulting to Optimize Operations and Set Your
          Company Up for Future Success
        </h1>
        <p>
          At Altair, we complement your team by transforming your data into
          actionable insights. We assist businesses in utilizing AI technologies
          like large language models, machine learning, and natural language
          processing to enhance efficiency, make informed data-driven choices,
          minimize human errors, and increase revenues while avoiding costly
          pitfalls. This is achieved through our unique strategic frameworks and
          proven implementation methods.
        </p>
        <button className="expert-btn">SPEAK TO AN EXPERT →</button>
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
