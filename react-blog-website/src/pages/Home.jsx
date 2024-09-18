import React from 'react'
import Banner from '../component/Banner'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import BlogPage from '../component/BlogPage';

const Home = () => {
  return (
    <div>
      <Banner />

      <div className="max-w-7xl mx-auto">
        <BlogPage />
      </div>
    </div>
  )
}

export default Home; 