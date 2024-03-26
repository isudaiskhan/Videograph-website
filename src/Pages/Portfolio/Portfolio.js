import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import bgimage from '../../Components/Assets/Navbar-bg.jpg';
import { BsPlayCircleFill } from 'react-icons/bs';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import image1 from  '../../Components/Assets/portfolio-1.jpg';
import image2 from  '../../Components/Assets/portfolio-2.jpg';
import { RxSlash } from "react-icons/rx";
import image3 from  '../../Components/Assets/portfolio-3.jpg'
import image4 from  '../../Components/Assets/portfolio-4.jpg'
import image5 from  '../../Components/Assets/portfolio-5.jpg'
import image6 from  '../../Components/Assets/portfolio-6.jpg'
import image7 from  '../../Components/Assets/portfolio-7.jpg'
import image8 from  '../../Components/Assets/portfolio-8.jpg'
import image9 from  '../../Components/Assets/portfolio-9.jpg'
import Footer from '../../Components/Footer/Footer';
import ScrollButton from '../../Components/ScrollButton/ScrollButton';
import {motion} from 'framer-motion';



const Portfolio = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(-1);
  const [videoUrls] = useState([
    'https://www.youtube.com/embed/yJg-Y5byMMw?si=hznSQrNwpdG4wMoI',
    'https://www.youtube.com/embed/8VLXHyHRXjc?si=xTUKauNqvr59BDFk',
    'https://www.youtube.com/embed/tt2k8PGm-TI?si=tb7C_vuu5Yu7OM5y',
    'https://www.youtube.com/embed/tt2k8PGm-TI?si=tb7C_vuu5Yu7OM5y',
    'https://www.youtube.com/embed/tt2k8PGm-TI?si=tb7C_vuu5Yu7OM5y',
    'https://www.youtube.com/embed/tt2k8PGm-TI?si=tb7C_vuu5Yu7OM5y',
    'https://www.youtube.com/embed/tt2k8PGm-TI?si=tb7C_vuu5Yu7OM5y', 
    'https://www.youtube.com/embed/yJg-Y5byMMw?si=hznSQrNwpdG4wMoI',
    'https://www.youtube.com/embed/8VLXHyHRXjc?si=xTUKauNqvr59BDFk',

   ]);
  const [category, setCategory] = useState('all'); // State to track current category

  const handleIconClick = (index) => {
    setCurrentVideoIndex(index);
  };

  const handleCloseClick = () => {
    setCurrentVideoIndex(-1);
  };

  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  const images = [
    { src: image1, category: 'branding', text1: 'VIP Auto Tires & Service', text2: 'eCommerce / Magento' },
    { src: image2, category: 'digital-marketing', text1: 'VIP Auto Tires & Service', text2: 'Photography' },
    { src: image3, category: 'web', text1: 'VIP Auto Tires & Service', text2: 'eCommerce Magento' },
    { src: image4, category: 'photography', text1: 'VIP Auto Tires & Service', text2: 'eCommerce / Magento' },
    { src: image5, category: 'ecommerce', text1: 'VIP Auto Tires & Service', text2: 'Photography' },
    { src: image6, category: 'branding', text1: 'VIP Auto Tires & Service', text2: 'eCommerce / Magento' },
    { src: image7, category: 'web', text1: 'VIP Auto Tires & Service', text2: 'eCommerce / Magento' },
    { src: image8, category: 'photography', text1: 'VIP Auto Tires & Service', text2: 'eCommerce / Magento' },
    { src: image9, category: 'ecommerce', text1: 'VIP Auto Tires & Service', text2: 'eCommerce / Magento' },

  ];

  const filteredImages = category === 'all' ? images : images.filter(image => image.category === category);


  
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
            <h1 className="sm:text-5xl text-3xl font-bold text-white mt-28">Portfolio</h1>
            <div className="flex items-center mt-6">
              <h2 className="text-white mr-4">Home</h2>
              <RxSlash className="text-white" />
              <h2 className="text-gray-400 ml-4">Portfolio</h2>
            </div>
          </motion.div>
        </div>
      </div>

      <div className='py-28 mt-5 max-w-[1240px] mx-auto lg:ps-5 sm:ps-10 sm:pe-10 ps-5 pe-5 lg:pe-5'>
        <div className="flex justify-center mb-4 flex-wrap">

        <motion.button
      initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
    onClick={() => handleCategoryClick('all')} className={`mr-4 ${category === 'all' ? 'border border-[#00bfe7]' : ''} px-4 py-2 rounded-md text-white`}>All</motion.button>


         <motion.button
        initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
           onClick={() => handleCategoryClick('branding')} className={`mr-4 ${category === 'branding' ? 'border border-[#00bfe7]' : ''} px-4 py-2 rounded-md text-white`}>Branding</motion.button>


     <motion.button
      initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
           onClick={() => handleCategoryClick('digital-marketing')} className={`mr-4 ${category === 'digital-marketing' ? 'border border-[#00bfe7]' : ''} px-4 py-2 rounded-md text-white`}>Digital Marketing</motion.button>


          <motion.button
           initial={{x:100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
           onClick={() => handleCategoryClick('web')} className={`mr-4 ${category === 'web' ? 'border border-[#00bfe7]' : ''} px-4 py-2 rounded-md text-white`}>Web</motion.button>

           <motion.button
           initial={{x:100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
           onClick={() => handleCategoryClick('photography')} className={`mr-4 ${category === 'photography' ? 'border border-[#00bfe7]' : ''} px-4 py-2 rounded-md text-white`}>Photography</motion.button>

          <motion.button
      initial={{x:100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
     onClick={() => handleCategoryClick('ecommerce')} className={`mr-4 ${category === 'ecommerce' ? 'border border-[#00bfe7]' : ''} px-4 py-2 rounded-md text-white`}>E-commerce</motion.button>
          {/* Add more category buttons here */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div key={index} className="relative mt-14 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-200">
              <img src={image.src} className="w-full h-64 object-cover" alt="Video thumbnail" />
              <div className="absolute inset-0 flex justify-center items-center">
                <button
                  className="bg-white rounded-full p-2 bg-opacity-65"
                  onClick={() => handleIconClick(index)}
                >
                  <BsPlayCircleFill className="text-4xl rounded-full bg-white text-[#00bfe7]" />
                </button>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-4 text-center bg-black bg-opacity-50">
              <h1 className="text-white text-2xl font-semibold">{image.text1}</h1>
                <h2 className="text-gray-400">{image.text2}</h2>
              </div>   
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-20">
          <button className="text-white flex items-center mr-8">

          <FaArrowLeft className='sm:mr-3 text-gray-500' />
          <span className="hidden sm:inline">PREV</span>
          
          </button>
          <button className="text-white py-3 px-5 bg-[#29194b] mr-4">1</button>
          <button className="text-white py-3 px-5 bg-[#29194b] mr-4">2</button>
          <button className="text-white flex items-center ml-4">
          <span className="hidden sm:inline">NEXT</span>
           <FaArrowRight className='sm:ml-3 text-gray-500' />
          </button>
        </div>
      </div>

      
      {/* Video Player */}
      {currentVideoIndex !== -1 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <button
              className="absolute top-0 right-0 text-white hover:text-gray-300"
              onClick={handleCloseClick}
            >
              <FaTimes className="w-6 h-6 -mt-8" />
            </button>
            <iframe
              className="w-full h-full sm:w-[500px] sm:h-72"
              src={videoUrls[currentVideoIndex]}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

  <Footer />
  <ScrollButton />

    </>
  );
};

export default Portfolio;