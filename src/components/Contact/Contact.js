// Contact.jsx
import React from 'react';
import './Contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faClock, faMapMarker } from '@fortawesome/free-solid-svg-icons'; // Import icons
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import brand icons

const Contact = () => {
  return (
    <section className="contact-page">
      <div className="container">
        <h2 className="contact-headline">Partner with Gleefiy – Your AI-Powered Growth Solution</h2>

        <div className="contact-content">
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form action="/submit-form" method="POST"> {/* Replace with your form submission logic */}
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="contact-submit">Submit</button>
            </form>
          </div>

          <div className="contact-details">
            <h3>Contact Information</h3>
            <ul className="contact-info">
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <a href="mailto:info@gleefiy.com">info@gleefiy.com</a> {/* Replace with your email */}
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                <a href="tel:+15551234567">+1 (555) 123-4567</a> {/* Replace with your phone number */}
              </li>
              <li>
                <FontAwesomeIcon icon={faClock} className="contact-icon" />
                Business Hours: Mon-Fri, 9am-5pm {/* Replace with your business hours */}
              </li>
                <li>
                    <FontAwesomeIcon icon={faMapMarker} className="contact-icon" />
                    Mumbai, India
                </li>
            </ul>

            <div className="contact-social">
              <h3>Follow Us</h3>
              <ul className="social-links">
                <li>
                  <a href="https://www.linkedin.com/company/gleefiy" target="_blank" rel="noopener noreferrer"> {/* Replace with your LinkedIn link */}
                    <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/gleefiy" target="_blank" rel="noopener noreferrer"> {/* Replace with your Instagram link */}
                    <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                  </a>
                </li>
                {/* Add more social media links as needed */}
              </ul>
            </div>
          </div>
        </div>

        <div className="contact-cta">
          <p>Let’s Take Your Business to the Next Level – Contact Us Today!</p>
          <a href="/contact" className="contact-cta-button">Contact Us</a> {/* Could link to the form section */}
        </div>
      </div>
    </section>
  );
};

export default Contact;