// WhyChooseGleefiy.jsx
import React from 'react';
import './WhyGleefiy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping, faBrain, faBullseye, faChartLine, faComments, faHeadset } from '@fortawesome/free-solid-svg-icons'; // Import the icons you want


const WhyChooseGleefiy = () => {
  const reasons = [
    {
      title: 'Done-For-You, Not DIY',
      description: 'You focus on what you love, and we handle the rest.  No more struggling with marketing tasks that take you away from your core business.',
      icon: 'fas fa-hands-helping', // Example Font Awesome icon
    },
    {
      title: 'AI + Human Expertise',
      description: 'The perfect blend of cutting-edge AI technology and human creativity. We leverage AI for efficiency and human insight for strategic brilliance.',
      icon: 'fas fa-brain',
    },
    {
      title: 'Tailored, Not One-Size-Fits-All',
      description: 'Every business is unique, and so is our approach. We craft custom strategies designed to achieve your specific goals.',
      icon: 'fas fa-bullseye',
    },
    {
      title: 'Results-Driven Approach',
      description: 'We are focused on delivering measurable results that impact your bottom line. Your success is our priority.',
      icon: 'fas fa-chart-line',
    },
    {
      title: 'Transparent Communication',
      description: 'We believe in clear and open communication. You’ll always be kept in the loop about the progress of your projects.',
      icon: 'fas fa-comments',
    },
    {
        title: 'Dedicated Support',
        description: 'Our team is here to support you every step of the way. We are committed to your success and provide ongoing support.',
        icon: 'fas fa-headset',
      },
  ];

  return (
    <section className="why-gleefiy">
      <div className="container">
        <h2>Why Choose Gleefiy?</h2>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <FontAwesomeIcon icon={
  reason.icon === 'fas fa-hands-helping' ? faHandsHelping :
  reason.icon === 'fas fa-brain' ? faBrain :
  reason.icon === 'fas fa-bullseye' ? faBullseye :
  reason.icon === 'fas fa-chart-line' ? faChartLine :
  reason.icon === 'fas fa-comments' ? faComments :
  reason.icon === 'fas fa-headset' ? faHeadset :
  null // Default icon or handle the case where no match is found
} />
<h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseGleefiy;