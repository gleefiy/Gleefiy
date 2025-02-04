// Headline.jsx
import React from 'react';
import './Headline.css';

const Headline = ({ text, subtext, center = true }) => {  // Added center prop
  return (
    <div className={`headline-container ${center ? 'center' : ''}`}> {/* Conditional class */}
      <h1 className="headline-text">{text}</h1>
      {subtext && <p className="headline-subtext">{subtext}</p>} {/* Conditionally render subtext */}
    </div>
  );
};

Headline.defaultProps = {
  text: "Your Main Headline Here",
  subtext: null,
  center: true, // Default to center alignment
};

export default Headline;