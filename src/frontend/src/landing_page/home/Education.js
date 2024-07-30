import React from 'react';
import varsityImg from '../../images/education.png';

export default function Education() {
  return (
    <div className='container mx-auto px-4 mt-20 max-w-[1200px] flex flex-col lg:flex-row items-center lg:items-start'>
      {/* left side */}
      <div className='flex-1 flex justify-center lg:justify-start'>
        <img src={varsityImg} alt='Varsity' className='w-full lg:w-auto max-w-md' />
      </div>

      {/* right side */}
      <div className='flex-1 lg:ml-10 mt-16'>
        <h2 className='text-2xl font-medium text-gray-600'>Free and open market education</h2>
        <p className='mt-4 text-gray-600'>
          Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
        </p>
        <p className='text-blue-600 mt-2 inline-block'>Varsity →</p>
        <p className='mt-8 text-gray-600'>
          TradingQ&A, the most active trading and investment community in India for all your market related queries.
        </p>
        <p className='text-blue-600 mt-2 inline-block'>TradingQ&A →</p>
      </div>
    </div>
  );
}