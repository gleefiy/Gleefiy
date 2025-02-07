import React from 'react';
import './HeroSection.css';
import TextChange from './TextChange';

const HeroSection = () => {
  return (

    <div className="hero-container">
      <div className="hero-content">
        <TextChange/>
        <h1 className="hero-title">Elevate your Virtual Brand</h1>
        <p className="hero-subtitle">
          Designed for Visionaries, Entrepreneurs & Creators.
        </p>
        <p className="hero-subtitle">
        More Results, Less Effort, Maximum Growth.
        </p>
        <button className="hero-cta">Get Your Free Growth Strategy Now</button>
      </div>
    </div>
  );
};

export default HeroSection;