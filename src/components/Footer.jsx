import React from "react";
import "./Footer.css";
import { whatsappFullstackDevLink } from "../lib/contact";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <h3>Altair</h3>
          <p>
            AI and machine learning consulting to optimize operations and set
            your company up for future success.
          </p>
          <a href="mailto:chukoz71@gmail.com" className="footer-email">
            <i className="fas fa-envelope" aria-hidden="true" />
            chukoz71@gmail.com
          </a>
          <a
            href={whatsappFullstackDevLink("Fullstack Development services")}
            className="footer-email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp" aria-hidden="true" />
            08135578170
          </a>
        </div>

        <div className="footer-col">
          <h4>Consulting</h4>
          <ul>
            <li>
              <a href="#services">AI & Machine Learning</a>
            </li>
            <li>
              <a href="#services">NLP Consulting</a>
            </li>
            <li>
              <a href="#services">AI Strategy</a>
            </li>
            <li>
              <a href="#contact">Transformation Workshops</a>
            </li>
            <li>
              <a
                href={whatsappFullstackDevLink("Fullstack Mobile Development")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Fullstack Mobile Development
              </a>
            </li>
            <li>
              <a
                href={whatsappFullstackDevLink("Fullstack Web Development")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Fullstack Web Development
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li>
              <a href="#impact">Business Impact</a>
            </li>
            <li>
              <a href="#insights">Insights</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Join 5000+ leaders</h4>
          <p>Zero fluff. Practical AI tips.</p>
          <form
            className="newsletter-form"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input type="text" name="name" placeholder="Name" aria-label="Name" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              aria-label="Email"
              required
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>Copyright © {year} Altair Analytics</p>
          <div className="footer-bottom-links">
            <a href="#services">AI Consulting</a>
            <a href="#contact">Workshops</a>
            <a href="#contact">Contact</a>
          </div>
          <button
            type="button"
            className="scroll-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
          >
            <i className="fas fa-arrow-up" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
