import React from "react";
import Analysis from '../assets/Analysis.png';
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="bg-black relative h-screen flex flex-col">
      <div className="p-4">
        <Navbar />
      </div>


      <div className="flex-1 flex items-center justify-center px-6">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl text-white gap-10">

          {/* Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-4xl sm:text-4xl font-bold leading-tight drop-shadow-lg">
              Supercharge Your Vision Today
            </h2>
            <p className="mt-5 text-lg md:text-xl text-gray-300 opacity-90 leading-relaxed max-w-md">
              Let us guide you through investment opportunities that pave the way to financial success and growth.
            </p>
            <button className="mt-6 px-8 py-3 bg-black border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 shadow-md">
              Get Started
            </button>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img src={Analysis} alt="Analysis Graphic" className="w-[300px] md:w-[400px] h-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
