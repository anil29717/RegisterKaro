import React from 'react';

const Partners = () => {
  const partners = [
    { name: 'Oracle', logo: '/oracle.png' },
    { name: 'Microsoft', logo: '/morphius.png' },
    { name: 'Amazon', logo: '/sumsung.png' },
    { name: 'Google', logo: '/segment.jpeg' }, // Change to PNG if needed
    { name: 'Segment', logo: '/monday.png' }
  ];

  return (
    <section className="bg-white py-13">
      <div className="container mx-auto px-6">
        <p className="text-center text-black text-2xl font-bold mb-6">
          Trusted by Over 500+ Startups and Enterprise Companies
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div key={index} className="h-12 md:h-16 flex items-center bg-transparent">
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className="h-full object-contain bg-transparent"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
