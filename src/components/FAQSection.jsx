import React, { useEffect, useRef, useState } from "react";
import "./FAQSection.css";
import { useRevealChildren } from "../hooks/useReveal";

const faqs = [
  {
    question: "Is ChatGPT generative AI?",
    answer:
      "Yes. ChatGPT is a form of Generative artificial intelligence. Its capacity and depth are broad and can be customized into several different implementation forms.",
  },
  {
    question: "What services do you offer?",
    answer: (
      <>
        We offer AI, generative AI, machine learning, NLP, and data science
        services, including:
        <ul>
          <li>
            <strong>AI Integration:</strong> High-impact strategies and
            roadmaps tailored to your organization.
          </li>
          <li>
            <strong>AI Opportunity Assessments:</strong> Identify and evaluate
            AI-driven opportunities for maximum impact.
          </li>
          <li>
            <strong>NLP Consulting:</strong> Production-quality NLP and GenAI
            solutions for language-related problems.
          </li>
          <li>
            <strong>Industry solutions:</strong> AI for government, healthcare,
            legal, manufacturing, and more.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "What is AI and machine learning consulting?",
    answer:
      "Machine learning and AI consulting means partnering with experts to solve complex business problems, improve operations, reduce errors, increase engagement, and boost revenue — from high-level strategy to technical implementation. At Altair, we take projects from strategy through delivery using frameworks refined across global engagements.",
  },
  {
    question: "Do you offer both strategy and implementation?",
    answer:
      "Yes. We provide AI Strategy Development, Opportunity Assessments, NLP Solution Development, and full implementation support.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve mid-sized and large businesses across healthcare, government, legal, manufacturing, and internet companies. Many of our AI techniques are foundationally transferable across domains.",
  },
  {
    question: "What makes Altair unique?",
    answer:
      "Depth of knowledge and industry success. We've been hyper-focused on AI and data science from the beginning — publishing technical tools and business frameworks for opportunity evaluation, strategy, and success measurement adopted by companies and government agencies worldwide.",
  },
  {
    question: "How do ML models improve business outcomes?",
    answer:
      "Machine learning models enhance operations by automating decisions, optimizing workflows, and uncovering hidden insights. We design and implement custom models tailored to your needs so they deliver measurable results.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const ref = useRevealChildren();

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq section" id="faq" ref={ref}>
      <div className="container faq-layout">
        <div className="faq-intro reveal">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">
            Questions before you{" "}
            <span className="grad">reach out?</span>
          </h2>
          <p className="section-sub">
            Common questions about AI consulting, engagement models, and how we
            work with teams.
          </p>
        </div>

        <div className="faq-list stagger">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <FAQItem key={faq.question} faq={faq} isOpen={isOpen} onToggle={() => toggleFAQ(index)} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ faq, isOpen, onToggle }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    itemRef.current?.classList.toggle("is-open", isOpen);
  }, [isOpen]);

  return (
    <div ref={itemRef} className="faq-item glass-card reveal">
      <button
        type="button"
        className="faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{faq.question}</span>
        <span className="faq-icon" aria-hidden="true">
          <i className={`fas ${isOpen ? "fa-minus" : "fa-plus"}`} />
        </span>
      </button>
      <div
        className="faq-answer-wrap"
        style={{
          maxHeight: isOpen ? "600px" : "0px",
        }}
      >
        <div className="faq-answer">{faq.answer}</div>
      </div>
    </div>
  );
};

export default FAQSection;
