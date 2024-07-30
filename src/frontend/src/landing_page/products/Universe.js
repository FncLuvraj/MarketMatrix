import React from 'react';
import smallcaseLogo from '../../images/smallcaseLogo.png';
import streakLogo from '../../images/streakLogo.png';
import sensibullLogo from '../../images/sensibullLogo.png';
import zerodhaFundLogo from '../../images/zerodhaFundhouse.png';
import tijoriLogo from '../../images/tijori 2.png';
import dittoLogo from '../../images/dittoLogo.png';
import { Link } from 'react-router-dom';

const Universe = () => {
  return (
    <div className="bg-white py-16 px-8 max-w-[1000px] mx-auto">
      <div className="text-center text-[20px]">
        <p className="text-gray-600 mb-4">
          Want to know more about our technology stack? Check out the{' '}
          <a href="https://zerodha.tech" className="text-blue-600 hover:underline">
            Zerodha.tech
          </a> blog.
        </p>
        <h1 className="text-4xl text-gray-600 mb-6 font-medium mt-20">The Zerodha Universe</h1>
        <p className="text-xl font-light mb-16 text-[1rem]">
          Extend your trading and investment experience even further with our partner platforms
        </p>
      </div>
      <div className="mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <img src={smallcaseLogo} alt="Smallcase" className="h-[55px] mb-2" />
          <p className="text-gray-600 text-[10px]">Thematic investment platform</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={streakLogo} alt="Streak" className="h-[55px] mb-2" />
          <p className="text-gray-600 text-[10px]">Algo & strategy platform</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={sensibullLogo} alt="Sensibull" className="h-[55px] mb-2" />
          <p className="text-gray-600 text-[10px]">Options trading platform</p>
        </div>
        <div className="flex flex-col items-center mt-6">
          <img src={zerodhaFundLogo} alt="Zerodha Fund House" className="h-[55px] mb-2" />
          <p className="text-gray-600 text-[10px]">Asset management</p>
        </div>
        <div className="flex flex-col items-center mt-6">
          <img src={tijoriLogo} alt="Tijori" className="h-[55px] mb-2" />
          <p className="text-gray-600 text-[10px]">Fundamental research platform</p>
        </div>
        <div className="flex flex-col items-center mt-6">
          <img src={dittoLogo} alt="Ditto" className="h-[55px] mb-2" />
          <p className="text-gray-600 text-[10px]">Insurance</p>
        </div>
      </div>
      <div className="text-center mt-20">
        <Link to={'/signup'}>
          <button className="text-white bg-blue-600 hover:bg-blue-700 rounded-md px-8 py-3">
            Sign up now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Universe;