import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";

const BlogCard = ({ image, category, title, excerpt, date, readTime, user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        
        {/* User Name & Date */}
        <div className="text-sm text-gray-500 mb-2">
          <span className="font-semibold text-gray-700">{user}</span> • <span>{date}</span>
        </div>

        

        {/* Title with Arrow */}
        <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
          {title}
          <MdArrowOutward className="text-black" />
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4">{excerpt}</p>

        {/* Category Tag */}
        <div className="flex items-center mb-2">
          <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {category}
          </span>
        </div>
      </div>
    </div>
  );
};

const DigitalTransformation = () => {
  const blogs = [
    {
      image: '/blogimage1.png',
      category: 'Email Guidance',
      title: 'Email Guidance & SMTP',
      excerpt: 'Best practices for email compliance and secure SMTP implementation.',
      date: 'Feb 20, 2025',
      readTime: 5,
      user: 'John Doe'
    },
    {
      image: '/blogimage2.png',
      category: 'Scan-On-Demand',
      title: 'Scan-On-Demand Office',
      excerpt: 'How on-demand scanning services can streamline your compliance workflow.',
      date: 'Feb 18, 2025',
      readTime: 7,
      user: 'Jane Smith'
    },
    {
      image: '/blogimage3.png',
      category: 'Business',
      title: 'Growing Business Package',
      excerpt: 'Compliance packages tailored for growing businesses.',
      date: 'Feb 15, 2025',
      readTime: 6,
      user: 'Alice Johnson'
    },
    {
      image: '/blogimage4.png',
      category: 'Startup',
      title: 'Startup My Company Offer',
      excerpt: 'Special compliance packages designed for startups.',
      date: 'Feb 12, 2025',
      readTime: 4,
      user: 'Michael Brown'
    },
    {
      image: '/blogimage5.png',
      category: 'Scan On',
      title: 'Scan-On Company Offer',
      excerpt: 'Document scanning solutions for regulatory compliance.',
      date: 'Feb 10, 2025',
      readTime: 5,
      user: 'Emma Wilson'
    },
    {
      image: '/blogimage1.png',
      category: 'Business',
      title: 'Startup My Company Offer',
      excerpt: 'Comprehensive compliance solutions for new businesses.',
      date: 'Feb 8, 2025',
      readTime: 6,
      user: 'David Lee'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 px-15">
      <div className="container mx-auto px-6">
      <p className="text-orange-400 text-center mb-2 max-w-2xl mx-auto">
          Explore our Blogs
        </p>
        <h2 className="text-3xl font-bold text-center mb-10">Accelerate Digital Transformation</h2>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard 
              key={index}
              image={blog.image}
              title={blog.title}
              excerpt={blog.excerpt}
              date={blog.date}
              readTime={blog.readTime}
              user={blog.user}
              category={blog.category}
            />
          ))}
        </div>
        
        <div className="text-center items-center flex justify-center mt-12">
          <button className="bg-blue-900 text-white flex items-center gap-4 px-6 py-3 rounded-md hover:bg-blue-800 transition">
            show more blogs <MdArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformation;
