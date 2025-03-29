import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Missing theme CSS

const images = [
  { src: "Images/Hero1.webp", title: "Image 1" },
  { src: "Images/Hero1.webp", title: "Image 2" },
  { src: "Images/Hero1.webp", title: "Image 3" },
  { src: "Images/Hero1.webp", title: "Image 4" },
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <div className="w-full max-w-7xl mx-auto p-4">
      <Slider {...settings}>
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
      </Slider>
    </div>
  );
};

export default ImageSlider;
