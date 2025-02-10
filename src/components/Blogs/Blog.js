// Blog.jsx
import React from 'react';
import './Blog.css';
import CTASection from '../Homepage/CTAsection/CTASection';
import { InViewAnimation } from '../InViewAnimation';
import { useState, useEffect } from 'react';
import {get,ref} from 'firebase/database';
import { database } from '../../firebaseConfig';


const Blog = () => {
  const [user, setUser] = useState([]);
  const [blid, setBlid] = useState([]);
  
      useEffect(() => {
          const usersref=ref(database,'blog_data');
          get(usersref).then((snapshot)=>{
              if(snapshot.exists()){
                  // console.log(snapshot.val());
                  // setUser(snapshot.val());
                  const usersArray = Object.entries(snapshot.val()).map(([id,data]) => ({
                      id,
                      ...data
                  }));
                  usersArray.sort((a, b) => b.id.localeCompare(a.id)); 

                  setUser(usersArray);
                  // setUser(usersArray);
              }else{
                  console.log('No data available');
              }
          }).catch((error)=>{
              console.error(error);
          });
      },[])

      console.log(user);

  // const blogPosts = [
  //   {
  //     title: "Top 5 AI-Driven Marketing Strategies for Business Growth",
  //     excerpt: "Discover how AI is revolutionizing marketing. Learn about the top strategies you can implement today to boost your business growth.",
  //     link: "/blog/ai-marketing-strategies", // Replace with actual link
  //     image: "https://via.placeholder.com/400x250", // Replace with actual image
  //   },
  //   {
  //     title: "How AI is Transforming Content Creation and Digital Marketing",
  //     excerpt: "Explore the ways AI is changing the landscape of content creation and digital marketing. From automation to personalization, see how AI can enhance your content strategy.",
  //     link: "/blog/ai-content-transformation", // Replace with actual link
  //     image: "https://via.placeholder.com/400x250", // Replace with actual image

  //   },
  //   {
  //     title: "Optimizing CRM & Customer Retention with AI-Powered Tools",
  //     excerpt: "Learn how AI-powered tools can help you optimize your CRM and improve customer retention. Discover strategies for personalized customer experiences and data-driven insights.",
  //     link: "/blog/ai-crm-optimization", // Replace with actual link
  //     image: "https://via.placeholder.com/400x250", // Replace with actual image
  //   },
  //   // ... more blog posts
  // ];
     
  return (<>
    <section className="blog-section">
      <InViewAnimation>

      <div className="container">
        <h2 className="blog-headline">Expert Insights for Scaling Your Business with AI</h2>
        
        <div className="blog-grid">
          {user.map((data, index) => (
            <div key={index} className="blog-card">
              <img src={data.image} alt={data.title} className="blog-image" />
              <div className="blog-card-content">
                <h3 className="blog-title">{data.title}</h3>
                <p className="blog-excerpt">{data.excerpt}</p>
                {/* <a value={blid} onClick={(e) => setBlid(data.id)} className="blog-read-more">Read More</a> */}
                <a href={`#/blog-in/id/${data.id}`} className="blog-read-more">Read More</a>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="blog-cta">
          <p>Subscribe for AI-Driven Insights to Stay Ahead of the Competition!</p>
          <a href="/subscribe" className="blog-subscribe">Subscribe Now</a> 
        </div> */}
      </div>
      </InViewAnimation>
       
    </section>
    <CTASection title="Subscribe for AI-Driven Insights to Stay Ahead of the Competition!" 
        buttonText="Subscribe Now" 
        buttonLink="#/pricing"/></>
  );
};


export default Blog;