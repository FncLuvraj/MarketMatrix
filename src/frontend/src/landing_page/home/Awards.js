import React from 'react';
import largestBroker from '../../images/largestBroker.png';
import pressLogos from '../../images/pressLogos.png';

const Awards = () => {
  return (
    <div className="container mx-auto px-4 mt-32 max-w-11/12 ">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-10">
        
        {/* Left Side - Image */}
        <div className="flex justify-center items-center w-full lg:w-1/2">
          <img src={largestBroker} alt="Largest Stock Broker in India" className="max-w-xs lg:max-w-full" />
        </div>

        {/* Right Side - Text and Press Logos */}
        <div className="flex flex-col w-full lg:w-1/2">
          <h1 className="text-center lg:text-left text-3xl font-medium">Largest stock broker in India</h1>
          <p className="mt-5 text-gray-600 text-center lg:text-left">
            1.5+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
          </p>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-10 mt-8">
            <ul className="list-disc space-y-2 text-center lg:text-left">
              <li>Futures and Options</li>
              <li>Commodity derivatives</li>
              <li>Currency derivatives</li>
            </ul>
            <ul className="list-disc space-y-2 text-center lg:text-left">
              <li>Stocks and IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and Govt. Securities</li>
            </ul>
          </div>
          <div className="mt-12 flex justify-center lg:justify-start">
            <img src={pressLogos} alt="Press Logos" className="max-w-full h-auto" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Awards;