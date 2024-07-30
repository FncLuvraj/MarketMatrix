import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../../images/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

export default function LoginTopbar() {
  return (
    <nav className='w-full bg-white shadow'>
      <div className='container mx-auto px-4 flex justify-between items-center h-16'>
        {/* Left side - Logo */}
        <div className='flex items-center'>
          <Link to={'/'}><img src={logo} alt='Zerodha Logo' className='h-4 ml-4 md:ml-16' /></Link>
        </div>

        {/* Center - Nav Links */}
        <div className='hidden md:flex space-x-8 mr-[-30]'>
          <Link to={'/about'}><p className='text-gray-600 hover:text-blue-500'>About</p></Link>
          <Link to={'/products'}><p className='text-gray-600 hover:text-blue-500'>Products</p></Link>
          <Link to={'/pricing'}><p className='text-gray-600 hover:text-blue-500'>Pricing</p></Link>
          <Link to={'/support'}><p className='text-gray-600 hover:text-blue-500'>Support</p></Link>

          <Link to={''}>
            <div className='flex items-center'>
              <RxHamburgerMenu />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}