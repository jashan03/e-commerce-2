import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({ blog }) => {
  return (
    <div className="flex flex-col max-w-sm overflow-hidden shadow-lg m-2 cursor-pointer px-1">
      <Link to={`/blogs/${blog._id}`} className="flex flex-col h-full">
        <div className="flex-shrink-0">
          <img
            className="object-cover object-top w-full h-48"
            src={blog.image}
            alt={blog.title}
          />
        </div>
        <div className="flex-1 px-4 py-2">
          <h5 className=" text-xl font-semibold mb-1">{blog.title}</h5>
          
          <p className="text-gray-700 text-sm">
            {blog.content.substring(0, 100)}...
          </p>
        </div>
        <div className="px-4 pt-2 pb-2 flex space-x-2">
          <button className="hover:bg-blue-100 border font-bold py-1 px-4 rounded">
            Read More
          </button>
        </div>
      </Link>
    </div>
  );
};

export default BlogItem;
