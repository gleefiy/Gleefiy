// ValueProposition.jsx
import React from 'react';
import './ValueProposition.css';
import CTASection from '../Homepage/CTAsection/CTASection';
import { InViewAnimation } from '../InViewAnimation';


const ValueProposition = () => {
  return (
    <section className="value-proposition">
      <InViewAnimation>
      <div className="container">
        <div className="value-content">
          <h1 className="value-headline">We Don't Support Your Vision, We Make It Our Mission.</h1>

          <div className="benefits-section">
            <h2>Why Choose Gleefiy?</h2> {/* Added a heading for clarity */}
            <ul className="benefits-list"> {/* Using a list for structured data */}
              <li className="benefit-item">
                <div className="benefit-icon"><i className="fas fa-rocket"></i></div> {/* Icon placeholder */}
                
                <div className="benefit-details">
                  <h3>Efficiency Beyond Limits</h3>
                  <p>Streamline your workflows and maximize productivity with cutting-edge technology that blends human expertise and intelligent systems.</p>
                </div>
              </li>
              <li className="benefit-item">
                <div className="benefit-icon"><i className="fas fa-bullseye"></i></div> {/* Icon placeholder */}
                <div className="benefit-details">
                  <h3>Personalized Solutions That Fit</h3>
                  <p>Whether you’re an influencer, small business, or brand, our services are tailored to your specific challenges, goals, and vision.</p>
                </div>
              </li>
              <li className="benefit-item">
                <div className="benefit-icon"><i className="fas fa-chart-line"></i></div> {/* Icon placeholder */}
                <div className="benefit-details">
                  <h3>Scalable Support for Every Stage</h3>
                  <p>From startups to established businesses, our flexible solutions are designed to grow with you, ensuring sustainable success.</p>
                </div>
              </li>
              <li className="benefit-item">
                <div className="benefit-icon"><i className="fas fa-dollar-sign"></i></div> {/* Icon placeholder */}
                <div className="benefit-details">
                  <h3>Affordable Excellence</h3>
                  <p>Delivering premium services without the premium price tag—high-quality support that’s budget-friendly and ROI-focused.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* <div className="cta-section2"> 
            <p>Ready to make your vision our mission?</p> 
            <a href="/contact" className="cta-button">Let's Talk</a>
          </div> */}
        </div>
      </div>
      </InViewAnimation>
      <CTASection title="Ready to make your vision our mission?" 
                    buttonText="Let's Talk!" 
                    buttonLink="/contact"/>
    </section>
  );
};



export default ValueProposition;