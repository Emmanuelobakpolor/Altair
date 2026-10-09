import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2>In Our Customers Own Words...</h2> <br /><br /><br />
      <div className="testimonials-grid">
        <div className="testimonial-item">
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p>
            Working with Opinosis Analytics has been a highly positive experience. Their <strong>collaborative approach</strong>, combined with a <strong>strategic mindset</strong>, ensured that we were aligned every step of the way. Opinosis took the time to understand our unique business challenges, delivering tailored AI solutions that met our needs and helped us mitigate risks. Their open communication, reliability, and professionalism were exceptional throughout the project. We’re extremely satisfied with the outcome and would absolutely recommend Opinosis Analytics to others.
          </p>
          <div className="quote-icon">
                &#8220;
            </div>
          <div className="author">
            
            <strong>Annie Quan</strong>
            <br />
            <span>Center for Federal Contractors</span>
          </div>
        </div>
        <div className="testimonial-item">
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p>
            Dr. Ganesan’s knowledge of Natural Language Processing (NLP) and text mining methodologies and their application to solve real-world problems is very impressive. She is able to understand the business goals and then apply and recommend the algorithms that would be most effective. Her work is of very high quality. Her communication skills are excellent and she is able to explain and support her work and her recommendations very well.&#8221;
          </p>
          <div className="quote-icon">
                &#8220;
            </div>
          <div className="author">
          
            <strong>Anupam Singh</strong>
            <br />
            <span>113 Industries (VoC & Market Research)</span>
          </div>
        </div>
      </div>
      <button className="cta-btn">Get Similar Results &#8594;</button>
    </div>
  );
};

export default Testimonials;
