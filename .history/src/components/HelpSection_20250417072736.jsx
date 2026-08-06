import React from "react";
import "./HelpSection.css";

const HelpSection = () => {
  return (
    <div className="help-section">
      <h2>How We Help With AI & Machine Learning Consulting <br /> Services</h2>
      <div className="help-cards">
        <div className="help-card">
          <div className="card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L4.5 20.29L5.21 19.59L12 16.87L18.79 19.59L19.5 20.29L12 2Z" fill="#2D7CF7" />
            </svg>
          </div>
          <h3>AI & Generative AI Integration</h3>
          <p>
            We develop high-impact AI integration strategies tailored for your organization. With proven frameworks and deep industry expertise, we identify the best AI and Generative AI use cases and create a clear, actionable roadmap for success. We also support its seamless implementation.
          </p>
          <a href="#" className="learn-more">LEARN MORE</a>
        </div>
        <div className="help-card">
          <div className="card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M3 3H21V7H3V3ZM3 17H21V21H3V17ZM3 10H21V14H3V10Z" fill="#2D7CF7" />
            </svg>
          </div>
          <h3>Machine Learning & NLP Development</h3>
          <p>
            Solve complex automation challenges with tailored, production-ready ML and NLP solutions. From document categorization and sentiment analysis to chatbots, entity recognition, and insights extraction, we help teams build high-quality AI systems that drive efficiency and impact.
          </p>
          <a href="#" className="learn-more">LEARN MORE</a>
        </div>
        <div className="help-card">
          <div className="card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M3 3H21V7H3V3ZM3 17H21V21H3V17ZM3 10H21V14H3V10Z" fill="#2D7CF7" />
            </svg>
          </div>
          <h3>AI Readiness Assessments</h3>
          <p>
            Ensure a smooth AI transformation by identifying and addressing technology and infrastructure gaps in preparation for AI. We provide a clear, strategic roadmap to optimize AI integration and drive long-term success.
          </p>
          <a href="#" className="learn-more">LEARN MORE</a>
        </div>
        <div className="help-card">
          <div className="card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M3 3H21V7H3V3ZM3 17H21V21H3V17ZM3 10H21V14H3V10Z" fill="#2D7CF7" />
            </svg>
          </div>
          <h3>Large Language Model Solutions</h3>
          <p>
            Unlock the power of LLMs with tailored strategies and scalable solutions. We help organizations fine-tune, optimize, and deploy LLM applications for real-world impact—enhancing automation, knowledge retrieval, content generation, and customer interactions.
          </p>
          <a href="#" className="learn-more">LEARN MORE</a>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
