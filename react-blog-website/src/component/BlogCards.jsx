import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const BlogCards = ({ blogs, currentPage, selectedCategory, pageSize }) => {
  const filteredBlogs = blogs
    .filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {filteredBlogs.map((blog) => (
        <Link to={`/blogs/${blog.id}`} key={blog.id} className="p-8 shadow-xl rounded-xl hover:shadow-md transition-all ease-in cursor-pointer">
          <div>
            <img src={blog.image} alt="" className="w-full" />
          </div>
          <h3 className="mt-4 mb-2 font-bold hover:text-orange-500 cursor-pointer">
            {blog.title}
          </h3>
          <p className="mb-2 text-gray-600 font-bold">
            <FaUser className="inline-flex items-center mr-2" />
            {blog.author}
          </p>4
          <p className="text-sm text-gray-600">
            Published: {blog.pushlished_date}
          </p>
        </Link>
      ))}
    </div> 
    
  );
};

export default BlogCards;
 