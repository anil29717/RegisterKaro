import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const TechPartners = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email submitted:', email);
    // Reset the input
    setEmail('');
  };

  return (
    <section className="w-full bg-gradient-to-r from-orange-400  to-blue-900 py-16 md:py-10">
      <div className="max-w-5xl mx-auto px-4 text-center text-white">
        {/* Top Label */}
        <div className="mb-4">
          <p className="uppercase tracking-wider text-sm md:text-base">1% OF THE INDUSTRY</p>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-bold mb-12">
          Welcome to your new digital reality. Now.
        </h1>
        
        {/* Email Subscription Form */}
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center mx-auto mb-12 max-w-xl">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            required
            className="flex-grow py-3 px-4 rounded-l bg-white text-gray-800 w-full md:w-auto"
          />
          <button 
            type="submit"
            className="bg-orange-400 hover:bg-orange-500 text-white py-3 px-6 font-medium transition duration-300 rounded-r md:w-auto w-full mt-2 md:mt-0"
          >
            Submit
          </button>
        </form>
        
        {/* Features List */}
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12">
          <div className="flex items-center justify-center">
            <div className="bg-transparent bg-opacity-20 rounded-full p-1 mr-2">
              <FaCheck className="text-white " />
            </div>
            <span>Instant results</span>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="bg-transparent bg-opacity-20 rounded-full p-1 mr-2">
              <FaCheck className="text-white" />
            </div>
            <span>User-friendly interface</span>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="bg-transparent bg-opacity-20 rounded-full p-1 mr-2">
              <FaCheck className="text-white" />
            </div>
            <span>Personalized customization</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechPartners;