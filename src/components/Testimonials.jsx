import React from 'react';

const TestimonialCard = ({ content, author, rating }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      <p className="text-gray-600 mb-4 italic">"{content}"</p>
      
      <div className="flex items-center">
        <div className="w-10 h-10 0 rounded-full mr-3 bg-cover" style={{ backgroundImage: "url('/profile.png')" }}></div>
        <span className="font-medium">{author}</span>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      content: "RegPlus Karu transformed our compliance process. Their expertise saved us countless hours and helped us navigate complex regulations with ease.",
      author: "John Smith, CEO",
      rating: 5
    },
    {
      content: "Working with the RegPlus Karu team has been a game-changer for our business. Their proactive approach to compliance has given us peace of mind.",
      author: "Sarah Johnson, CFO",
      rating: 5
    },
    {
      content: "The team at RegPlus Karu provided excellent guidance through our regulatory challenges. Highly recommend their services to any growing business.",
      author: "Michael Brown, Operations Director",
      rating: 4
    }
  ];

  return (
    <section className="py-16 bg-[#1C4670]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">What people says about us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;