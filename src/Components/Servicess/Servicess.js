import React from 'react';
import image1 from '../Assets/si-1.png';
import image2 from '../Assets/si-2.png';
import image3 from '../Assets/si-3.png';
import image4 from '../Assets/si-4.png';
import {motion} from 'framer-motion';



const Servicess = () => {
  return (
    <>
    <div className='w-full py-10 sm:py-20 md:py-28'> 
      <div className='max-w-[1240px] mx-auto flex flex-col lg:flex-row-reverse'>

        {/* 1st Section */}
        <motion.div
              initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
         className='lg:w-1/3 w-full mx-auto my-3 max-w-3xl pe-8 lg:ps-8 ps-4 mt-5 lg:order-2 lg:text-left'>
          <div className='flex items-center'>
            <h1 className='text-white text-xl tracking-widest'>OUR SERVICES</h1>
          </div>
          <div>
            <h1 className='text-white text-4xl font-semibold mt-5'>WHAT WE DO ?</h1>
          </div>

          <div className='flex items-center mt-10'>
            <p className='text-gray-400 text-justify'>If you hire a videographer of our team you will get a video professional to make a custom video for your business and, once the project is over.</p>
          </div>

          <div className='flex items-center mt-10'>
            <button className="border-2 border-[#00bfe7] hover:bg-[#00bfe7] bg-transparent text-white px-12 py-3 text-lg focus:outline-none">
              VIEW ALL SERVICES
            </button>
          </div>
        </motion.div>

        {/* 2nd Boxes  Section */}
        <div className='lg:w-2/3 w-full max-w-3xl mx-auto space-y-5 mb-4 md:mb-0 overflow-hidden'>
        <motion.div
              initial={{x:100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}

           className="grid grid-cols-1 sm:grid-cols-2 lg:gap-5 gap-8">

            {/* Box 1 */}
            <div className="p-4 rounded-lg space-y-4">
              <div className="text-3xl text-gray-600 relative">
                <img src={image1} className='border-2 p-4 border-[#00bfe7] transition duration-500 transform hover:rotate-45' alt="Service 1" />
              </div>
              <h1 className="text-2xl text-white font-semibold mt-6">Motion graphics</h1>
              <p className='mt-2 text-gray-400 '>Whether you're halfway through the editing process, or you haven't even started, our post production services can put the finishing .</p>
            </div>


            {/* Box 2 */}
            <div className="p-4 rounded-lg space-y-4">          
              <div className="text-3xl text-gray-600 relative">
                <img src={image2} className='border-2 p-4 border-[#00bfe7] transition duration-500 transform hover:rotate-45' alt="Service 2" />
              </div>
              <h1 className="text-2xl text-white font-semibold mt-6">Scriptwriting and editing</h1>
              <p className='mt-2 text-gray-400'>Whether you're halfway through the editing process, or you haven't even started, our post production services can put the finishing .</p>
            </div>


            {/* Box 3 */}
            <div className="p-4 rounded-lg space-y-4">     
              <div className="text-3xl text-gray-600 relative">
                <img src={image3} className='border-2 p-4 border-[#00bfe7] transition duration-500 transform hover:rotate-45' alt="Service 3" />
              </div>
              <h1 className="text-2xl text-white font-semibold mt-6">Video distribution</h1>
              <p className='mt-2 text-gray-400'>Whether you're halfway through the editing process, or you haven't even started, our post production services can put the finishing .</p>
            </div>


            {/* Box 4 */}
            <div className="p-4 rounded-lg space-y-4">    
              <div className="text-3xl text-gray-600 relative">
                <img src={image4} className='border-2 p-4 border-[#00bfe7] transition duration-500 transform hover:rotate-45' alt="Service 4" />
              </div>
              <h1 className="text-2xl text-white font-semibold mt-6">Video hosting</h1>
              <p className='mt-2 text-gray-400'>Whether you're halfway through the editing process, or you haven't even started, our post production services can put the finishing .</p>
            </div>
          </motion.div>
        </div>    
      </div>
    </div>
    </>
  );
};

export default Servicess;