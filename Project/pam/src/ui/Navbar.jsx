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
    <nav className="w-full bg-[#FFFDD0] rounded-full text-black shadow-md fixed top-2 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/">
            <img src={Prime} alt="Logo" className="w-28 sm:w-32" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12 text-[16px]">
            {["home", "services", "about", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:text-gray-500 transition duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>

          {/* Login Button - Desktop */}
          <button
            onClick={handleNavigation}
            className="hidden md:block bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300 shadow"
          >
            Login
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black focus:outline-none"
          >
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-4 right-4 bg-[#FFFDD0] rounded-xl shadow-lg transition-all duration-300 overflow-hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center py-6 space-y-5 text-base font-semibold">
          {["home", "services", "about", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-500 transition duration-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
