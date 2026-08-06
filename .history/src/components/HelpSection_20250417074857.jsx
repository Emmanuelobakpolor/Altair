import React from "react";
import "./HelpSection.css";

const HelpSection = () => {
  return (
    <div className="help-section">
      <h2>
        Data Analytics and AI Solutions: <br /> Expertise
      </h2>
      <div className="help-cards">
        <div className="help-card">
          <div className="card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L4.5 20.29L5.21 19.59L12 16.87L18.79 19.59L19.5 20.29L12 2Z"
                fill="#2D7CF7"
              />
            </svg>
          </div>
          <h3>AI & Data Solutions</h3>
          <p>
            Navigate the future with AI and Dat Science to drive growth and
            efficiency
          </p>
          <a href="#" className="learn-more">
            LEARN MORE
          </a>
        </div>
        <div className="help-card">
          <div className="card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 3H21V7H3V3ZM3 17H21V21H3V17ZM3 10H21V14H3V10Z"
                fill="#2D7CF7"
              />
            </svg>
          </div>
          <h3>Data Analytics and Insights</h3>
          <p>
            Unlock actionable insights from your data to inform decision-making
            and strategy
          </p>
          <a href="#" className="learn-more">
            LEARN MORE
          </a>
        </div>
        <div className="help-card">
          <div className="card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 3H21V7H3V3ZM3 17H21V21H3V17ZM3 10H21V14H3V10Z"
                fill="#2D7CF7"
              />
            </svg>
          </div>
          <h3>Optimization and Strategy</h3>
          <p>
            Optimize operations and strategy with data driven insights for
            superior performance
          </p>
          <a href="#" className="learn-more">
            LEARN MORE
          </a>
        </div>
        <div className="help-card">
          <div className="card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 3H21V7H3V3ZM3 17H21V21H3V17ZM3 10H21V14H3V10Z"
                fill="#2D7CF7"
              />
            </svg>
          </div>
          <h3>Large Language Model Solutions</h3>
          <p>
            Unlock the power of LLMs with tailored strategies and scalable
            solutions. We help organizations fine-tune, optimize, and deploy LLM
            applications for real-world impact—enhancing automation, knowledge
            retrieval, content generation, and customer interactions.
          </p>
          <a href="#" className="learn-more">
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
