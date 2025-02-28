import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="container mx-auto flex justify-around items-center ">
        <div className="flex items-center">
          <img src="/logo.png" alt="RegPlus Karu Logo" className="h-10" />
        </div>

        <div className=' flex items-center text-medium text-blue-950 font-bold'>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-800 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-800 hover:text-blue-600">Our Services</a>
            <a href="#" className="text-gray-800 hover:text-blue-600">Blog</a>
            <a href="#" className="text-gray-800 hover:text-blue-600">About Us</a>
            <a href="#" className="text-gray-800 hover:text-blue-600">Contact</a>
            <CiSearch  className='w-6 h-6'/>
            
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition">
            Talk an Expert
          </button>
          </div>
        </div>



        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 py-2">
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Home</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Our Services</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Blog</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">About Us</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
