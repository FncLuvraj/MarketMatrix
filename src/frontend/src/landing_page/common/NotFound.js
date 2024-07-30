import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import errorImage from '../../images/404.webp';
import Navbar from '../common/Navbar';

export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 sm:px-6 lg:px-8'>
      <Navbar />
      <div className='text-center mb-10'>
        <img src={errorImage} alt='404 Not Found' className='w-full max-w-md mx-auto mb-8' />
        <h1 className='text-6xl font-bold mb-4'>404</h1>
        <p className='text-2xl mb-8'>Oops! The page you are looking for doesn't exist.</p>
        <Link to='/' className='inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition duration-300'>
          <FaHome className='mr-2' />
          Back to Home
        </Link>
      </div>
      <div className='absolute bottom-0 left-0 right-0 p-4 text-center text-white'>
        © 2024 Your Company. All rights reserved.
      </div>
    </div>
  );
}