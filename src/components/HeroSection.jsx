import React, { useEffect, useRef, useState } from "react";
import "./herosection.css";
import logo from "../assets/alt_logo.png";
import dashboardImage from "../assets/sh-hero-1024x772.webp";
import { WHATSAPP_CALL_LINK, whatsappTrainingLink } from "../lib/contact";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Impact", href: "#impact" },
  { label: "Insights", href: "#insights" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const TRAININGS = [
  { name: "Large Language Models Bootcamp", icon: "fas fa-brain" },
  { name: "Agentic AI Bootcamp", icon: "fas fa-robot" },
  { name: "Data Science Bootcamp", icon: "fas fa-chart-line" },
  { name: "Python for Data Science", icon: "fab fa-python" },
  { name: "Introduction to Power BI", icon: "fas fa-chart-pie" },
  { name: "Data Science for Business Leaders", icon: "fas fa-briefcase" },
  { name: "Practicum Program", icon: "fas fa-laptop-code" },
  { name: "Data Science Certificates", icon: "fas fa-certificate" },
  {
    name: "Schedule",
    icon: "fas fa-calendar-alt",
    message: "Hi Altair, I'd like to see the upcoming training schedule.",
  },
];

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTrainingsOpen, setIsTrainingsOpen] = useState(false);
  const [isMobileTrainingsOpen, setIsMobileTrainingsOpen] = useState(false);
  const trainingsRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isTrainingsOpen) return;
    const onClickOutside = (e) => {
      if (trainingsRef.current && !trainingsRef.current.contains(e.target)) {
        setIsTrainingsOpen(false);
      }
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsTrainingsOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isTrainingsOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMobileTrainingsOpen(false);
  };

  return (
    <section className="hero" id="home">
      {/* Soft floating orbs */}
      <div className="hero-orb hero-orb--1" aria-hidden="true" />
      <div className="hero-orb hero-orb--2" aria-hidden="true" />
      <div className="hero-orb hero-orb--3" aria-hidden="true" />

      <header className={`hero-header ${isScrolled ? "is-scrolled" : ""}`}>
        <nav className="hero-nav container">
          <a href="#home" className="hero-logo" onClick={closeMenu}>
            <img src={logo} alt="Altair" width={36} height={36} />
            <span>Altair</span>
          </a>

          <ul className={`hero-links ${isMenuOpen ? "is-open" : ""}`}>
            <li className="hero-trainings" ref={trainingsRef}>
              <button
                type="button"
                className={`hero-trainings-trigger ${isTrainingsOpen ? "is-open" : ""}`}
                onClick={() => setIsTrainingsOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={isTrainingsOpen}
              >
                <i className="fas fa-graduation-cap" aria-hidden="true" />
                Trainings
                <i className="fas fa-chevron-down hero-trainings-chevron" aria-hidden="true" />
              </button>

              <div className={`hero-trainings-panel ${isTrainingsOpen ? "is-open" : ""}`}>
                <span className="hero-trainings-panel-label">Our Courses</span>
                <ul className="scroll-thin">
                  {TRAININGS.map((course) => (
                    <li key={course.name}>
                      <a
                        href={whatsappTrainingLink(course.name, course.message)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          setIsTrainingsOpen(false);
                          closeMenu();
                        }}
                      >
                        <span className="hero-trainings-item-icon">
                          <i className={course.icon} aria-hidden="true" />
                        </span>
                        <span>{course.name}</span>
                        <i className="fab fa-whatsapp hero-trainings-item-wa" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}

            <li className="hero-links-mobile-trainings">
              <button
                type="button"
                className={`hero-mobile-trainings-trigger ${isMobileTrainingsOpen ? "is-open" : ""}`}
                onClick={() => setIsMobileTrainingsOpen((v) => !v)}
                aria-expanded={isMobileTrainingsOpen}
              >
                <span>
                  <i className="fas fa-graduation-cap" aria-hidden="true" />
                  Trainings
                </span>
                <i className="fas fa-chevron-down" aria-hidden="true" />
              </button>
              <ul className={`hero-mobile-trainings-list ${isMobileTrainingsOpen ? "is-open" : ""}`}>
                {TRAININGS.map((course) => (
                  <li key={course.name}>
                    <a
                      href={whatsappTrainingLink(course.name, course.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                    >
                      <span className="hero-trainings-item-icon">
                        <i className={course.icon} aria-hidden="true" />
                      </span>
                      <span>{course.name}</span>
                      <i className="fab fa-whatsapp hero-trainings-item-wa" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li className="hero-links-cta">
              <a
                href={WHATSAPP_CALL_LINK}
                className="btn btn-primary"
                onClick={closeMenu}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp" aria-hidden="true" />
                Book a Call
              </a>
            </li>
          </ul>

          <a
            href={WHATSAPP_CALL_LINK}
            className="btn btn-primary hero-cta-desktop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp" aria-hidden="true" />
            Book a 20-min Call
          </a>

          <button
            className={`hero-burger ${isMenuOpen ? "is-open" : ""}`}
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      <div className="hero-body container">
        <div className="hero-copy">
          <span className="section-label hero-badge">Consulting Open</span>

          <h1 className="hero-title">
            Begin Your{" "}
            <span className="grad">AI Transformation</span>
          </h1>

          <p className="hero-lead">
            At Altair, we complement your team by transforming data into
            actionable insights. We help businesses use LLMs, machine learning,
            and NLP to boost efficiency, cut errors, and grow revenue — with
            proven strategic frameworks.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Speak to an Expert
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </a>
            <a href="#services" className="btn btn-secondary">
              View Services
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>24–48h</strong>
              <span>Response time</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>Full-cycle</strong>
              <span>Strategy → Build</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>5000+</strong>
              <span>Leaders informed</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-frame">
            <img
              src={dashboardImage}
              alt="AI analytics dashboard preview"
              className="hero-dashboard"
            />
            <div className="hero-float-card hero-float-card--top">
              <div className="float-icon">
                <i className="fas fa-bolt" />
              </div>
              <div>
                <strong>Clarity first</strong>
                <p>Choose a use case, share context, we guide the rest.</p>
              </div>
            </div>
            <div className="hero-float-card hero-float-card--bottom">
              <span className="float-tag">Signal</span>
              <strong>AI that ships</strong>
              <p>Strategy + implementation under one roof.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
};

export default HeroSection;
