import React, { useEffect, useRef, useState } from "react";
import "./herosection.css";
import logo from "../assets/alt_logo.png";
import {
  WHATSAPP_CALL_LINK,
  whatsappTrainingLink,
  whatsappFullstackDevLink,
} from "../lib/contact";

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
    name: "Fullstack Mobile Development",
    icon: "fas fa-mobile-alt",
    contact: "fullstack",
  },
  {
    name: "Fullstack Web Development",
    icon: "fas fa-code",
    contact: "fullstack",
  },
  {
    name: "Schedule",
    icon: "fas fa-calendar-alt",
    message: "Hi Altair, I'd like to see the upcoming training schedule.",
  },
];

const trainingLink = (course) =>
  course.contact === "fullstack"
    ? whatsappFullstackDevLink(course.name, course.message)
    : whatsappTrainingLink(course.name, course.message);

const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTrainingsOpen, setIsTrainingsOpen] = useState(false);
  const [isMobileTrainingsOpen, setIsMobileTrainingsOpen] = useState(false);
  const trainingsRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
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
                      href={trainingLink(course)}
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
                    href={trainingLink(course)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                  >
                    <span className="hero-trainings-item-icon">
                      <i className={course.icon} aria-hidden="true" />
                    </span>
                    <span>{course.name}</span>
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
  );
};

export default SiteHeader;
