// Contact.jsx
import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faClock, faMapMarker } from '@fortawesome/free-solid-svg-icons'; // Import icons
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import brand icons

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const service_key=process.env.REACT_APP_MAIL_SERVICEID;
    const template_key=process.env.REACT_APP_MAIL_TEMPLATEID;
    const user_key=process.env.REACT_APP_MAIL_USERID;

    console.log(user_key)
    emailjs.init(user_key);

    const handleSubmit = (e) => {
      e.preventDefault();

      
      // const serviceId = "service_k3u61fo";
      const serviceId = service_key;
      const templateId = template_key;
      const publicKey = user_key;

      const templateParams = {
          from_name: name + " phone no.: "+phone,
          from_email: email,
          to_name: "Gleefiy",
          message: message,
      };

      emailjs.send(serviceId, templateId, templateParams, publicKey)
          .then((response) => {
              alert('Email sent successfully!');
              console.log('Email sent successfully!', response);
              setName('');
              setEmail('');
              setMessage('');
              setPhone('');
          })
          .catch((error) => {
              alert('An error occurred, Please try again!');              
              console.error('Error sending email:', error);
          });
  };


  return (
    <section className="contact-page">
      <div className="container">
        <h2 className="contact-headline">Partner with Gleefiy – Your AI-Powered Growth Solution</h2>

        <div className="contact-content">
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit} method="POST"> {/* Replace with your form submission logic */}
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name"   value={name} onChange={(e) => setName(e.target.value)}  required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email"  value={email} onChange={(e) => setEmail(e.target.value)}  required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone"  value={phone} onChange={(e) => setPhone(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="5"  value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
              </div>
              <button type="submit" className="contact-submit">Submit</button>
            </form>
          </div>

          <div className="contact-details">
            <h3>Contact Information</h3>
            <ul className="contact-info">
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <a href={`mailto:${"gleefiyvirtualassistance@gmail.com"}`}>gleefiyvirtualassistance@gmail.com</a> {/* Replace with your email */}
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                <a href={`tel:${"+91 92353 77824"}`}>+91 92353 77824</a>
                {/* Replace with your phone number */}
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                <a href={`tel:${"+91 63077 32576"}`}>+91 63077 32576</a>
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
          <a href="#/contact" className="contact-cta-button">Contact Us</a> {/* Could link to the form section */}
        </div>
      </div>
    </section>
  );
};

export default Contact;