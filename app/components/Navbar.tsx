'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/5  backdrop-blur-lg  px-6 md:px-12 py-1 shadow-lg border-b border-[#DAC5A7] border-opacity-5 z-50">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image width={40} height={40} src="/P.png" alt="Logo" className="h-8 w-16 mr-2" />
         
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="#home" className="hover:text-gray-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-400 transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400 transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col mt-4 space-y-2 md:hidden">
          <li>
            <a href="#home" className="block hover:text-gray-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="block hover:text-gray-400 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="block hover:text-gray-400 transition-colors">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="block hover:text-gray-400 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
