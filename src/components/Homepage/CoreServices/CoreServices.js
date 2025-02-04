// CoreServices.jsx
import React from 'react';
import './CoreServices.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib, faUsers, faEnvelope, faSearch, faRocket } from '@fortawesome/free-solid-svg-icons';

const CoreServices = () => {
  const services = [
    {
      title: 'Content Creation & Branding',
      description: 'Captivating content that inspires, engages, and drives action. We build brands that are impossible to ignore.',
      deliverables: [
        'SEO-driven blog posts & articles',
        'Scroll-stopping social media visuals',
        'Data-backed content strategies',
      ],
      ctaText: 'Explore Content Creation',
      ctaLink: '/content-creation',
      icon: faPenNib,
    },
    {
      title: 'Customer Relationship Management (CRM)',
      description: 'Turn customers into lifelong advocates with personalized engagement and actionable insights.',
      deliverables: [
        'Personalized email campaigns',
        'Customer journey mapping',
        'Retention strategies',
      ],
      ctaText: 'Learn About CRM',
      ctaLink: '/crm',
      icon: faUsers,
    },
    {
      title: 'Email Marketing',
      description: 'Transform emails into a revenue-generating powerhouse with campaigns that connect and convert.',
      deliverables: [
        'Personalized email sequences',
        'Compelling email copy',
        'A/B testing & optimization',
      ],
      ctaText: 'Discover Email Marketing',
      ctaLink: '/email-marketing',
      icon: faEnvelope,
    },
    {
      title: 'SEO & Digital Growth',
      description: 'Dominate search results and drive organic growth with proven SEO strategies.',
      deliverables: [
        'Keyword research & analysis',
        'On-page & off-page optimization',
        'Technical SEO audits',
      ],
      ctaText: 'Explore SEO Services',
      ctaLink: '/seo',
      icon: faSearch,
    },
    {
      title: 'Growth Hacking',
      description: 'Scale your business faster with data-driven growth strategies and innovative tactics.',
      deliverables: [
        'Lead generation campaigns',
        'Viral marketing strategies',
        'Conversion optimization',
      ],
      ctaText: 'Learn About Growth Hacking',
      ctaLink: '/growth-hacking',
      icon: faRocket,
    },
  ];

  return (
    <section className="core-services">
      <div className="container">
        <h2>What We Do: Build Virtual Brands That Dominate!</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon-container"> {/* Container for the icon */}
                <FontAwesomeIcon icon={service.icon} className="service-icon" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.deliverables.map((deliverable, i) => (
                  <li key={i}>{deliverable}</li>
                ))}
              </ul>
              <a href={service.ctaLink} className="cta-button">
                {service.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;