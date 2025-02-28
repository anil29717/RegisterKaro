import React from 'react';
import { FaStar } from "react-icons/fa";
import { IoMdPlayCircle } from "react-icons/io";
import { FiGrid } from "react-icons/fi";
import { IoPeople } from "react-icons/io5";
import { FaHandshakeSimple } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="bg-white py-12 h-full max-h-fit bg-cover"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className='flex justify-start gap-2 '>
            <FaStar className='text-yellow-500 w-6 h-6 ml-10 mb-6' /> Google Ratings <div className='flex'><FaStar className='border w-6 h-6 text-white bg-yellow-500 p-1' /><FaStar className='border w-6 h-6 text-white bg-yellow-500 p-1' /><FaStar className='border w-6 h-6 text-white bg-yellow-500 p-1' /><FaStar className='border w-6 h-6 text-white bg-yellow-500 p-1' /><FaStar className='border w-6 h-6 text-white bg-yellow-500 p-1' /></div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 ml-10 w-10/12">
            Your trusted partner for compliance business needs
          </h1>
          <p className="text-gray-600 text-lg mb-6 ml-10">
            An online Buissness compliance platform that helps enterprenurs and <br></br> other individuals with various, <b>registrations, tax, filling,</b> and other legal <br></br> <b>matters</b>
          </p>

          <div className="flex items-center mt-8 space-x-8 ml-10 mb-8">
            <div className="text-center flex items-center justify-start mb-3 gap-2">
              <div className=''>
                <FiGrid className='w-12 text-gray-600 h-12' />
              </div>
              <div className='items-start text-start'>
                <h3 className="text-2xl font-bold text-blue-900">10K+</h3>
                <p className="text-sm text-gray-600">Customer Ratings</p>

              </div>
            </div>
            <div className="text-center flex items-center justify-start mb-3 gap-2">
              <div className=''>
                <IoPeople className='w-12 text-gray-600 h-12' />
              </div>
              <div className='items-start text-start'>
                <h3 className="text-2xl font-bold text-blue-900">20000 +</h3>
                <p className="text-sm text-gray-600">Clients</p>

              </div>
            </div>
            <div className="text-center flex items-center justify-start mb-3 gap-2">
              <div className=''>
                <FaHandshakeSimple className='w-12 text-gray-600 h-12' />
              </div>
              <div className='items-start text-start'>
                <h3 className="text-2xl font-bold text-blue-900">99.8%</h3>
                <p className="text-sm text-gray-600">Financial Stability</p>

              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 ml-10">
            <button className="bg-blue-900  font-bold text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Talk An Expert
            </button>
            <button className=" text-black px-6 flex py-3 font-bold gap-1 rounded-md hover:bg-blue-50 transition">
              <IoMdPlayCircle className='text-red-700 w-6 h-6' />
              See how it works
            </button>
          </div>


        </div>


      </div>
    </section>
  );
};

export default Hero;