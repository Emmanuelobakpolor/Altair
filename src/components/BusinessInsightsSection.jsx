import React from "react";
import "./BusinessInsightsSection.css";
import microsoftOutageImage from "../assets/business-insight/5-Key-Lessons-from-the-Microsoft-Outage-1024x536.webp";
import genaiMythsImage from "../assets/business-insight/blog-images-5-common-genai-myths-1024x536.webp";
import llmHallucinationsImage from "../assets/business-insight/blog-images-6-Can-LLM-hallucinations-be-eliminated_--1024x536.webp";
import walmartAIImage from "../assets/business-insight/walmart-ai-use-cases-1024x536.webp";
import { useRevealChildren } from "../hooks/useReveal";

const cardData = [
  {
    title: "LLM Hallucinations",
    description:
      "Explore experiments across large language models to uncover insights on reliability and control.",
    image: llmHallucinationsImage,
    tag: "Research",
  },
  {
    title: "Microsoft Outage Lessons",
    description:
      "The July 2024 outage was a wake-up call — five lessons on resilience for AI-powered systems.",
    image: microsoftOutageImage,
    tag: "Ops",
  },
  {
    title: "Walmart AI Use Cases",
    description:
      "How Walmart pioneers AI to enhance service, personalize shopping, and empower employees.",
    image: walmartAIImage,
    tag: "Case Study",
  },
  {
    title: "GenAI Myths",
    description:
      "Dispelling common myths about implementing Generative AI that stall real business adoption.",
    image: genaiMythsImage,
    tag: "Strategy",
  },
];

const BusinessInsightsSection = () => {
  const ref = useRevealChildren();

  return (
    <section className="insights section" id="insights" ref={ref}>
      <div className="container">
        <div className="insights-header reveal">
          <span className="section-label">Knowledge hub</span>
          <h2 className="section-title">
            AI for business{" "}
            <span className="grad">tips & insights</span>
          </h2>
          <p className="section-sub">
            Practical writing for leaders who ship AI — not just talk about it.
          </p>
        </div>

        <div className="insights-grid stagger">
          {cardData.map((card) => (
            <article key={card.title} className="insight-card glass-card reveal">
              <div
                className="insight-image"
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <span className="insight-tag">{card.tag}</span>
              </div>
              <div className="insight-body">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <button type="button" className="insight-btn">
                  Read more
                  <i className="fas fa-arrow-right" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessInsightsSection;
