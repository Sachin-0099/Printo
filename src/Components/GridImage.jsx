import React from 'react';

const img = [
  { src: "Images/Under299.jpg", title: "Stationary" },
  { src: "Images/Under499.jpg", title: "Standees" },
  { src: "Images/Under199.jpg", title: "Certificates" },
  { src: "Images/Under199.jpg", title: "Standup Pouches" },
];

const GridImage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-10 grid grid-cols-2 gap-8">
      {img.map((item, index) => (
        <div key={index} className="relative">
          <img
            src={item.src}
            alt={item.title}
            className="w-[618px] h-[215px] object-cover  shadow-md mt-10 px-4"
          />
          <p className="absolute bottom-2 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default GridImage;
