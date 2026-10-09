import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <div className="features-container">
      <h2>How AI & Machine Learning Impacts Your Business</h2>
      <div className="features-grid">
        <div className="feature-item">
          <div className="icon">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#39414d" strokeWidth="2" />
              <text x="12" y="16" textAnchor="middle" fontSize="16" fill="#39414d">$</text>
            </svg>
          </div>
          <h3>Reduces Costs</h3>
          <p>
            AI reduces human needs in complex, repetitive workflows & processes, resulting in significant cost savings.
          </p>
        </div>
        <div className="feature-item">
          <div className="icon">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#39414d" strokeWidth="2" />
              <path d="M12 8v4l3 3" stroke="#39414d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3>Automates Workflow</h3>
          <p>
            AI automates tedious tasks by replicating humanlike thinking & decision-making.
          </p>
        </div>
        <div className="feature-item">
          <div className="icon">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#39414d" strokeWidth="2" />
              <text x="12" y="16" textAnchor="middle" fontSize="16" fill="#39414d">!</text>
            </svg>
          </div>
          <h3>Improves Work Quality</h3>
          <p>
            AI allows for more consistent processing with less distractions.
          </p>
        </div>
        <div className="feature-item">
          <div className="icon">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#39414d" strokeWidth="2" />
              <path d="M8 14l4-4 4 4" stroke="#39414d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3>Boosts Revenue</h3>
          <p>
            With machine learning, generative AI & NLP solutions, you can create hyper-personalized customer experiences to boost revenues and increase engagement.
          </p>
        </div>
        <div className="feature-item">
          <div className="icon">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#39414d" strokeWidth="2" />
              <path d="M9 12l2 2 4-4" stroke="#39414d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3>Creates Competitive Advantage</h3>
          <p>
            With AI and advanced data-driven insights, you can create unique value propositions against competitors through innovative solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
