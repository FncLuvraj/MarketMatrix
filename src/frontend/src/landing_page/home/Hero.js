import React from 'react';
import heroimg from '../../images/homeHero.png';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='px-4 md:px-9 flex flex-col items-center mt-20'>
      <img src={heroimg} alt='Home Hero' className='h-auto w-full max-w-screen-lg' />
      <div className='flex flex-col items-center mt-10'>
        <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-medium'>
          Invest in everything
        </h1>
        <p className='text-center text-sm md:text-base text-gray-500 mt-2'>
          Online platform to invest in stocks, derivatives, mutual funds, and more
        </p>
        <Link to={'/signup'}>
          <button className='text-white bg-blue-500 rounded p-2 mt-4 w-full sm:w-auto sm:px-10 lg:w-[200px] flex items-center justify-center'>
            Sign up now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;