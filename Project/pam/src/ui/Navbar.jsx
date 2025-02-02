import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoCaretDownOutline } from "react-icons/io5";
import Prime from '../assets/Prime.png'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate(); // Get navigate function

  const handleNavigation = () => {
    navigate('/signup')
  };

  const openSignup = () => {
    setIsSignup(true)
  };
  const closeSignup = () => {
    setIsSignup(false)
  }


  return (
    <nav className="w-full text-yellow-500 z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-[100%] h-16 mt-6 ">
          {/* Logo */}
          <div>
            <a href="/">
              <img src={Prime} alt="Logo" className="w-28" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-14 text-white font-Madura relative left-60">
            <a href="#home" className=" transition duration-300">
              Home
            </a>

            <a href="#services" className=" transition duration-300">
              Services
            </a>


            <a href="#about" className=" transition duration-300">
              About
            </a>
            <a href="#contact" className="transition duration-300">
              Contact
            </a>
          </div>

          {/* Sign Up Button */}
          <button
            className="bg-[#9e306d] text-white hover:text-[#9e306d] px-4 py-2 hidden md:block rounded-md hover:bg-white transition duration-300"
            onClick={handleNavigation}
          >
            Sign Up
          </button>


          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-gray-200 hover:text-yellow-500"
            >
              {isOpen ? <FaTimes className="h-6 w-6 text-[#9e306d]" /> : <FaBars className="h-6 w-6 text-[#9e306d]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black rounded-b-lg">
          <a
            href="#home"
            className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#services"
            className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <button
            className="bg-[#9e306d] text-white hover:text-[#9e306d] px-4 py-2 rounded-md hover:bg-white transition duration-300"
            onClick={handleNavigation}
          >
            Sign Up
          </button>
        </div>
      )}

    </nav>


  );
};

export default Navbar;
