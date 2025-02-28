import React from 'react';
import { AiOutlineSafety } from "react-icons/ai";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition flex flex-col items-center text-center">
      <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        <img src={icon} alt={title} className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: '/safety.png',
      title: 'Customized & Safe',
      description: 'Tailored solutions to meet your specific compliance requirements with security in mind.'
    },
    {
      icon: '/right.png',
      title: 'No Hidden Fee',
      description: 'Transparent pricing with no surprise charges - what you see is what you pay.'
    },
    {
      icon: '/agile.png',
      title: 'Expert Team & Support',
      description: 'Access to experienced professionals who provide dedicated support when you need it.'
    },
    {
      icon: '/satisfy.png',
      title: 'Committed & Agile',
      description: 'Committed to your success with the agility to respond to changing regulations.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h1 className='text-orange-500 mb-7 text-center'>WHY REGISTERKARO.IN</h1>
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Register Karo</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
