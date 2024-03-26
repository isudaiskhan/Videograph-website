import React,{useState} from 'react'
import image1 from '../Assets/work-1.jpg';
import image2 from '../Assets/work-2.jpg';
import image3 from '../Assets/work-3.jpg';
import image4 from '../Assets/work-4.jpg';
import image5 from '../Assets/work-5.jpg';
import image6 from '../Assets/work-6.jpg';
import image7 from '../Assets/work-7.jpg';
import { BsPlayCircleFill } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import {motion} from 'framer-motion';



const Work = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(-1);
    const [videoUrls] = useState([
        'https://www.youtube.com/embed/yJg-Y5byMMw?si=hznSQrNwpdG4wMoI',
        'https://www.youtube.com/embed/8VLXHyHRXjc?si=xTUKauNqvr59BDFk',
        'https://www.youtube.com/embed/tt2k8PGm-TI?si=tb7C_vuu5Yu7OM5y',
        'https://www.youtube.com/embed/tt2k8PGm-TI?si=tb7C_vuu5Yu7OM5y',
        'https://www.youtube.com/embed/tt2k8PGm-TI?si=tb7C_vuu5Yu7OM5y',
        'https://www.youtube.com/embed/tt2k8PGm-TI?si=tb7C_vuu5Yu7OM5y',
        'https://www.youtube.com/embed/tt2k8PGm-TI?si=tb7C_vuu5Yu7OM5y',
    ]);

    const handleIconClick = (index) => {
        setCurrentVideoIndex(index);
    };

    const handleCloseClick = () => {
        setCurrentVideoIndex(-1);
    };

  return (
    <>

<div className='mt-5'>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 overflow-hidden">
   {/* First Box */}
   <div className="relative ">
     <motion.img
     initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
      src={image1} className="w-full h-64 object-cover" alt="Video thumbnail" />
     <div className="absolute inset-0 flex justify-center items-center">
       <motion.button
       initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
         className="bg-white rounded-full p-2 bg-opacity-65"
         onClick={() => handleIconClick(0)}
       >
         <BsPlayCircleFill className="text-4xl rounded-full bg-white text-[#00bfe7]" />
       </motion.button>
     </div>
   </div>

   {/* Second Box */}
   <div className="relative">
   <motion.img
     initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
      src={image2} className="w-full h-64 object-cover" alt="Video thumbnail" />
     <div className="absolute inset-0 flex justify-center items-center">
     <motion.button
       initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
         className="bg-white rounded-full p-2 bg-opacity-65"
         onClick={() => handleIconClick(1)}
       >
         <BsPlayCircleFill className="text-4xl rounded-full bg-white text-[#00bfe7]" />
         </motion.button>
     </div>
   </div>

   {/* Third Box */}
   <div className="relative">
   <motion.img
     initial={{x:100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
      src={image3} className="w-full h-64 object-cover" alt="Video thumbnail" />
     <div className="absolute inset-0 flex justify-center items-center">
     <motion.button
      initial={{x:100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
     
              className="bg-white rounded-full p-2 bg-opacity-65"
         onClick={() => handleIconClick(2)}
       >
         <BsPlayCircleFill className="text-4xl rounded-full bg-white text-[#00bfe7]" />
         </motion.button>
     </div>
   </div>

   
   {/* Fourth Box */}
   <div className="relative col-span-1 row-span-2">
   <motion.img
     initial={{x:100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
     src={image4} className="w-full h-full object-cover" alt="Video thumbnail" />
     <div className="absolute inset-0 flex justify-center items-center">
       <motion.button
        initial={{x:100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
         className="bg-white rounded-full p-2 bg-opacity-65"
         onClick={() => handleIconClick(3)}
       >
         <BsPlayCircleFill className="text-4xl rounded-full bg-white text-[#00bfe7]" />
         </motion.button>
     </div>
   </div>


   {/* Fifth Box */}
   <div className="relative">
   <motion.img
     initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
      src={image5} className="w-full h-64 object-cover" alt="Video thumbnail" />
     <div className="absolute inset-0 flex justify-center items-center">
       <motion.button
        initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
         className="bg-white rounded-full p-2 bg-opacity-65"
         onClick={() => handleIconClick(4)}
       >
         <BsPlayCircleFill className="text-4xl rounded-full bg-white text-[#00bfe7]" />
         </motion.button>
     </div>
   </div>


   {/* Sixth Box */}
   <div className="relative">
   <motion.img
     initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
      src={image6} className="w-full h-64 object-cover" alt="Video thumbnail" />
     <div className="absolute inset-0 flex justify-center items-center">
       <motion.button
        initial={{x:100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
         className="bg-white rounded-full p-2 bg-opacity-65"
         onClick={() => handleIconClick(5)}
       >
         <BsPlayCircleFill className="text-4xl rounded-full bg-white text-[#00bfe7]" />
         </motion.button>
     </div>
   </div>


   {/* Seventh Box */}
   <div className="relative">
   <motion.img
     initial={{x:100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
      src={image7} className="w-full h-64 object-cover" alt="Video thumbnail" />
     <div className="absolute inset-0 flex justify-center items-center">
       <motion.button
        initial={{x:100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
         className="bg-white rounded-full p-2 bg-opacity-65"
         onClick={() => handleIconClick(6)}
       >
         <BsPlayCircleFill className="text-4xl rounded-full bg-white text-[#00bfe7]" />
         </motion.button>
     </div>
   </div>


   {/* Video Player */}
   {currentVideoIndex !== -1 && (
     <div className="relative">
       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
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
     </div>
   )}
 </div>
</div>


</>

)
}
export default Work