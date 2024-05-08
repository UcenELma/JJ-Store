import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import jwl3 from "../../../../../IMG/hero/jwl3.png";
import jwl5 from "../../../../../IMG/hero/jwl5.png";
import jwl7 from "../../../../../IMG/hero/jwl7.png";
import jwl8 from "../../../../../IMG/hero/jwl8.png";
import Button from "../Shared/Button";

const HeroData = [
  {
    id: 3,
    img: jwl3,
    subtitle: "Affection",
    title: "Gleaming",
    title2: "Love",
  },
  {
    id: 5,
    img: jwl5,
    subtitle: "Shimmering",
    title: "Devotion",
    title2: "Radiant",
  },
  {
    id: 7,
    img: jwl7,
    subtitle: "Affection",
    title: "Gleaming",
    title2: "Enduring",
  },
  {
    id: 8,
    img: jwl8,
    subtitle: "Shimmering",
    title: "Embotion",
    title2: "Ciewels",
  },
];

const Hero = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true, // Show dots for navigation
    arrows: false, // Remove arrows
    infinite: true,
    speed: 2200,
    autoplay: true, // Autoplay enabled
    slidesToScroll: 1,
    autoplaySpeed: 900,
    pauseOnHover: false,
    pauseOnFocus: true,
    className: "slick-container",
    appendDots: (dots) => (
      <div style={{ bottom: "20px" }}>
        <ul style={{ margin: "0px", padding: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="container mx-auto">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-gray-400/80 to-gray-100 relative">
        <Slider ref={sliderRef} {...settings}>
          {HeroData.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* img section */}
                <div className="flex justify-center sm:order-last">
                  <div>
                    <img
                      src={data.img}
                      alt="product image"
                      className="w-72 h-72 sm:w-auto sm:h-auto sm:max-w-md sm:max-h-md mx-auto relative z-40"
                    />
                  </div>
                </div>
                {/* text content section */}
                <div className="flex flex-col justify-center px-8 py-6 sm:px-12 sm:order-first">
                  <h1 className="text-2xl sm:text-6xl lg:text-4xl font-bold ">{data.subtitle}</h1>
                  <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h2>
                  <h2 className="text-5xl uppercase text-white sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">{data.title2}</h2>
                  <div>
                    <Button
                      text="Explore Jewelry"
                      bgColor="bg-gray-900"
                      textColor="text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
          <GoChevronLeft className="text-gray-900 text-4xl cursor-pointer" onClick={prevSlide} />
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
          <GoChevronRight className="text-gray-900 text-4xl cursor-pointer" onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
