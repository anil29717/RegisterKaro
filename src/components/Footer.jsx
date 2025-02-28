import React from "react";

const TechPartners = () => {
  const partners = [
    { name: "GitDrive", logo: "/zoom.png" },
    { name: "Shopify", logo: "/spotify.png" },
    { name: "Slack", logo: "/webflow.png" },
    { name: "Dropbox", logo: "/dropbox.png" },
    { name: "Workflow", logo: "/coinbase.png" },
    { name: "Zoom", logo: "/slack.png" },
  ];

  return (
    <section className="py-12 bg-white">
      {/* Partner Logos Section */}
      <div className="container mx-auto px-6 mt-12">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="w-32 h-16 object-contain opacity-70 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechPartners;
