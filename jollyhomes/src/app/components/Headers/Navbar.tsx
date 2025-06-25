"use client";
import { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const toggleMobileMenu = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen);
  // };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-screen-xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-[#1f5a0e] to-[#2d7a15] p-2 rounded-lg shadow-md">
              <i className="fas fa-home text-white text-xl"></i>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[#1f5a0e] tracking-tight">
                JollyHome
              </span>
              <span className="text-xs text-gray-500 -mt-1">
                Your Dream Home
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-8 text-sm font-medium text-[#2B3A67]">
              <li>
                <a 
                  href="#" 
                  className="relative py-2 px-1 hover:text-[#1f5a0e] transition-colors duration-200 group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1f5a0e] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="relative py-2 px-1 hover:text-[#1f5a0e] transition-colors duration-200 group"
                >
                  Gallery
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1f5a0e] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="relative py-2 px-1 hover:text-[#1f5a0e] transition-colors duration-200 group"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1f5a0e] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="relative py-2 px-1 hover:text-[#1f5a0e] transition-colors duration-200 group"
                >
                  About us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1f5a0e] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* CTA Button */}
            <button className="hidden md:flex items-center space-x-2 bg-[#1f5a0e] hover:bg-[#2d7a15] text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer">
              <i className="fas fa-phone text-sm"></i>
              <span>Get Quote</span>
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <i className="fas fa-bars text-[#2B3A67] text-lg"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation (Hidden by default - you can add state management to toggle) */}
        <div className="md:hidden mt-4 pt-4 border-t border-gray-100 hidden">
          <ul className="flex flex-col space-y-3 text-sm font-medium text-[#2B3A67]">
            <li>
              <a 
                href="#" 
                className="block py-2 px-3 hover:bg-gray-50 hover:text-[#1f5a0e] rounded-lg transition-all duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="block py-2 px-3 hover:bg-gray-50 hover:text-[#1f5a0e] rounded-lg transition-all duration-200"
              >
                Gallery
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="block py-2 px-3 hover:bg-gray-50 hover:text-[#1f5a0e] rounded-lg transition-all duration-200"
              >
                Contact
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="block py-2 px-3 hover:bg-gray-50 hover:text-[#1f5a0e] rounded-lg transition-all duration-200"
              >
                About us
              </a>
            </li>
            <li className="pt-2">
              <button className="w-full flex items-center justify-center space-x-2 bg-[#1f5a0e] text-white px-4 py-3 rounded-lg font-medium">
                <i className="fas fa-phone text-sm"></i>
                <span>Get Quote</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
