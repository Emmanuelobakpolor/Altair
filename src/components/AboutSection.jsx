import React from "react";
import "./aboutsection.css";
import { useRevealChildren } from "../hooks/useReveal";

const AboutSection = () => {
  const ref = useRevealChildren();

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container about-grid">
        <article className="about-card glass-card reveal-left">
          <span className="section-label">About</span>
          <h2 className="section-title">
            Built for teams that need{" "}
            <span className="grad">AI that works</span>
          </h2>
          <p>
            Altair is a leading data science firm and AI-powered solutions
            provider with a mission to bring the power of AI to every business
            — speeding growth, enabling intelligent products and services, and
            shaping smarter processes. From startups to enterprises, we help
            organizations solve their biggest data challenges.
          </p>
        </article>

        <article className="about-card glass-card about-card--mission reveal-right">
          <span className="section-label">Our mission</span>
          <h3>Innovate with AI. Automate with confidence.</h3>
          <p>
            As an artificial intelligence company focused on AI and big data
            software development, our mission is to help businesses innovate
            with AI, enrich customer insights, automate processes, and become
            more cost efficient.
          </p>
          <div className="about-pills">
            <span>Strategy</span>
            <span>Build</span>
            <span>Scale</span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default AboutSection;
