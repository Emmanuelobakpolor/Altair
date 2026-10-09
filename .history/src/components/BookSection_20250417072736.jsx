import React from "react";
import "./BookSection.css";
import thisBook from '../assets/the-business-case-for-AI-stacked-edited-1536x1152.png'

const BookSection = () => {
  return (
    <div className="book-section">
      <div className="book-content">
        <h2>We're Internationally Recognized AI for Business Transformation Experts</h2>
        <div className="testimonial-card">
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p>
            &#8220;You are NUTS! If you think you will kick off an AI initiative without truly understanding what is at stake—your chances of failure are high—unless you take the advice within Dr. Kavita Ganesan’s book...&#8221;
          </p>
        </div>
        <div className="author">
          <div className="quote-icon">&#8220;</div>
          <div className="author-details">
          <strong>Barry</strong> <br />
          <span>Amazon Reader</span>
          </div>
        </div>
      </div>
      <div className="book-image">
        <img src={thisBook} alt="The Business Case for AI"/>
      </div>
    </div>
  );
};

export default BookSection;