// CaseStudies.jsx
import React from 'react';
import './CaseStudies.css';
import CTASection from '../Homepage/CTAsection/CTASection';
import { InViewAnimation } from '../InViewAnimation';
const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Client A: Social Media Engagement Soars",
      clientName: "Client A",
      challenge: "Struggled to create engaging social media content consistently, leading to low reach and engagement.",
      solution: "Implemented Gleefiy's AI-powered content creation and social media strategy. Developed targeted content calendars, automated posting schedules, and utilized AI for content optimization.",
      results: "Increased social media engagement by 60%, resulting in higher brand visibility and lead generation.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR5yV0H199TNJhZVeIhWJxS5CGA2-DUe2MlA&s", // Replace with actual image URL
    },
    {
      title: "Client B: SEO Rankings Skyrocket",
      clientName: "Client B",
      challenge: "Low search engine rankings hindered organic traffic and brand visibility.",
      solution: "Conducted in-depth keyword research, optimized website content and metadata, and implemented a strategic backlinking campaign.",
      results: "Boosted SEO rankings by 40%, driving significantly more organic traffic to the website.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR5yV0H199TNJhZVeIhWJxS5CGA2-DUe2MlA&s", // Replace with actual image URL
    },
    {
      title: "Client C: Email Marketing Conversions Explode",
      clientName: "Client C",
      challenge: "Email marketing campaigns had low open and click-through rates, resulting in poor conversions.",
      solution: "Utilized AI-driven automation and segmentation to personalize email campaigns and target specific audience segments with relevant content.",
      results: "Enhanced email marketing conversions by 50%, leading to a significant increase in sales and ROI.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR5yV0H199TNJhZVeIhWJxS5CGA2-DUe2MlA&s", // Replace with actual image URL
    },
    // ... more case studies
  ];

  return (
    <section className="case-studies">
      <InViewAnimation>
      <div className="container">
        <h2 className="case-studies-headline">Success Stories: How Businesses Scaled with AI-Powered Assistance</h2>
        <div className="case-studies-grid">
          {caseStudies.map((caseStudy, index) => (
            <div key={index} className="case-study-card">
              <img src={caseStudy.image} alt={caseStudy.title} className="case-study-image" />
              <div className="case-study-content">
                <h3 className="case-study-title">{caseStudy.title}</h3>
                <div className="case-study-details">
                  <h4>Challenge:</h4>
                  <p>{caseStudy.challenge}</p>
                  <h4>Solution:</h4>
                  <p>{caseStudy.solution}</p>
                  <h4>Results:</h4>
                  <p>{caseStudy.results}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </InViewAnimation>
      <br/>
      <br/>
      <CTASection title="Subscribe for AI-Driven Insights to Stay Ahead of the Competition!" 
              buttonText="Subscribe Now" 
              buttonLink="/pricing"/>
    </section>
  );
};



export default CaseStudies;