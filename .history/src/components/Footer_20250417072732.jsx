import React from "react";
import './Footer.css';
import bookImage from '../assets/footer/the-business-case-for-AI-stacked-edited-1024x1024.png';
import Goldman from '../assets/footer/unnamed.webp'

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="container">
        <div className="links-section">
          <h3>Consulting Links</h3>
          <ul>
            <li><a href="#">AI & Machine Learning Consulting</a></li>
            <li><a href="#">NLP Consulting</a></li>
            <li><a href="#">AI Strategy Consulting</a></li>
            <li><a href="#">AI Transformation Workshops</a></li>
          </ul>
        </div>

        <div className="image-section">
          <img
            src={Goldman} width={300}
            alt="Goldman Sachs: 10,000 Small Businesses"
          />
        </div>

        <div className="newsletter-section">
          <h3>Join 5000+ Leaders in Our Newsletter.</h3>
          <p>Zero Fluff. Practical AI Tips.</p>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>

        <div className="book-section">
          <img src={bookImage} alt="The Business Case for AI" width={150} />
          <div className="book-description">
            <p>We've authored an international bestseller</p>
            <a href="#" className="learn-more" style={{marginTop: 80, marginLeft: 10} }>LEARN MORE</a>
          </div>
        </div>

        <div className="scroll-up-button">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            &uarr;
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <div className="copyright">
          Copyright © 2025 Opinosis Analytics
        </div>
        <div className="links">
          <a href="#">AI & Generative AI Consulting</a>
          <a href="#">AI Transformation Workshops</a>
          <a href="#">AI Strategy Development</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;