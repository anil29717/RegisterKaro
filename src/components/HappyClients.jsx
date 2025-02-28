import React from 'react';

const HappyClients = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Happy Clients</h2>
        
        {/* Added height & width */}
        <div className="w-full flex justify-center">
  <img src="/clients.png" alt="Happy Clients" className="w-full h-auto object-contain" />
</div>

      </div>
    </section>
  );
};

export default HappyClients;
