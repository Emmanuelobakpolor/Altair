import React from "react";
import "./herosection.css";
import dashboardImage from "../assets/sh-hero-1024x772.webp";

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      {/* Soft floating orbs */}
      <div className="hero-orb hero-orb--1" aria-hidden="true" />
      <div className="hero-orb hero-orb--2" aria-hidden="true" />
      <div className="hero-orb hero-orb--3" aria-hidden="true" />

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
