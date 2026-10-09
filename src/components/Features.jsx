import React from "react";
import "./Features.css";
import { useRevealChildren } from "../hooks/useReveal";

const features = [
  {
    icon: "fa-coins",
    title: "Reduces Costs",
    text: "AI reduces human load in complex, repetitive workflows — delivering significant cost savings.",
  },
  {
    icon: "fa-gears",
    title: "Automates Workflow",
    text: "Replicate human-like decision-making to automate tedious tasks at scale.",
  },
  {
    icon: "fa-award",
    title: "Improves Work Quality",
    text: "More consistent processing with fewer distractions and fewer operational errors.",
  },
  {
    icon: "fa-chart-column",
    title: "Boosts Revenue",
    text: "Hyper-personalized experiences with ML, GenAI & NLP that increase engagement and revenue.",
  },
  {
    icon: "fa-trophy",
    title: "Competitive Advantage",
    text: "Unique value propositions through innovative, data-driven AI solutions.",
  },
];

const Features = () => {
  const ref = useRevealChildren();

  return (
    <section className="features section" id="impact" ref={ref}>
      <div className="container">
        <div className="features-header reveal">
          <span className="section-label">Business impact</span>
          <h2 className="section-title">
            How AI & ML reshape{" "}
            <span className="grad">your operations</span>
          </h2>
          <p className="section-sub">
            Practical outcomes leaders care about — cost, speed, quality, and
            durable advantage.
          </p>
        </div>

        <div className="features-grid stagger">
          {features.map((f, i) => (
            <article
              key={f.title}
              className={`feature-card glass-card reveal ${i === 0 ? "feature-card--wide" : ""}`}
            >
              <div className="feature-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="feature-icon">
                <i className={`fas ${f.icon}`} aria-hidden="true" />
              </div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
