import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {FaLongArrowAltRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Import arrow icons
import image1 from '../Assets/blog-1.jpg';
import {motion} from 'framer-motion';




const Blog = () => {
  const sliderRef = useRef();

  const images = [image1, image1, image1, image1 ,image1];
  const productNames = ["What Makes Users Want to Share a Video on Social Media?", "What Makes Users Want to Share a Video on Social Media?", "What Makes Users Want to Share a Video on Social Media?", "What Makes Users Want to Share a Video on Social Media?", "What Makes Users Want to Share a Video on Social Media?"];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds
    arrows: false, // Hide default arrows
    pauseOnHover: false, // Pause autoplay on hover
    
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
  };

  
   const goToPrev = () => {
     sliderRef.current.slickPrev();
   };

   const goToNext = () => {
     sliderRef.current.slickNext();
   };



  

  return (
    <>
  <div className='max-w-[1240px] mx-auto py-32 relative'>
  <motion.h1
   initial={{y:50,opacity:0}}
     whileInView={{y: 0, opacity: 1}}
     transition={{delay:0.4, y:{type:"spring", stiffness:60},opacity:{duration:0.2},ease:"easeIn",
     duration:1}}
   className='text-white text-center text-xl mb-5'>OUR BLOG</motion.h1>
         <motion.h1
   initial={{y:50,opacity:0}}
     whileInView={{y: 0, opacity: 1}}
     transition={{delay:0.4, y:{type:"spring", stiffness:60},opacity:{duration:0.2},ease:"easeIn",
     duration:1}}
         className='text-white text-center sm:text-4xl text-2xl font-semibold mb-8 underline underline-offset-[20px] decoration-[#00bfe7]'>BLOG UPDATE</motion.h1>
        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <div className="flex flex-wrap -mx-4 mt-20">
                <div className="mx-auto w-11/12 px-4 mb-4">
                 
                  <div className="border overflow-hidden shadow-md relative group">
                <div className="aspect-w-4 aspect-h-3">
                    <div className="bg-cover bg-center bg-no-repeat absolute inset-0 transition-opacity ease-in-out duration-300 opacity-0 group-hover:opacity-100" style={{ backgroundImage: `url(${image1})` }} />
                </div>
                <div className="p-5 bg-opacity-50 hover:bg-transparent relative z-10">
                    <h2 className="text-2xl font-semibold mb-5 text-white">{productNames[index]}</h2>
                    <p className="text-gray-400 mb-4">Date: {new Date().toDateString()}</p>
                    <p className="text-gray-400 mb-4 leading-8 text-justify">We recently launched a new website for a Vital client and wanted to share some of the cool features we were able .</p>
                    <div className="flex items-center justify-between">
                    <button className="mt-4 px-1 text-white flex items-center justify-center">
                        Read more
                        <FaLongArrowAltRight className="text-xl mt-1 ml-3" />
                    </button>
                    </div>
                </div>
                </div>


                </div>
              </div>
            </div>
          ))}
        </Slider>
       
        <motion.button
              initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
         className="absolute group top-0 border-2 border-[#00bfe7] hover:bg-[#00bfe7] right-20 sm:mt-56 mt-60 ml-4 rounded-full p-2 shadow-md" onClick={goToPrev}>
         <FiChevronLeft className="w-6 h-6 text-[#00bfe7] group-hover:text-white" />
       </motion.button>
       <motion.button
              initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
        className="absolute top-0 group border-2 border-[#00bfe7] hover:bg-[#00bfe7] right-0 sm:mt-56 mt-60 mr-5 rounded-full p-2 shadow-md" onClick={goToNext}>
         <FiChevronRight className="w-6 h-6 text-[#00bfe7] group-hover:text-white" />
       </motion.button>
    
      </div>


    </>

  );
};

export default Blog;