import React, { useRef, useState } from 'react';
import bgimage from '../Assets/hero.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const slidesContent = [
    {
      title: "VIDEOGRAPHER'S PORTFOLIO",
      description: 'FOR WEBSITE AND VIDEO EDITING',
      buttonText: 'SEE MORE ABOUT US',
    },
    {
      title: "VIDEOGRAPHER'S PORTFOLIO",
      description: 'FOR WEBSITE AND VIDEO EDITING',
      buttonText: 'SEE MORE ABOUT US',
    },
    {
      title: "VIDEOGRAPHER'S PORTFOLIO",
      description: 'FOR WEBSITE AND VIDEO EDITING',
      buttonText: 'SEE MORE ABOUT US',
    },
  ];

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
    setCurrentSlide(index);
  };

  return (
    <>
    <div className="sm:ps-14 ps-4 pe-4 relative overflow-hidden py-28">
     <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgimage})`,
          width: '100%',
          height: '100%',
        }}
      ></div>
      <div className="absolute inset-0"></div>
      <div className="relative z-10 w-full md:max-w-2xl sm:max-w-xl mt-14">
        <Slider {...settings} ref={sliderRef} beforeChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)}>
          {slidesContent.map((slide, index) => (
            <div key={index} className="w-full my-6 relative group">
              <div className="py-5 sm:ps-10 ps-3">
                <div className="font-medium tracking-widest text-white mb-6">{slide.description}</div>

                <h1 className="md:text-6xl sm:w-11/12 sm:text-4xl text-white text-2xl font-semibold" style={{ lineHeight: '4.5rem' }}>
                  {slide.title}
                </h1>
              </div>
              <div className="sm:ps-11 ps-3">
                <button type="submit" className={`font-medium mt-5 duration-300 flex items-center justify-center px-7 py-3 border-2  text-white hover:bg-[#00bfe7] ${slide.buttonColor} border-[#00bfe7]`}>
                  {slide.buttonText}
                </button>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex space-x-5 sm:ps-12 ps-4 text-lg mt-12">
          {slidesContent.map((_, index) => (
            <h1
              key={index}
              className={`cursor-pointer ${currentSlide === index ? 'text-white underline decoration-2 underline-offset-8' : 'text-gray-500'}`}
              onClick={() => goToSlide(index)}
            >
              0{index + 1}
            </h1>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;