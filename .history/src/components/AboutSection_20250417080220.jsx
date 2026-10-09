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

  return (
    <div className="hero-bg">
      <div className="hero-content">
        <div>
          <h3>ABOUT</h3>
          <p>
            Altair is a leading data science firm and AI-powered solutions
            provider with a mission to bring the power of AI to every business
            to speed up growth, help organizations of any size create
            intelligent products and services or shape intelligent business
            processes. From small startups to large enterprises, we help
            organizations to find perfect solutions to their big data
            challenges.
          </p>
        </div>
        <div>
          <h3>OUR MISSION</h3>
          <p>
            As an Artificial intelligence company, we are focused on AI and Big
            Data software development. Our mission is to help businesses
            innovate with AI, enrich customers insights, automate processes and
            be more cost efficient.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
