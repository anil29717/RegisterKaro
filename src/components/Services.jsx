import React from 'react';
import { FaGears, FaChartLine, FaUsers, FaCubes, FaGlobe, FaCalculator } from 'react-icons/fa6';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaGears className="text-amber-500 text-5xl mx-auto" />,
      title: "Company Formation",
      description: "Build web-based solutions that enhance customer experience.",
      hasRightBorder: true
    },
    {
      id: 2,
      icon: <FaChartLine className="text-amber-500 text-5xl mx-auto" />,
      title: "Company Secretarial Services",
      description: "Make data-driven decisions and utilize technology to reach business goals.",
      hasRightBorder: true
    },
    {
      id: 3,
      icon: <FaUsers className="text-amber-500 text-5xl mx-auto" />,
      title: "Virtual Office Address",
      description: "Foster customer relationships by effectively serving your market.",
      hasRightBorder: false
    },
    {
      id: 4,
      icon: <FaCubes className="text-amber-500 text-5xl mx-auto" />,
      title: "Annual Compliance Services",
      description: "Turn your ideas into modern products with our design experts.",
      hasRightBorder: true
    },
    {
      id: 5,
      icon: <FaGlobe className="text-amber-500 text-5xl mx-auto" />,
      title: "Payroll Services",
      description: "Expand your business across the globe with minimal effort.",
      hasRightBorder: true
    },
    {
      id: 6,
      icon: <FaCalculator className="text-amber-500 text-5xl mx-auto" />,
      title: "Bookkeeping Services",
      description: "Steering user behaviours with creative design, data insights & technology.",
      hasRightBorder: false
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-amber-500 text-lg font-medium mb-2">WELCOME TO REGISTERKARO.IN</h3>
          <h2 className="text-gray-800 text-4xl font-bold">Explore Our Services</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="relative flex flex-col items-center text-center">
              {/* Icon */}
              <div className="mb-4">
                {service.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              {/* Learn More Link */}
              <a href="#" className="inline-flex items-center text-gray-700 font-medium hover:text-amber-500">
                Learn more
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18Z" fill="currentColor"/>
                  <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
              
              {/* Right border */}
              {service.hasRightBorder && (
                <div className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-px bg-red-600"></div>
              )}
            </div>
          ))}
        </div>

        {/* See All Services Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-blue-800 hover:bg-blue-900 text-white py-3 px-8 rounded font-medium transition duration-300">
            See All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;