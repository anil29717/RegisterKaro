import React from "react";

const StatItem = ({ value, label }) => {
  return (
    <div className="text-center">
      {/* Gradient Number */}
      <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-purple-900 text-transparent bg-clip-text mb-2">
        {value}
      </h3>
      {/* Bold Black Label */}
      <p className="text-black font-bold">{label}</p>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { value: "1M+", label: "CUSTOMERS" },
    { value: "12+", label: "YEARS OF EXCELLENCE" },
    { value: "41+", label: "R&D ENGINEERS" },
    { value: "78+", label: "COUNTRIES" }, 
    { value: "3821+", label: "PARTNERS" },
    { value: "41+", label: "AWARDS RECEIVED" }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <h1 className="text-orange-500 mb-2 uppercase tracking-wide">
            WHY REGISTR KARO
          </h1>
          <h1 className="text-2xl font-bold">Some Numbers are Important</h1>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-2">
          {stats.map((stat, index) => (
            <StatItem key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
