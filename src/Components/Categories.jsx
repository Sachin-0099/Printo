import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  { src: "Images/Hero1.webp", title: "Apparel" },
  { src: "Images/Hero1.webp", title: "Business Cards" },
  { src: "Images/Hero1.webp", title: "Corporate Gifts" },
  { src: "Images/Hero1.webp", title: "Stationery" },
  { src: "Images/Hero1.webp", title: "Labels" },
  { src: "Images/Hero1.webp", title: "Stickers" },
  { src: "Images/Hero1.webp", title: "Photo Gifts" },
  { src: "Images/Hero1.webp", title: "Packaging" },
];

const Categories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full flex justify-center p-4 mt-15 mb-20">
      <div className="w-full max-w-5xl">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              <img
                src={img.src}
                alt={img.title}
                className="w-32 h-32 object-cover rounded-full shadow-lg border-4 border-gray-200"
              />
              <p className="mt-2 text-lg font-semibold text-gray-700 text-center w-full">
                {img.title}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Categories;
