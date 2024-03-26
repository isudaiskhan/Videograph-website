import React,{useRef} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { RxSlash } from "react-icons/rx";
import bgimage from '../../Components/Assets/Navbar-bg.jpg'
import image1 from '../../Components/Assets/si-1.png';
import image2 from '../../Components/Assets/si-2.png';
import image3 from '../../Components/Assets/si-3.png';
import image4 from '../../Components/Assets/si-4.png';
import bgimage2 from '../../Components/Assets/services-bg.jpg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image5 from '../../Components/Assets/logo-1.png'
import image6 from '../../Components/Assets/logo-2.png'
import image7 from '../../Components/Assets/logo-3.png'
import image8 from '../../Components/Assets/logo-4.png'
import image9 from '../../Components/Assets/logo-5.png'
import image10 from '../../Components/Assets/logo-6.png'
import Footer from '../../Components/Footer/Footer';
import ScrollButton from '../../Components/ScrollButton/ScrollButton';
import {motion} from 'framer-motion';




const Servicess = () => {
  const sliderRef = useRef();

  const images = [image5, image6, image7, image8 ,image9,image10];

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds
    arrows: false, // Hide default arrows
    pauseOnHover: false, // Pause autoplay on hover

    responsive: [
      {
        breakpoint: 1024,
        settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
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
            <h1 className="sm:text-5xl text-3xl font-bold text-white mt-28">Our Services</h1>
            <div className="flex items-center mt-6">
              <h2 className="text-white mr-4">Home</h2>
              <RxSlash className="text-white" />
              <h2 className="text-gray-400 ml-4">Services</h2>
            </div>
          </motion.div>
        </div>
      </div>


      <div className='w-full py-10 sm:py-20 md:py-28'> 
      <div className='max-w-[1240px] mx-auto flex flex-col lg:flex-row-reverse'>      

        {/* 2nd Boxes  Section */}
        <div className='w-full mx-auto space-y-5 mb-4 md:mb-0'>
          <div className="grid grid-cols-1 overflow-hidden lg:grid-cols-3 sm:grid-cols-2 sm:ps-8 sm:pe-8 ps-4 pe-4 lg:gap-5 gap-8">

            {/* Box 1 */}
            <motion.div
              initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
             className="p-4 rounded-lg space-y-4">          
              <div className="text-3xl text-gray-600 relative">
                <img src={image2} className='border-2 p-4 border-[#00bfe7] transition duration-500 transform hover:rotate-45' alt="Service 2" />
              </div>
              <h1 className="text-2xl text-white font-semibold mt-6">Scriptwriting and editing</h1>
              <p className='mt-2 text-gray-400'>Whether you're halfway through the editing process, or you haven't even started, our post production services can put the finishing .</p>
            </motion.div>


            {/* Box 2 */}
            <motion.div
              initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
             className="p-4 rounded-lg space-y-4">
              <div className="text-3xl text-gray-600 relative">
                <img src={image1} className='border-2 p-4 border-[#00bfe7] transition duration-500 transform hover:rotate-45' alt="Service 1" />
              </div>
              <h1 className="text-2xl text-white font-semibold mt-6">Motion graphics</h1>
              <p className='mt-2 text-gray-400 '>Whether you're halfway through the editing process, or you haven't even started, our post production services can put the finishing .</p>
            </motion.div>



          {/* Box 3 */}
          <motion.div
              initial={{x:100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
           className="p-4 rounded-lg space-y-4">          
              <div className="text-3xl text-gray-600 relative">
                <img src={image2} className='border-2 p-4 border-[#00bfe7] transition duration-500 transform hover:rotate-45' alt="Service 2" />
              </div>
              <h1 className="text-2xl text-white font-semibold mt-6">Scriptwriting and editing</h1>
              <p className='mt-2 text-gray-400'>Whether you're halfway through the editing process, or you haven't even started, our post production services can put the finishing .</p>
            </motion.div>


             {/* Box 4 */}
             <motion.div
              initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
              className="p-4 rounded-lg space-y-4">     
              <div className="text-3xl text-gray-600 relative">
                <img src={image3} className='border-2 p-4 border-[#00bfe7] transition duration-500 transform hover:rotate-45' alt="Service 3" />
              </div>
              <h1 className="text-2xl text-white font-semibold mt-6">Video distribution</h1>
              <p className='mt-2 text-gray-400'>Whether you're halfway through the editing process, or you haven't even started, our post production services can put the finishing .</p>
            </motion.div>




             {/* Box 5 */}
             <motion.div
              initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
              className="p-4 rounded-lg space-y-4">    
              <div className="text-3xl text-gray-600 relative">
                <img src={image4} className='border-2 p-4 border-[#00bfe7] transition duration-500 transform hover:rotate-45' alt="Service 4" />
              </div>
              <h1 className="text-2xl text-white font-semibold mt-6">Video hosting</h1>
              <p className='mt-2 text-gray-400'>Whether you're halfway through the editing process, or you haven't even started, our post production services can put the finishing .</p>
            </motion.div>



            {/* Box 6 */}
            <motion.div
              initial={{x:100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
             className="p-4 rounded-lg space-y-4">    
              <div className="text-3xl text-gray-600 relative">
                <img src={image4} className='border-2 p-4 border-[#00bfe7] transition duration-500 transform hover:rotate-45' alt="Service 4" />
              </div>
              <h1 className="text-2xl text-white font-semibold mt-6">Video hosting</h1>
              <p className='mt-2 text-gray-400'>Whether you're halfway through the editing process, or you haven't even started, our post production services can put the finishing .</p>
            </motion.div>
          </div>
        </div>     
      </div>
    </div>


   <div className='lg:ps-24 lg:pe-24 sm:ps-10 sm:pe-10 ps-3 pe-3'>
    <div className="h-full py-20 bg-no-repeat max-w-[1240px] mx-auto bg-cover bg-center" style={{ backgroundImage: `url(${bgimage2})` }}>

    <div className='flex flex-col justify-center h-full overflow-hidden'>
    <motion.div
              initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
       className='ps-3 pe-4'>
        <h1 className='md:text-5xl text-3xl text-white font-semibold text-center' style={{lineHeight:"4rem"}}>CREATE AWESOME VIDEOS WITH WIDEO'S POWERFUL FEATURES</h1>
        <p className='text-gray-300 text-center font-semibold mt-7'>WIDEO COMBINES ALL THE FEATURES YOU NEED TO EASILY CREATE PROFESSIONAL VIDEOS AND PRESENTATIONS</p>
      </motion.div>
      <motion.div
              initial={{x:100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
       className='mt-14 mx-auto'>
        <button className="border-[#00bfe7] border-2 hover:bg-[#00bfe7] bg-transparent text-white px-12 py-3 text-lg focus:outline-none">
          START YOUR STORIES
        </button>
      </motion.div>
     </div>
   
    </div> 
    </div>
   



   <div className='sm:ps-8 sm:pe-8 ps-3 pe-3'>
     <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index}>  
          <div className="flex flex-wrap lg:-mx-6 sm:-mx-14 py-28 lg:ps-0 lg:pe-0 sm:ps-10 sm:pe-10">
          <div className=" mx-auto w-11/12 sm:px-4 mb-4">
          <div className="overflow-hidden shadow-md flex mt-6">  

  </div>
  <div className="relative flex flex-wrap mt-6">
    <img className="object-cover mb-3 mx-auto sm:mb-0" src={image} alt={`Image ${index + 1}`} />
   
  </div>
  </div>
</div>
</div>
        ))}
      </Slider>   
    </div>
    
    
  <Footer />
  <ScrollButton />

    </>
  )
}

export default Servicess