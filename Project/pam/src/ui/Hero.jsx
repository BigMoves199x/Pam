import React from "react";
import Analysis from '../assets/Analysis.png';
import Navbar from "./Navbar";
import { Link } from "react-scroll";
import Info from "./Info";

const Hero = () => {
  return (
    <div className="bg-black relative h-screen flex flex-col">
      <div className="p-4">
        <Navbar />
      </div>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl text-white gap-12">

          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
              Supercharge Your Vision Today
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-md mx-auto md:mx-0">
              Let us guide you through investment opportunities that pave the way to financial success and growth.
            </p>
            <Link 
              to={<Info />} 
              smooth={true} 
              duration={300} 
              className="inline-block mt-8 px-8 py-3 bg-black border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-lg cursor-pointer"
            >
              Get Started
            </Link>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img 
              src={Analysis} 
              alt="Analysis Graphic" 
              className="w-[240px] sm:w-[300px] md:w-[440px] h-auto object-contain" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
