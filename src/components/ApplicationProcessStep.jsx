import React from 'react';
import { FaFileAlt, FaCreditCard, FaUserCog, FaEnvelope } from 'react-icons/fa';

const ApplicationProcessSteps = () => {
  const steps = [
    {
      id: 1,
      icon: <FaFileAlt className="text-white text-xl" />,
      text: "Fill up Application Form",
      bgColor: "bg-red-400"
    },
    {
      id: 2,
      icon: <FaCreditCard className="text-white text-xl" />,
      text: "Make Online Payment",
      bgColor: "bg-green-500"
    },
    {
      id: 3,
      icon: <FaUserCog className="text-white text-xl" />,
      text: "Executive will Process Application",
      bgColor: "bg-amber-400"
    },
    {
      id: 4,
      icon: <FaEnvelope className="text-white text-xl" />,
      text: "Get Confirm Mail",
      bgColor: "bg-gray-500"
    }
  ];

  return (
    <div className="w-full bg-amber-400 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:justify-between">
          {steps.map((step) => (
            <div key={step.id} className="flex items-center">
              <div className={`${step.bgColor} rounded-full p-4 flex items-center justify-center w-12 h-12`}>
                {step.icon}
              </div>
              <span className="ml-3 text-gray-800 font-medium">{step.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicationProcessSteps;