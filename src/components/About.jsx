import React from 'react';
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 ml-10 md:mb-0">
            <h1 className='text-orange-400 font-bold mb-2'> WELOCOME TO REGISTERKARO.IN</h1>
            <h2 className="text-3xl font-bold mb-4 text-orange-500"><span className='text-black mr-2'>About</span>Register Karo</h2>
            <p className="text-black mb-4 w-11/12">
            We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I'm extremely pleased with their performance, ability to execute, and willingness to adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about customer satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding everyone's expectations.

            </p>
            <p className="text-black mb- w-11/12">
            I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes
            </p>
            <button className="bg-blue-900 text-white px-6 py-3 rounded-md mt-10 hover:bg-blue-800 transition flex gap-3 items-center">
              Learn More <FaRegArrowAltCircleRight />
            </button>
          </div>

          <div className="md:w-1/2">
            <img
              src="/groupimage.png"
              alt="RegPlus Karu Team"
              className="rounded-lg shadow-lg max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
