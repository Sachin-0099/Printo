import React from 'react';

const infoItems = [
    {
      icon: "Images/Blog1.webp",
      title: "Get in touch",
      description: "How to Elevate Your Daily Routine with Stylish Stationery",
    },
    {
      icon: "Images/Blog2.webp",
      title: "Returns & exchanges",
      description: "All you need to know",
    },
    {
      icon: "Images/Blog3.webp",
      title: "Rewards",
      description: "Unlock Exclusive Benefits. The Role of Premium Pens in Business Meetings: Making a Lasting Impression",
    },
    {
      icon: "Images/Blog4.webp",
      title: "Bulk Order",
      description: "Get Customized Stationery. Top Pen Brand in the World: A Guide to Premium writing instruments",
    },
];

const Journal = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 bg-gray-100 border-t mt-20'>
        {infoItems.map((item, index) => (
            <div key={index} className='flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg'>
                <img src={item.icon} alt={item.title} className="w-20 h-20 mb-3 object-cover rounded-md" />
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
        ))}
    </div>
  );
};

export default Journal;
