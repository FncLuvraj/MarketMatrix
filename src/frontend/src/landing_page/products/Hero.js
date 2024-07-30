import React from 'react';
import kiteImage from '../../images/kite.png'; // Replace with your image path
import { Link } from 'react-router-dom';
import apple from '../../images/appstoreBadge.png'
import console from '../../images/console.png'
import coin from '../../images/products-coin.png'
import varsity from '../../images/varsity.png'
import kite from '../../images/kiteconnect.png'

const Hero = () => {
  return (
    <div className="bg-white py-16 px-8 max-w-[1300px] mx-auto">
        {/* heading */}
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-semibold mb-4">Technology</h1>
        <h2 className="text-xl font-light mb-8">Sleek, modern, and intuitive trading platforms</h2>
        <p className="text-blue-600 hover:underline mb-16"></p>
        <Link to={''}>
          <p className="text-blue-600 hover:underline mr-4">Check out our investment offerings →</p>
        </Link>
      </div>
      {/* sectionn 1 */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1 flex justify-center mb-8 lg:mb-0 ">
          <img src={kiteImage} alt="Kite Platform" className="w-full h-auto mt-20 lg:mt-0" />
        </div>
        <div className="flex-1 text-gray-700 leading-loose mt-20 lg:mt-0 max-w-[360px]">
          <h2 className="text-2xl font-medium mb-2">Kite</h2>
          <p className="mb-4">Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</p>
          <p className="mb-8 flex justify-between max-w-[300px]">
          <Link to={''}> <p className="text-blue-600 hover:underline mr-4">Try demo →</p></Link>
          <Link to={''}>   <p className="text-blue-600 hover:underline">Learn more →</p></Link>
          </p>
          <div className="flex space-x-4">
            <Link to={"https://play.google.com/store"}>
            <button className="inline-flex items-center px-4 py-2 bg-black text-white font-medium rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8 w-auto mr-2" />
            </button>
            </Link>

            <Link to={"https://www.apple.com/app-store/"}>
            <button className="inline-flex items-center px-4 py-2 bg-black text-white font-medium rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
             <img src={apple}  className="h-8 w-auto mr-2"></img>
            <div className="flex flex-col items-start">
            </div>
            </button>
            </Link>
          </div>
        </div>
      </div>

        {/* section 2 */}
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center gap-8">
        <div className="flex-1 flex justify-center mb-8 lg:mb-0">
          <img src={console} alt="Kite Platform" className="w-full h-auto mt-20 lg:mt-0" />
        </div>
        <div className="flex-1 text-gray-700 leading-loose mt-20 lg:mt-0 max-w-[360px]">
          <h2 className="text-2xl font-medium mb-2">Console</h2>
          <p className="mb-4">The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations..</p>
          <p className="mb-8 flex justify-between max-w-[300px]">
          <Link to={''}>   <p className="text-blue-600 hover:underline">Learn more →</p></Link>
          </p>
        </div>
      </div>

      {/* section 3 */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1 flex justify-center mb-8 lg:mb-0">
          <img src={coin} alt="Kite Platform" className="w-full h-auto mt-20 lg:mt-0" />
        </div>
        <div className="flex-1 text-gray-700 leading-loose mt-20 lg:mt-0 max-w-[360px]">
          <h2 className="text-2xl font-medium mb-2">Coin</h2>
          <p className="mb-4">Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.</p>
          <p className="mb-8 flex justify-between max-w-[300px]">
          <Link to={''}> <p className="text-blue-600 hover:underline mr-4">Coin →</p></Link>
          </p>
          <div className="flex space-x-4">
            <Link to={"https://play.google.com/store"}>
            <button className="inline-flex items-center px-4 py-2 bg-black text-white font-medium rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8 w-auto mr-2" />
            </button>
            </Link>

            <Link to={"https://www.apple.com/app-store/"}>
            <button className="inline-flex items-center px-4 py-2 bg-black text-white font-medium rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
             <img src={apple}  className="h-8 w-auto mr-2"></img>
            <div className="flex flex-col items-start">
            </div>
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* section 4 */}
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center gap-8">
        <div className="flex-1 flex justify-center mb-8 lg:mb-0">
          <img src={kite} alt="Kite Platform" className="w-full h-auto mt-20 lg:mt-0" />
        </div>
        <div className="flex-1 text-gray-700 leading-loose mt-20 lg:mt-0 max-w-[360px]">
          <h2 className="text-2xl font-medium mb-2">Kite Connect API</h2>
          <p className="mb-4">Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase..</p>
          <p className="mb-8 flex justify-between max-w-[300px]">
          <Link to={''}><p className="text-blue-600 hover:underline">Kite Connect →</p> </Link>
          </p>
        </div>
      </div>

      {/* section 5 */}
<div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 px-4 lg:px-0">
  <div className="flex-1 flex justify-center mb-8 lg:mb-0">
    <img src={varsity} alt="Kite Platform" className="w-full max-w-xs lg:max-w-md mt-8 lg:mt-20" />
  </div>
  <div className="flex-1 text-gray-700 leading-loose lg:ml-16 mt-8 lg:mt-20 max-w-full lg:max-w-md">
    <h2 className="text-2xl font-medium mb-2">Varsity mobile</h2>
    <p className="mb-4">An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.</p>
    <div className="flex space-x-4">
      <Link to={"https://play.google.com/store"}>
        <button className="inline-flex items-center px-4 py-2 bg-black text-white font-medium rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8 w-auto mr-2" />
        </button>
      </Link>
      <Link to={"https://www.apple.com/app-store/"}>
        <button className="inline-flex items-center px-4 py-2 bg-black text-white font-medium rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
          <img src={apple} className="h-8 w-auto mr-2" />
        </button>
      </Link>
    </div>
  </div>
</div>

    </div>

    
  );
}

export default Hero;