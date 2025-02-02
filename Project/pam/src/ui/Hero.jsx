import React from 'react';
import Landing from '../assets/Landing.png'
import Navbar from './Navbar'; // Import your Navbar component

const Hero = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-[#EA384D] to-[#D31027]">
      {/* Background Image */}

   {/*    <img
        src={Landing}
        alt="Investment background for larger screens"
        className="hidden md:block object-cover w-full h-full"
      /> */}

      {/* Navbar inside Hero */}
      <div className="absolute inset-x-0 top-0 z-20">
        <Navbar /> {/* This ensures the navbar appears on top of the background */}
      </div>

      {/* Text Content */}
      <div className="absolute top-1/4 left-4 md:top-1/3 md:left-12 flex flex-col items-start text-[#9e306d] z-20 px-6 md:px-28 font-hind">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight text-left w-full md:w-[50%]">
          Supercharge your vision on building your Dream today
        </h2>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-left max-w-full md:max-w-2xl font-hind w-full md:w-[40%]">
          Let us guide you through investment opportunities that pave the way to financial success and growth.
        </p>

        <button className="mt-6 px-6 py-2 sm:px-8 sm:py-3 bg-white text-[#9e306d] hover:text-white font-semibold rounded-lg hover:bg-[#9e306d] border-[#9e306d] border-2 transition-all duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
