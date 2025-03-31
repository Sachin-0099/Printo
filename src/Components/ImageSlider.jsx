import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Missing theme CSS

const images = [
  { src: "Images/Under499.jpg", title: "Stationary" },
  { src: "Images/Standees.webp", title: "Standees" },
  { src: "Images/Certificates.webp", title: "Certificates" },
  { src: "Images/StandUp.webp", title: "Standup Pouches" },
  { src: "Images/Banner.webp", title: "Fast Delivery" },

];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
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
    <div className="w-full max-w-8xl mx-auto p-4 bg-[#662D91] px-8 h-auto py-8 mt-15">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="p-2 text-center">
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <p className="mt-2 text-lg text-white">{img.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
