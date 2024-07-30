import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../../images/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='w-full bg-white shadow'>
      <div className='container mx-auto px-4 flex justify-between items-center h-16'>
        <div className='flex items-center'>
         <Link to={'/'}><img src={logo} alt='Zerodha Logo' className='h-8' /> </Link> 
        </div>

        <div className='hidden md:flex space-x-8'>
          <Link to={'/signup'}>  <p className='text-gray-600 hover:text-blue-500 font-extralight'>Signup</p></Link> 
          <Link to={'/about'}> <p className='text-gray-600 hover:text-blue-500'>About</p> </Link> 
          <Link to={'/products'}> <p className='text-gray-600 hover:text-blue-500'>Products</p></Link> 
          <Link to={'/pricing'}> <p className='text-gray-600 hover:text-blue-500'>Pricing</p></Link> 
          <Link to={'/support'}> <p className='text-gray-600 hover:text-blue-500'>Support</p></Link> 
        </div>

        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            <RxHamburgerMenu />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className='md:hidden bg-white shadow-lg'>
          <Link to={'/signup'} onClick={() => setIsOpen(false)} className='block px-4 py-2 text-gray-600 hover:bg-gray-100'>Signup</Link>
          <Link to={'/about'} onClick={() => setIsOpen(false)} className='block px-4 py-2 text-gray-600 hover:bg-gray-100'>About</Link>
          <Link to={'/products'} onClick={() => setIsOpen(false)} className='block px-4 py-2 text-gray-600 hover:bg-gray-100'>Products</Link>
          <Link to={'/pricing'} onClick={() => setIsOpen(false)} className='block px-4 py-2 text-gray-600 hover:bg-gray-100'>Pricing</Link>
          <Link to={'/support'} onClick={() => setIsOpen(false)} className='block px-4 py-2 text-gray-600 hover:bg-gray-100'>Support</Link>
        </div>
      )}
    </nav>
  );
}