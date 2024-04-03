import React from 'react'
import bgimage from '../Assets/callto-bg.jpg'
import {motion} from 'framer-motion';


const CallToAction = () => {
  return (
    <>


<div className="relative mt-10 overflow-hidden">
  <div
    className="bg-no-repeat bg-cover bg-center h-full py-28 "
    style={{ backgroundImage: `url(${bgimage})` }}
  >
    <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
      <motion.div
              initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
      className='ps-3 pe-4'>
        <h1 className='md:text-5xl text-3xl text-white font-semibold lg:pe-96 md:pe-64 sm:pe-44' style={{lineHeight:"4rem"}}>Fresh Ideas, Fresh Moments Giving Wings to your Stories.</h1>
        <p className='text-gray-300 font-semibold sm:text-lg mt-7'>INC5000, BEST PLACES TO WORK 2019</p>
      </motion.div>
     <div className='mt-14 ps-4 pe-4'>
        <motion.button
              initial={{x:100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}} className="border-[#00bfe7] border-2 hover:bg-[#00bfe7] bg-transparent text-white px-12 py-3 text-lg focus:outline-none">
          START YOUR STORIES
        </motion.button>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default CallToAction