// Services.jsx
import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib, faSearch, faUsers, faEnvelope, faRocket } from '@fortawesome/free-solid-svg-icons'; // Import icons

const Services = () => {
  const servicesData = [
    {
      title: "Content Creation",
      subtitle: "Captivate Your Audience with High-Impact Content",
      icon: faPenNib,
      problems: [
        "Struggling to stand out in a crowded market? Effective content is your superpower, and we’re here to help you create it.",
      ],
      solutions: [
        "Blog Writing: Transform ideas into actionable, insightful articles that establish your authority.",
        "Social Media Content: Engaging posts, reels, and stories crafted to boost your reach and engagement.",
        "Visual Content: Eye-catching graphics and designs that stop the scroll and draw attention to your brand.",
      ],
      whyItWorks: [
        "Businesses that publish blogs receive 55% more website visitors.",
        "Visual content is 40 times more likely to be shared on social media.",
      ],
    },
    {
      title: "SEO Optimization",
      subtitle: "Be Found Where It Matters – Dominate Search Rankings",
      icon: faSearch,
      problems: [
        "Your audience is searching for solutions but are they finding your brand or your competitors? With our SEO strategies, you’ll own the digital space.",
      ],
      solutions: [
        "Keyword Research: Identify high-intent search terms that bring your audience to you.",
        "On-Page Optimization: Improve your website’s structure, content, and metadata for better rankings.",
        "Local SEO: Get discovered in your local market with geo-targeted strategies.",
      ],
      whyItWorks: [
        "75% of users never scroll past the first page of search results.",
        "SEO generates 15x more clicks than paid search ads.",
      ],
    },
    {
      title: "Customer Relationship Management (CRM)",
      subtitle: "Turn Interactions Into Relationships That Last",
      icon: faUsers,
      problems: [
        "Are you losing valuable leads or struggling with customer retention? We’ll help you build deeper connections and boost loyalty.",
      ],
      solutions: [
        "Chatbots: Deliver real-time, personalized support to your audience.",
        "Automated Follow-Ups: Ensure no opportunity is missed.",
        "Data-Driven Insights: Learn what your customers need and refine your approach.",
      ],
      whyItWorks: [
        "Companies with effective CRM systems see a 29% increase in sales.",
        "89% of businesses compete primarily on customer experience.",
      ],
    },
    {
      title: "Email Marketing",
      subtitle: "Turn Every Email Into a Revenue Driver",
      icon: faEnvelope,
      problems: [
        "Tired of your emails being ignored? Our campaigns ensure your messages stand out and drive action.",
      ],
      solutions: [
        "Personalized Campaigns: Targeted emails that resonate with your audience.",
        "High-Converting Copy: Words that inspire clicks, opens, and purchases.",
        "Analytics & Tracking: Measure success and continuously refine your strategy.",
      ],
      whyItWorks: [
        "Personalized emails increase revenue by 6x.",
        "Email marketing ROI averages $42 for every $1 spent.",
      ],
    },
    {
      title: "Growth Hacking & Business Scaling",
      subtitle: "Smarter Strategies for Rapid, Sustainable Growth",
      icon: faRocket,
      problems: [
        "Need help scaling your business? We design strategies that take you from where you are to where you want to be.",
      ],
      solutions: [
        "Lead Generation: Identify and target high-value prospects.",
        "Audience Expansion: Unlock new opportunities with strategic campaigns.",
        "Conversion Optimization: Turn more visitors into paying customers.",
      ],
      whyItWorks: [
        "Businesses that optimize their conversion process see a 300% revenue increase.",
        "Growth hacking has helped startups scale 10x faster.",
      ],
    },
  ];

  return (
    <section className="services-page">
      <div className="container">
        <h1 className="services-headline">Your Partner in Growth, Customized Services to Elevate Your Brand</h1>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-container"> {/* Icon container */}
                <FontAwesomeIcon icon={service.icon} className="service-icon" />
              </div>
              <h2 className="service-title">{service.title}</h2>
              <h3 className="service-subtitle">{service.subtitle}</h3>

              <div className="service-content">
                <div className="service-problems">
                  <h4>What We Solve:</h4>
                  <ul>
                    {service.problems.map((problem, i) => (
                      <li key={i}>{problem}</li>
                    ))}
                  </ul>
                </div>

                <div className="service-solutions">
                  <h4>Our Solutions:</h4>
                  <ul>
                    {service.solutions.map((solution, j) => (
                      <li key={j}>{solution}</li>
                    ))}
                  </ul>
                </div>

                <div className="service-why-it-works">
                  <h4>Why It Works:</h4>
                  <ul>
                    {service.whyItWorks.map((reason, k) => (
                      <li key={k}>{reason}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <p>Boost Your Business with AI-Powered Assistance</p>
          <a href="/contact" className="cta-button">Book a Consultation Today!</a>
        </div>
      </div>
    </section>
  );
};

export default Services;