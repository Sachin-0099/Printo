import React from 'react';

const infoItems = [
    {
      icon: "Images/Blog1.webp", // Replace with an actual icon
      title: "Get in touch",
      description: "How to Elevate Your Daily Routine with Stylish Stationery",
    },
    {
      icon: "Images/Blog2.webp", // Replace with an actual icon
      title: "Returns & exchanges",
      description: "All you need to know",
    },
    {
      icon: "Images/Blog3.webp", // Replace with an actual icon
      title: "Rewards",
      description: "Unlock Exclusive Benefits.The Role of Premium Pens in Business Meetings: Making a Lasting Impression",
    },
    {
      icon: "Images/Blog4.webp", // Replace with an actual icon
      title: "Bulk Order",
      description: "Get Customized Stationery.Top Pen Brand in the World:A Guide to Premium  writting instruments",
    },
];

const Journal = () => {
  return (
    <div className='flex justify-between p-4 bg-gray-100 p-6 border-t mt-20'>
        {infoItems.map((item, index) => (
            <div key={index} className='flex flex-col items-center text-center w-1/4'>
                <img src={item.icon} alt={item.title} className="w-50 h-50 mb-2" />
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm ">{item.description}</p>
            </div>
        ))}
    </div>
  );
};

export default Journal;