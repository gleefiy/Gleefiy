// Pricing.jsx
import React, { useEffect, useState } from 'react';
import './Pricing.css';
import CTASection from '../Homepage/CTAsection/CTASection';
import { InViewAnimation } from '../InViewAnimation';
import { useNavigate } from 'react-router-dom';
import { push, ref, query, orderByChild, equalTo, get } from 'firebase/database';
import { database } from '../../firebaseConfig'; // Import your Firebase database instance


const Pricing = () => {

  const [key, setKey] = useState("");
  const singleServices = [
    { name: "Content Creation Services", price: "₹5,000",priceint:5000, description: "e.g., blogs, reels, or social media posts" },
    { name: "SEO Audit & Optimization", price: "₹7,500",priceint:7500, description: "Comprehensive report and actionable fixes" },
    { name: "Email Campaign Setup", price: "₹6,000",priceint:6000, description: "Design, copy, and segmentation for one campaign" },
  ];

  const subscriptionPlans = [
    { name: "Starter Plan", price: "₹15,000",priceint:15000, description: "Content creation, email marketing, and basic SEO" },
    { name: "Growth Plan", price: "₹30,000",priceint:30000, description: "More content and advanced SEO" },
    { name: "Premium Plan", price: "₹50,000",priceint:50000, description: "Unlimited content and advanced SEO" },
  ];
  const navigate = useNavigate();
  const passData = (service) => {
    
    navigate('/buyin',{state:{price:service.priceint,service_name:service.name,key:key.key}});
    alert("You are being redirected to the payment page");
  }

  useEffect(() => {
    
    const fetchBlog = async () => {
      try {
        const blogRef = ref(database, `razorpay_creds/1`); // Fetch only this blog ID
        const snapshot = await get(blogRef);

        if (snapshot.exists()) {
          setKey(snapshot.val()); // Store the blog data in state
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, []);

    // console.log(key.key);

  return (
    <section className="pricing-section">
      
      <div className="container">
        <div className="pricing-content"> {/* Added a wrapper for content */}
          <h1 className="pricing-headline">Pricing Plans Tailored to Your Needs</h1>
          <p className="pricing-intro">At Gleefiy, we understand that every business is unique. That’s why we’ve designed pricing plans that cater to a variety of needs—whether you’re looking for a one-time service, ongoing support, or a fully customized solution. Our focus is on transparency, affordability, and delivering measurable results.</p>
          
          <div className="pricing-category">
            <InViewAnimation>
            <h2 className="pricing-category-title">Single Service Pricing</h2>
            <p className="pricing-category-subtitle">Affordable, One-Time Services to Get You Started</p>
            <ul className="pricing-list">
              {singleServices.map((service, index) => (
                <li key={index} className="pricing-item">
                  <div className="pricing-item-details">
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                  </div>
                  <span className="pricing-item-price">Starting at {service.price}</span>
                  <button onClick={() => passData(service)} className="pricing-cta">Buy Now</button>
                </li>
              ))}
            </ul>
            <a href="/contact" className="pricing-cta">Try a Single Service Today</a>
            </InViewAnimation>
          </div>

          <div className="pricing-category">
            <InViewAnimation>
            <h2 className="pricing-category-title">Subscription Plans</h2>
            <p className="pricing-category-subtitle">Ongoing Support for Consistent Growth</p>
            <ul className="pricing-list">
              {subscriptionPlans.map((plan, index) => (
                <li key={index} className="pricing-item">
                    <div className="pricing-item-details">
                        <h3>{plan.name}</h3>
                        <p>{plan.description}</p>
                    </div>
                    <span className="pricing-item-price">{plan.price}/month</span>
                </li>
              ))}
            </ul>
            <p className="pricing-discount">Save 10% on quarterly payments. Save 20% on annual subscriptions.</p>
            <a href="/contact" className="pricing-cta">Choose Your Plan</a>
            </InViewAnimation>
          </div>

          <div className="pricing-category">
            <InViewAnimation>
            <h2 className="pricing-category-title">Custom Pricing Plans</h2>
            <p className="pricing-category-subtitle">Tailored Solutions, Built Around Your Vision</p>
            <div className="custom-pricing-content">
              <p>For businesses with unique needs, we offer fully customized plans.</p>
              <h3>How It Works:</h3>
              <ul className="custom-pricing-steps">
                <li><strong>Free Strategy Call:</strong> We start with a one-on-one consultation to understand your goals, challenges, and vision.</li>
                <li><strong>Personalized Solution Design:</strong> Based on your needs, we craft a tailored service plan that delivers measurable results.</li>
                <li><strong>Transparent Pricing:</strong> You receive a detailed breakdown of the services and costs to ensure you’re only paying for what you truly need.</li>
              </ul>
              <h3>Example Custom Solutions:</h3>
              <ul className="custom-pricing-examples">
                <li><strong>E-Commerce Package:</strong> Includes SEO, product descriptions, and email marketing, starting at ₹75,000/month.</li>
                <li><strong>Creator Package:</strong> Focused on social media strategy, branding, and content creation, starting at ₹50,000/month.</li>
              </ul>
            </div>
            <a href="/contact" className="pricing-cta">Let’s Build Your Success Story</a>
            </InViewAnimation>
          </div>

          {/* <div className="final-cta"> 
            <p>Your Growth Starts Here – Let’s Create a Plan Together!</p>
            <div className="final-cta-buttons">
              <a href="/contact" className="pricing-cta">Book a Free Consultation</a>
              <a href="/pricing" className="pricing-cta">Explore Subscription Plans</a> 
            </div>
          </div> */}
        </div>
      </div>
       <CTASection title="Your Growth Starts Here – Let’s Create a Plan Together!" 
        buttonText="Book a Free Consultation" 
        buttonLink="#/contact"/>

    </section>
  );
};



export default Pricing;