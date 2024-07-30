import React from 'react';
import ecosystem from '../../images/ecosystem.png';
import { Link } from 'react-router-dom';

export default function Stats() {
  return (
    <div className='container mt-32 max-w-[1200px] mx-auto flex flex-col lg:flex-row'>
      {/* left side */}
      <div className='flex flex-col flex-1 max-w-[500px] p-4 lg:p-0'>
        <h2 className='font-medium text-4xl text-gray-700'>Trust with confidence</h2>
        <h3 className='mt-8 text-[1.25rem] text-2xl'>Customer-first always</h3>
        <p className='font-light text-base text-gray-600 mt-2'>
          That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments.
        </p>
        
        <h3 className='mt-8 text-[1.25rem] text-2xl'>No spam or gimmicks</h3>
        <p className='font-light text-base text-gray-600 mt-2'>
          No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
        </p>

        <h3 className='mt-8 text-[1.25rem] text-2xl'>The Zerodha universe</h3>
        <p className='font-light text-base text-gray-600 mt-2'>
          Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
        </p>

        <h3 className='mt-8 text-[1.25rem] text-2xl'>Do better with money</h3>
        <p className='font-light text-base text-gray-600 mt-2'>
          With initiatives like Nudge and Kill Switch, we don’t just facilitate transactions, but actively help you do better with your money.
        </p>
      </div>

      {/* right side */}
      <div className='flex-1 flex flex-col items-center mt-10 lg:mt-0 lg:items-end p-4 lg:p-0'>
        <img src={ecosystem} alt="Ecosystem" className='w-full lg:w-auto max-w-md h-full' />
        <div className='flex flex-col items-center lg:flex-row mt-6'>
          <Link to={'/products'}>
            <p className='text-blue-600 mb-4 lg:mb-0 lg:mr-6'>Explore our products →</p>
          </Link>
          <Link to={'/signup'}>
            <p className='text-blue-600 bg-blue-100 py-2 px-4 rounded'>Try Kite</p>
          </Link>
        </div>
      </div>
    </div>
  );
}