import React from 'react';

const ImageMap = () => {
  const images = [
    { src: "Images/Hero1.webp", title: "Image 1" },
    { src: "Images/Hero1.webp", title: "Image 2" },
    { src: "Images/Hero1.webp", title: "Image 3" },
    { src: "Images/Hero1.webp", title: "Image 4" },
    { src: "Images/Hero1.webp", title: "Image 1" },
    { src: "Images/Hero1.webp", title: "Image 2" },
    { src: "Images/Hero1.webp", title: "Image 3" },
    { src: "Images/Hero1.webp", title: "Image 4" },
  ];

  return (
    <div className='w-full mx-auto p-2 max-w-7xl'>
      <h1 className="text-2xl font-bold  mb-4 pl-3">
        Elevate Your Workspace with Premium Stationery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div key={index} className="p-2 text-center">
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <p className="mt-2 text-lg font-semibold">{img.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageMap;
