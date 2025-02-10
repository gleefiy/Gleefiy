import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import {get,ref} from 'firebase/database';
import { database } from '../../../firebaseConfig';
import "./Blogin.css";
import CTASection from '../../Homepage/CTAsection/CTASection';

const Blogin = () => {
   

    const { id } = useParams(); // Get the blog ID from the URL
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return; // Ensure id is available before fetching

    const fetchBlog = async () => {
      try {
        const blogRef = ref(database, `blog_data/${id}`); // Fetch only this blog ID
        const snapshot = await get(blogRef);

        if (snapshot.exists()) {
          setBlog(snapshot.val()); // Store the blog data in state
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : blog ? (
        <div className="blog-container">
      <h1 className="blog-title">{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="blog-image" />
      <p className="blog-excerpt">{blog.excerpt}</p>
      <div className="blog-description">{blog.desc}</div>
    </div>
      ) : (
        <p>Blog not found</p>
      )}
        <CTASection title="Subscribe for AI-Driven Insights to Stay Ahead of the Competition!" 
                buttonText="Subscribe Now" 
                buttonLink="#/pricing"/>

    </div>
  )
}

export default Blogin
