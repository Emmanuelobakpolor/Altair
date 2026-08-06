import React, { useEffect, useState } from "react";
import "./herosection.css";
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
          AI & Machine Learning Consulting: Strategy and Implementation—for
          Scalable, Sustainable AI Integration
        </h1>
        <p>
          We combine expert-driven strategies, proven frameworks, and deep
          technical AI expertise to accelerate AI adoption—enhancing operational
          efficiency, driving revenue growth, and minimizing errors in complex
          workflows.
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

export default HeroSection;
