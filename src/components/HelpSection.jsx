import React from "react";
import "./HelpSection.css";
import { useRevealChildren } from "../hooks/useReveal";

const cards = [
  {
    icon: "fa-brain",
    title: "AI & Data Solutions",
    text: "Navigate the future with AI and data science to drive growth and operational efficiency.",
  },
  {
    icon: "fa-chart-line",
    title: "Analytics & Insights",
    text: "Unlock actionable insights from your data to inform decision-making and strategy.",
  },
  {
    icon: "fa-compass",
    title: "Optimization & Strategy",
    text: "Optimize operations with data-driven playbooks for superior performance.",
  },
  {
    icon: "fa-chart-pie",
    title: "Visualization & BI",
    text: "Transform data into compelling visual stories for clear, insightful decisions.",
  },
];

const HelpSection = () => {
  const ref = useRevealChildren();

  return (
    <section className="help section" id="services" ref={ref}>
      <div className="container">
        <div className="help-header reveal">
          <span className="section-label">What we do</span>
          <h2 className="section-title">
            Expertise that moves{" "}
            <span className="grad">your roadmap</span>
          </h2>
          <p className="section-sub">
            Full-stack AI consulting — from opportunity discovery to production
            systems your team can own.
          </p>
        </div>

        <div className="help-grid stagger">
          {cards.map((card) => (
            <article key={card.title} className="help-card glass-card reveal">
              <div className="help-icon">
                <i className={`fas ${card.icon}`} aria-hidden="true" />
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <a href="#contact" className="help-link">
                Learn more
                <i className="fas fa-arrow-right" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
