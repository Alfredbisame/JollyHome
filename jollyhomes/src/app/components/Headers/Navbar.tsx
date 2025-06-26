"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import MobileNav from './MobileNav';
import QuoteModal from './QuoteModal';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
    { href: '/about', label: 'About us' },
  ];

  return (
    <>
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-br from-[#1f5a0e] to-[#2d7a15] p-2 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-200"
              >
                <i className="fas fa-home text-white text-xl"></i>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#1f5a0e] tracking-tight group-hover:text-[#2d7a15] transition-colors duration-200">
                  JollyHome
                </span>
                <span className="text-xs text-gray-500 -mt-1">
                  Your Dream Home
                </span>
              </div>
            </Link>
                     
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <ul className="flex space-x-8 text-sm font-medium text-[#2B3A67]">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="relative py-2 px-1 hover:text-[#1f5a0e] transition-colors duration-200 group"
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1f5a0e] group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* CTA Button */}
              <motion.button 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={openQuoteModal}
                className="hidden md:flex items-center space-x-2 bg-[#1f5a0e] hover:bg-[#2d7a15] text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <i className="fas fa-phone text-sm"></i>
                <span>Get Quote</span>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button 
                whileTap={{ scale: 0.95 }}
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 relative z-50"
              >
                <motion.div
                  animate={isMobileMenuOpen ? "open" : "closed"}
                  className="w-6 h-6 flex flex-col justify-center items-center"
                >
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 6 }
                    }}
                    className="w-6 h-0.5 bg-[#2B3A67] block absolute"
                  />
                  <motion.span
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 }
                    }}
                    className="w-6 h-0.5 bg-[#2B3A67] block absolute"
                  />
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -6 }
                    }}
                    className="w-6 h-0.5 bg-[#2B3A67] block absolute"
                  />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <MobileNav 
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        navItems={navItems}
        onQuoteClick={openQuoteModal}
      />

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={closeQuoteModal}
      />
    </>
  );
};

export default Navbar;
