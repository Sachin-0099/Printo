import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  { src: "Images/Clothing.avif" },
  { src: "Images/Electronic.avif" },
  { src: "Images/HomeDecor.avif" },
  { src: "Images/Health.avif" },
  { src: "Images/Sports.avif" },
  { src: "Images/Books.avif" },
  { src: "Images/Sports.avif" },
  { src: "Images/Furniture.avif" },
];

const CategorySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
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
          slidesToShow: 3,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="w-full flex justify-center p-4 mt-10 mb-20">
      <div className="w-full max-w-6xl px-4 md:px-0">
        <Slider {...settings}>
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              <img
                src={category.src}
                alt="Category Image"
                className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full shadow-md border-4 border-gray-300"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CategorySlider;