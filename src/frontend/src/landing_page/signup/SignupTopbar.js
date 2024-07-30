import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../../images/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

export default function SignupTopbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='w-full bg-white shadow'>
      <div className='container mx-auto px-4 flex justify-between items-center h-16'>
        {/* Left side - Logo */}
        <div className='flex items-center'>
          <Link to={'/'}><img src={logo} alt='Zerodha Logo' className='h-8' /></Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            <RxHamburgerMenu className='h-6 w-6 text-gray-600' />
          </button>
        </div>

        {/* Center - Nav Links */}
        <div className={`flex-col md:flex md:flex-row md:space-x-8 ${isMenuOpen ? 'flex' : 'hidden'} absolute md:relative bg-white w-full md:w-auto md:bg-transparent top-16 left-0 md:top-auto md:left-auto`}>
          <Link to={'/login'} className='block px-4 py-2 text-gray-600 hover:text-blue-500'>Login</Link>
          <Link to={'/about'} className='block px-4 py-2 text-gray-600 hover:text-blue-500'>About</Link>
          <Link to={'/products'} className='block px-4 py-2 text-gray-600 hover:text-blue-500'>Products</Link>
          <Link to={'/pricing'} className='block px-4 py-2 text-gray-600 hover:text-blue-500'>Pricing</Link>
          <Link to={'/support'} className='block px-4 py-2 text-gray-600 hover:text-blue-500'>Support</Link>
        </div>
      </div>
    </nav>
  );
}