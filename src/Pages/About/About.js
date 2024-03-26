import React,{useRef} from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import bgimage from '../../Components/Assets/Navbar-bg.jpg';
import { RxSlash } from "react-icons/rx";
import image1 from '../../Components/Assets/about-1.jpg';
import image2 from '../../Components/Assets/about-2.jpg';
import image3 from '../../Components/Assets/about-3.jpg';
import image4 from '../../Components/Assets/si-3.png';
import image5 from '../../Components/Assets/si-4.png';
import bgimage2 from '../../Components/Assets/testimonial-bg.jpg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import image6 from '../../Components/Assets/ta-1.jpg';
import image7 from '../../Components/Assets/ta-2.jpg';
import image8 from '../../Components/Assets/ta-3.jpg';
import Counter from '../../Components/Counter/Counter';
import Team from '../../Components/Team/Team';
import Footer from '../../Components/Footer/Footer';
import ScrollButton from '../../Components/ScrollButton/ScrollButton';
import {motion} from 'framer-motion';






const About = () => {
  const sliderRef = useRef();

  const images = [image6, image7, image8, image6 ,image8];
  const productNames = ["Krista Attorn", "Krista Attorn", "Krista Attorn", "Krista Attorn", "Krista Attorn"];
  const prices = ["Web Designer", "Web Designer", "Web Designer", "Web Designer", "Web Designer"];

  const settings = {
    infinite: true,
    speed: 1000,
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
        initialSlide: 1,
        },
      },

  
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },


    ]

  };


  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };
  return (
    <>
    
      <Navbar />

      <div className="relative h-96 flex justify-center items-center overflow-hidden">
        <div className="absolute inset-0 h-96 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${bgimage})` }}>
        <motion.div
              initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
          className="flex flex-col items-center justify-center h-full">
            <h1 className="sm:text-5xl text-3xl font-bold text-white mt-28">About us</h1>
            <div className="flex items-center mt-6">
              <h2 className="text-white mr-4">Home</h2>
              <RxSlash className="text-white" />
              <h2 className="text-gray-400 ml-4">About</h2>
            </div>
          </motion.div>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto mt-40 lg:ps-6 lg:pe-6 sm:ps-20 sm:pe-20'>
        <div className='flex flex-wrap'>
          {/* Original setup for smaller screens */}
          <div className='w-full lg:w-1/2 sm:ps-0 sm:pe-0 ps-5 pe-5'>
          <motion.div
              initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
             className='flex flex-wrap p-3'>
              <div className='w-full sm:w-1/2'>
                <img src={image1} className="w-full h-full object-cover" alt="Video thumbnail" />
              </div>
              <div className='w-full sm:w-1/2 space-y-5 sm:ps-5'>
                <div className="relative">
                  <img src={image2} className="w-full h-60 object-cover" alt="Video thumbnail" />
                </div>
                <div className="relative">
                  <img src={image3} className="w-full h-60 object-cover" alt="Video thumbnail" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Original setup for smaller screens */}
          <div className='w-full lg:w-1/2 lg:ps-14 lg:mt-0 mt-20 overflow-hidden'>
            <div className='text-white ps-3'>
            <motion.div
              initial={{x:100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
               className='text-xl font-semibold'>ABOUT VIDEOGRAPH</motion.div>
              <motion.div
              initial={{x:100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
              className='mt-4 text-4xl font-semibold underline underline-offset-[20px] decoration-[#00bfe7]'>WHO WE ARE?</motion.div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-14">
            <motion.div
              initial={{x:100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
               className="p-4 rounded-lg space-y-4">
                <div className="text-3xl text-gray-600 relative">
                  <img src={image4} className='border-2 p-4 border-[#00bfe7] transition duration-500 transform hover:rotate-45' alt="Service 3" />
                </div>
                <h1 className="text-2xl text-white font-semibold mt-6">Video distribution</h1>
                <p className='mt-2 text-gray-400'>Whether you're halfway through the editing process, or you .</p>
              </motion.div>
              <motion.div
              initial={{x:100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
               className="p-4 rounded-lg space-y-4">
                <div className="text-3xl text-gray-600 relative">
                  <img src={image5} className='border-2 p-4 border-[#00bfe7] transition duration-500 transform hover:rotate-45' alt="Service 4" />
                </div>
                <h1 className="text-2xl text-white font-semibold mt-6">Video hosting</h1>
                <p className='mt-2 text-gray-400'>Whether you're halfway through the editing process, or you .</p>
              </motion.div>
            </div>
            <div className='text-white ps-4 mt-6'>
            <motion.p
              initial={{x:100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
              className='text-gray-400'>Formed in 2006 by Matt Hobbs and Cael Jones, Videoprah is an award-winning, full-service production company specializing in commercial, broadcast, tourism & action sport video production services has been featured.</motion.p>
            </div>
          </div>
        </div>
      </div>


      <div className="sm:h-[650px] h-[700px] bg-fixed bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${bgimage2})` }}>


      <div className='max-w-[1240px] mx-auto mt-40 relative'>
      <motion.h2
   initial={{y:50,opacity:0}}
     whileInView={{y: 0, opacity: 1}}
     transition={{delay:0.4, y:{type:"spring", stiffness:60},opacity:{duration:0.2},ease:"easeIn",
     duration:1}}
   className='text-white text-2xl sm:pt-28 pt-20 font-semibold text-center'>LOVED BY CLIENTS</motion.h2>
      <motion.h1
   initial={{y:50,opacity:0}}
     whileInView={{y: 0, opacity: 1}}
     transition={{delay:0.4, y:{type:"spring", stiffness:60},opacity:{duration:0.2},ease:"easeIn",
     duration:1}}
       className='text-white sm:text-5xl text-3xl font-semibold text-center mt-4 underline underline-offset-[20px] decoration-[#00bfe7]'>Our Client Saying!</motion.h1>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index}>  
          <div className="flex flex-wrap lg:-mx-6 sm:-mx-14 sm:mt-16 mt-24 lg:ps-0 lg:pe-0 sm:ps-10 sm:pe-10">
          <div className=" mx-auto w-11/12 sm:px-4 mb-4">
          <div className="border border-gray-500 overflow-hidden shadow-md flex mt-6">
        
      {/* Price and Description Column */}
    <div className="w-full py-5">
  <p className="text-gray-300 text-lg py-4 sm:w-11/12 ps-3 pe-3 italic mx-auto">Videographer delivers such a great service that it can benefit all kinds of people from any number.</p>
 
</div>

  </div>
  <div className="relative flex flex-wrap mt-6">
    <img className="w-14 h-14 rounded-full object-cover mb-3 sm:mb-0 sm:mr-7" src={image} alt={`Image ${index + 1}`} />
    <div className="w-full sm:w-auto">
      <h2 className="text-xl font-semibold text-white">{productNames[index]}</h2>
      <p className="text-white mt-2">{prices[index]}</p>
     
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
       className="absolute group top-0 border-2 border-[#00bfe7] hover:bg-[#00bfe7] right-20 mt-56 ml-4 rounded-full p-2 shadow-md" onClick={goToPrev}>
        <FiChevronLeft className="w-6 h-6 text-[#00bfe7] group-hover:text-white" />
      </motion.button>
      <motion.button
      initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
       className="absolute top-0 group border-2 border-[#00bfe7] hover:bg-[#00bfe7] right-0 mt-56 mr-5 rounded-full p-2 shadow-md" onClick={goToNext}>
        <FiChevronRight className="w-6 h-6 text-[#00bfe7] group-hover:text-white" />
      </motion.button>
    </div>

    </div>


    <Counter />
    <Team />
    <Footer />
    <ScrollButton />

    </>
  )
}

export default About;