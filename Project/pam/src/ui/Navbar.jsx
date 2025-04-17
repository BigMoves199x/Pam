import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Prime from "../assets/Prime.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); 

  const handleNavigation = () => {
    navigate("/login");
    setIsOpen(false);
  };

  return (
    <nav className="w-full h-[60px] bg-[#FFFDD0] text-black shadow-md rounded-full relative -top-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative bottom-2">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div>
            <a href="/">
              <img src={Prime} alt="Logo" className="w-32" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-16 text-lg font-medium">
            <a href="#home" className="hover:text-gray-300 transition duration-300">
              Home
            </a>
            <a href="#services" className="hover:text-gray-300 transition duration-300">
              Services
            </a>
            <a href="#about" className="hover:text-gray-300 transition duration-300">
              About
            </a>
            <a href="#contact" className="hover:text-gray-300 transition duration-300">
              Contact
            </a>
          </div>

          {/* Sign Up Button (Desktop) */}
          <button
            className="hidden md:block bg-black text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-white hover:text-black transition-all duration-300"
            onClick={handleNavigation}
          >
            Login
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
              {isOpen ? <FaTimes className="h-7 w-7" /> : <FaBars className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-20 left-8 right-0 w-[350px] pl-4 pr-4 bg-[#FFFDD0] z-20 shadow-md rounded-b-lg transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center py-5 space-y-4 text-black text-lg font-semibold">
          <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-gray-300">
            Home
          </a>
          <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-gray-300">
            Services
          </a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-gray-300">
            About
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-gray-300">
            Contact
          </a>
          <button
            className="bg-white text-[#6a1b9a] px-5 py-2 rounded-lg shadow-md hover:bg-[#8e24aa] hover:text-white transition-all duration-300"
            onClick={handleNavigation}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
