import React from "react";

const InfoSection = () => {
  const infoItems = [
    {
      icon: "💬",
      title: "Get in touch",
      description: "Expert help & advice",
    },
    {
      icon: "↩️",
      title: "Returns & exchanges",
      description: "All you need to know",
    },
    {
      icon: "🎁",
      title: "Rewards",
      description: "Unlock Exclusive Benefits",
    },
    {
      icon: "📦",
      title: "Bulk Order",
      description: "Get Customized Stationery",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 bg-gray-100 p-6 border-t mt-10">
      {infoItems.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center w-full sm:w-1/2 md:w-1/4 p-4">
          <span className="text-4xl mb-2">{item.icon}</span>
          <h3 className="font-semibold text-lg">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoSection;