import React from 'react';
import {Link} from 'react-router-dom'

export default function OpenAccount() {
  return (
    <div className='container mx-auto text-center mt-32 px-4 sm:px-6 lg:px-8'>
      <h2 className='text-3xl font-medium'>Open a Zerodha account</h2>
      <p className='mt-4 text-gray-600'>
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
      </p>
      <Link to={'/signup'}>
      <button className='bg-blue-500 text-white mt-6 py-2 px-6 rounded'>
        Sign up now
      </button>
      </Link>
    </div>
  );
}