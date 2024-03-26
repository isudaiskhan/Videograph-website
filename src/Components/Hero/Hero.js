import React, { useState, useEffect } from 'react';
import bgimage from '../Assets/hero.jpg';
import {motion} from 'framer-motion';



const slidesContent = [
  {
    title: "Slide 1",
    subtitle: "FOR WEBSITE AND VIDEO EDITING",
    description: "VIDEOGRAPHER'S PORTFOLIO",
    buttonText: "SEE MORE ABOUT US",
  },
  {
    title: "Slide 2",
    subtitle: "FOR WEBSITE AND VIDEO EDITING",
    description: "VIDEOGRAPHER'S PORTFOLIO",
    buttonText: "SEE MORE ABOUT US",
  },
  {
    title: "Slide 3",
    subtitle: "FOR WEBSITE AND VIDEO EDITING",
    description: "VIDEOGRAPHER'S PORTFOLIO",
    buttonText: "SEE MORE ABOUT US",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = (index) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000); // Adjust duration as needed
    }
  };

  const goToPreviousSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slidesContent.length - 1 : prevSlide - 1
      );
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000); // Adjust duration as needed
    }
  };

  const goToNextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prevSlide) =>
        prevSlide === slidesContent.length - 1 ? 0 : prevSlide + 1
      );
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000); // Adjust duration as needed
    }
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []); // Run only once on mount

  return (
    <>
    <div className="relative">
      <div
        className="bg-no-repeat bg-cover bg-center h-[700px]"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        {/* Container for responsive content */}
        <div className="absolute inset-0 mt-24 flex items-center justify-start ps-5 sm:ps-20 sm:pe-6 pe-2">
        <motion.div
              initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
           className=" text-white w-full sm:w-auto">
          <div className="font-medium tracking-widest mb-6">{slidesContent[currentSlide].subtitle}</div>
            <div className={`md:text-6xl sm:w-11/12 sm:text-4xl text-2xl font-semibold ${isAnimating ? "opacity-0" : "opacity-100"} transition-opacity duration-1000`} style={{lineHeight:"4.5rem"}}>
              {slidesContent[currentSlide].description}
            </div>
            <button className="relative mt-10 border-[#00bfe7] border-2 hover:bg-[#00bfe7] overflow-hidden bg-transparent text-white px-6 py-3 text-lg focus:outline-none group">
              <span className="relative z-10">{slidesContent[currentSlide].buttonText}</span>
            </button>

          <div className="flex space-x-5 ps-1 text-lg mt-20">
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

          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;