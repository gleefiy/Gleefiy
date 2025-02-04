// CTASection.jsx
import React from 'react';
import './CTASection.css';

const CTASection = ({ title, buttonText, buttonLink }) => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">{title}</h2>
          {buttonText && buttonLink && ( // Conditionally render the button
            <a href={buttonLink} className="cta-button">
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

CTASection.defaultProps = {
  title: "Ready to Transform Your Business?",
  buttonText: "Get Started Now",
  buttonLink: "/contact", // Or a real link
};

export default CTASection;