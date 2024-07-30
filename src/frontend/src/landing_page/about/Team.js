import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import profileImage from '../../images/Luvraj.jpg';

const Team = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-semibold mb-8">People</h1>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        <div className="flex-1 flex justify-center lg:justify-end mb-8 lg:mb-0">
          <img src={profileImage} alt="Luvraj Singh" className="rounded-full w-40 h-40 lg:w-80 lg:h-80 object-cover" />
        </div>
        <div className="flex-1 text-gray-700 leading-loose lg:ml-16">
          <h2 className="text-2xl font-medium mb-2">Luvraj Singh</h2>
          <h3 className="text-gray-500 mb-4">Website Creator</h3>
          <p>Luvraj is an aspiring developer with a strong foundation in coding and software development. He has a passion for learning and improving his skills, particularly in the MERN stack, which he is currently focusing on for a big personal project.</p>
          <p className="mt-4">Luvraj is also dedicated to balancing his professional growth with his personal fitness goals, incorporating regular workouts and marathon training into his routine. </p>
          <p className="mt-4">His commitment to continuous learning and self-improvement makes him a promising and well-rounded developer.</p>
          <p className="mt-4">
            Connect on 
            <p className="text-blue-600 hover:underline ml-1">Homepage</p>
            <p className="text-blue-600 hover:underline ml-1">TradingQnA</p> 
            <p className="text-blue-600 hover:underline ml-1">Twitter</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;