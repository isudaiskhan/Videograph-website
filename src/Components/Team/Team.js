import React from 'react'
import bgimage from '../Assets/team-bg.jpg'
import { FaTwitter,FaFacebookF,FaLinkedinIn, FaInstagram } from "react-icons/fa";
import image1 from '../Assets/team-1.jpg'
import image2 from '../Assets/team-2.jpg'
import image3 from '../Assets/team-3.jpg'
import image4 from '../Assets/team-4.jpg'
import {motion} from 'framer-motion';


  

const Team = () => {
  return (
    <>

<div
        className="bg-no-repeat bg-cover bg-fixed mt-20 bg-center h-full py-28"
        style={{ backgroundImage: `url(${bgimage})` }}>


<div className='w-full'>
<div className='overflow-hidden'>
<motion.h2
              initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
 className='ps-16 text-white text-lg tracking-wider'>NICE TO MEET</motion.h2>
      <motion.h1
              initial={{x:100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
       className='ps-16 md:text-3xl mt-1 text-2xl text-white font-bold underline underline-offset-[20px] decoration-[#00bfe7]'>OUR TEAM</motion.h1>
      </div>
      <div className='w-full sm:px-4 px-8 mt-10 container mx-auto'>
      <div className='max-w-[1240px] mx-auto grid sm:grid-cols-2 md:grid-cols-4 md:gap-0 gap-5 overflow-hidden'>

      {/* Card 1 */}
      <motion.div
              initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
 className='w-full md:mt-44 relative group'>
  <div className='relative'>
    <img src={image1} className='w-full mx-auto' />
    <div className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
      <div className='text-center'>
       
         <h1 className="text-xl font-semibold text-white mb-3">AMANDA STONE</h1>
          <h2 className="text-lg font-semibold text-white mb-5">Videographer</h2>
      </div>
      <div className='flex space-x-5 justify-center'>
        <a href='#' className=''>
          <FaFacebookF className='w-4 h-4 text-white hover:text-[#00bfe7]' />
        </a>
        <a href='#' className=''>
          <FaTwitter className='w-4 h-4 hover:text-[#00bfe7] text-white' />
        </a>
        <a href='#' className=''>
          <FaLinkedinIn className='w-4 h-4 text-white hover:text-[#00bfe7]' />
        </a>
        <a href='#' className=''>
          <FaInstagram className='w-4 h-4 text-white hover:text-[#00bfe7]' />
        </a>
      </div>
    </div>
  </div>
</motion.div>





      {/* Card 2 */}
      <motion.div
              initial={{x:100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
           className='w-full md:mt-28 relative group'>
        <div className='relative'>
          <img src={image2} className='w-full mx-auto' />
          <div className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
      <div className='text-center'>
       
         <h1 className="text-xl font-semibold text-white mb-3">AMANDA STONE</h1>
          <h2 className="text-lg font-semibold text-white mb-5">Videographer</h2>
      </div>
      <div className='flex space-x-5 justify-center'>
        <a href='#' className=''>
          <FaFacebookF className='w-4 h-4 text-white hover:text-[#00bfe7]' />
        </a>
        <a href='#' className=''>
          <FaTwitter className='w-4 h-4 hover:text-[#00bfe7] text-white' />
        </a>
        <a href='#' className=''>
          <FaLinkedinIn className='w-4 h-4 text-white hover:text-[#00bfe7]' />
        </a>
        <a href='#' className=''>
          <FaInstagram className='w-4 h-4 text-white hover:text-[#00bfe7]' />
        </a>
      </div>
          </div>
        </div>
      </motion.div>






      {/* Card 3 */}
      <motion.div
              initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
         className='w-full md:mt-14 relative group'>
        <div className='relative'>
          <img src={image3} className='w-full mx-auto' />
          <div className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
      <div className='text-center'>
       
         <h1 className="text-xl font-semibold text-white mb-3">AMANDA STONE</h1>
          <h2 className="text-lg font-semibold text-white mb-5">Videographer</h2>
      </div>
      <div className='flex space-x-5 justify-center'>
        <a href='#' className=''>
          <FaFacebookF className='w-4 h-4 text-white hover:text-[#00bfe7]' />
        </a>
        <a href='#' className=''>
          <FaTwitter className='w-4 h-4 hover:text-[#00bfe7] text-white' />
        </a>
        <a href='#' className=''>
          <FaLinkedinIn className='w-4 h-4 text-white hover:text-[#00bfe7]' />
        </a>
        <a href='#' className=''>
          <FaInstagram className='w-4 h-4 text-white hover:text-[#00bfe7]' />
        </a>
      </div>
          </div>
        </div>

      </motion.div>







      {/* Card 4 */}
      <motion.div
              initial={{x:100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
       className='w-full relative group'>
        <div className='relative'>
          <img src={image4} className='w-full mx-auto' />
          <div className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
      <div className='text-center'>
       
         <h1 className="text-xl font-semibold text-white mb-3">AMANDA STONE</h1>
          <h2 className="text-lg font-semibold text-white mb-5">Videographer</h2>
      </div>
      <div className='flex space-x-5 justify-center'>
        <a href='#' className=''>
          <FaFacebookF className='w-4 h-4 text-white hover:text-[#00bfe7]' />
        </a>
        <a href='#' className=''>
          <FaTwitter className='w-4 h-4 hover:text-[#00bfe7] text-white' />
        </a>
        <a href='#' className=''>
          <FaLinkedinIn className='w-4 h-4 text-white hover:text-[#00bfe7]' />
        </a>
        <a href='#' className=''>
          <FaInstagram className='w-4 h-4 text-white hover:text-[#00bfe7]' />
        </a>
      </div>
          </div>
        </div>


        <div className='flex items-center mt-32 justify-end'>
      <button className="border-2 border-[#00bfe7] hover:bg-[#00bfe7] bg-transparent text-white px-10 py-3 text-lg focus:outline-none">
       MEET OUR TEAM
    </button>
      </div>
      </motion.div>

        </div>
       </div>
      </div>



      </div>
      


    </>
  )
}

export default Team