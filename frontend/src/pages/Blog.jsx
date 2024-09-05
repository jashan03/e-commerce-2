// BlogPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Appbar from '../components/Appbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';


const Blog = () => {
  
  const { id } = useParams();
  console.log(id);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch the blog based on the id from the URL
    fetch(`http://localhost:5000/api/blogs/${id}`)  // Adjust the API endpoint as needed
      .then(response => response.json())
      .then(data => setBlog(data))
      .catch(error => console.error('Error fetching blog:', error));
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div>
      <Appbar />
      
      <div className="p-4 mt-5 space-y-4 w-[80vw] mx-auto  ">
        <h1 className="text-3xl font-bold mb-2 border-b-2 border-gray-300 pb-2">{blog.title}</h1>
        <img
          className="w-full max-h-96 object-cover object-top"
          src={blog.image}
          alt={blog.title}
        />
        <div className="mt-4">
          <p className="text-lg">{blog.content}</p>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Blog;
