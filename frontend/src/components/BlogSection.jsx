// BlogSection.jsx
import React, { useState, useEffect } from 'react';
import BlogItem from './BlogItem';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blog data from your API
    const getBlogs = async () => {
      try {
        const response = await fetch('https://e-commerce-2-sigma.vercel.app/api/blogs'); // Adjust the API endpoint 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    getBlogs();
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <div className='flex flex-1 mx-3 my-3 items-stretch'>
      {blogs.map(blog => (
        <BlogItem key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogSection;
