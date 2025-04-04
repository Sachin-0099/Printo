import React from "react";

const ImageGrid = ({ title, images }) => {
  return (
    <div className="w-full mx-auto p-2 max-w-7xl mt-15">
      {title && <h1 className="text-3xl font-bold  mb-8 pl-3">{title}</h1>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {images.map((img, index) => (
          <div key={index} className="p-2 text-center">
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <p className="mt-2 text-lg ">{img.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
