import React from 'react';
import { FaFacebook, FaGoogle, FaApple, FaInstagram } from 'react-icons/fa';

const FooterBar = () => {
  return (
    <footer className="bg-blue-950 text-white py-12 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* First column - Design */}
          <div className="md:col-span-1">
            <p className="text-lg mb-4">Design outstanding interfaces with advanced Figma features in a matter of minutes.</p>
            
            {/* Social media icons */}
            <div className="flex space-x-4 mt-4 text-gray-200">
              <a href="#" className="text-white hover:text-blue-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-blue-300">
                <FaGoogle size={24} />
              </a>
              <a href="#" className="text-white hover:text-blue-300">
                <FaApple size={24} />
              </a>
              <a href="#" className="text-white hover:text-blue-300">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Second column - START A BUSINESS */}
          <div className="md:col-span-1">
            <h3 className="text-amber-500 font-bold mb-4">START A BUSINESS</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gray-300">Features</a></li>
              <li><a href="#" className="hover:text-gray-300">Solutions</a></li>
              <li><a href="#" className="hover:text-gray-300">Integrations</a></li>
              <li><a href="#" className="hover:text-gray-300">Enterprise</a></li>
              <li><a href="#" className="hover:text-gray-300">Solutions</a></li>
            </ul>
          </div>

          {/* Third column - GOVERNMENT REGISTRATION */}
          <div className="md:col-span-1">
            <h3 className="text-amber-500 font-bold mb-4">GOVERNMENT REGISTRATION</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gray-300">Partners</a></li>
              <li><a href="#" className="hover:text-gray-300">Community</a></li>
              <li><a href="#" className="hover:text-gray-300">Developers</a></li>
              <li><a href="#" className="hover:text-gray-300">App</a></li>
              <li><a href="#" className="hover:text-gray-300">Blog</a></li>
            </ul>
          </div>

          {/* Fourth column - COMPLIANCE & TAX */}
          <div className="md:col-span-1">
            <h3 className="text-amber-500 font-bold mb-4">COMPLIANCE & TAX</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gray-300">Channels</a></li>
              <li><a href="#" className="hover:text-gray-300">Scale</a></li>
              <li><a href="#" className="hover:text-gray-300">Watch the Demo</a></li>
              <li><a href="#" className="hover:text-gray-300">Our Competition</a></li>
            </ul>
          </div>

          {/* Fifth column - BIS & CDSCO */}
          <div className="md:col-span-1">
            <h3 className="text-amber-500 font-bold mb-4">BIS & CDSCO</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">News</a></li>
              <li><a href="#" className="hover:text-gray-300">Leadership</a></li>
              <li><a href="#" className="hover:text-gray-300">Media Kit</a></li>
            </ul>
          </div>
        </div>

        {/* Scroll to top button */}
        <div className="flex justify-center mt-12 mb-8">
          <button 
            className="bg-amber-500 rounded-full p-4 hover:bg-amber-600 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center pt-4">
          <p>© 2024 Registerkaro. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;