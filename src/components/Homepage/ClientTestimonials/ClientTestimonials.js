// ClientTestimonials.jsx
import React from 'react';
import './ClientTestimonials.css';
import Slider from "react-slick"; // Install react-slick: npm install react-slick slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientTestimonials = () => {
  const testimonials = [
    {
      quote: "Gleefiy's AI-driven marketing solutions transformed our business. Their content automation saved us time and boosted our ROI!",
      clientName: "John Doe, CEO of Acme Corp",
      clientImage: "https://via.placeholder.com/80", // Replace with client image URL
    },
    {
      quote: "Their growth hacking strategies helped us scale faster than we ever imagined. Highly recommend!",
      clientName: "Jane Smith, Founder of Beta Inc.",
      clientImage: "https://via.placeholder.com/80", // Replace with client image URL
    },
    // ... more testimonials
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Optional: Auto-rotate testimonials
    autoplaySpeed: 5000, // Optional: Auto-rotate speed (in milliseconds)
    responsive: [ // Responsive settings
      {
        breakpoint: 768, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="client-testimonials">
      <div className="container">
        <h2>Client Testimonials</h2>
        <Slider {...settings}> {/* Use the Slider component */}
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-slide">
              <div className="testimonial-card">
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  {/* <img src={testimonial.clientImage} alt={testimonial.clientName} className="client-image" /> */}
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR5yV0H199TNJhZVeIhWJxS5CGA2-DUe2MlA&s" alt={testimonial.clientName} className="client-image" />
                  <div className="client-details">
                    <h3 className="client-name">{testimonial.clientName}</h3>
                    {/* You can add client title/company here if needed */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientTestimonials;