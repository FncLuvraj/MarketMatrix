import React from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className='container mx-auto px-4 mt-40 max-w-[1200px] flex flex-col lg:flex-row items-center lg:items-start'>
      {/* left side */}
      <div className='flex-1 mb-10 lg:mb-0 max-w-[600px] ml-24'>
        <h2 className='text-3xl font-medium'>Unbeatable pricing</h2>
        <p className='mt-4 text-gray-600 text-[15px]'>
          We pioneered the concept of discount broking and price <br /> transparency in India. Flat fees and no hidden charges.
        </p>
        <Link to={'/pricing'}>
          <p className='text-blue-600 mt-4 inline-block'>See pricing →</p>
        </Link>
      </div>

      {/* right side */}
      <div className='flex-1 flex justify-center lg:justify-end mr-20'>
        <table className='table-auto border-collapse'>
          <tbody>
            <tr>
              <td className='border p-10'>
                <div className='text-3xl font-medium text-center'>₹0</div>
                <p className='mt-2 text-gray-600 text-center'>Free equity delivery and <br />direct mutual funds</p>
              </td>
              <td className='border p-10'>
                <div className='text-3xl font-medium text-center'>₹20</div>
                <p className='mt-2 text-gray-600 text-center'>Intraday and F&O</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}