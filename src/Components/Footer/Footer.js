import React from 'react'
import {FaFacebookF, FaInstagram, FaLongArrowAltRight, FaYoutube} from 'react-icons/fa';
import {AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai';
import { FiSend } from "react-icons/fi";
import logo from '../Assets/logo.png'
import {motion} from 'framer-motion';



const Footer = () => {
  return (
    <>

     <div className='py-10 bg-[#0a0119] md:px-0 px-5 overflow-hidden'>
  
<div class="md:flex lg:flex mx-auto max-w-[1240px] border-b border-b-gray-600 py-5 px-5">
<motion.div
              initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
     class="md:w-1/2 flex items-center">
        <div class="mr-4">
            <img src={logo} />
        </div>
    </motion.div>

    <div class="md:w-1/2 flex items-center justify-center md:justify-end">
    <motion.div
              initial={{x:100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
         class='md:flex items-center py-6 text-center'>
            <div class='flex justify-end text-white space-x-3 flex-wrap'>
                <a href='#' class='px-2 py-2 group rounded-full border-2 border-white hover:bg-[#00bfe7]'>
                    <FaFacebookF class='group-hover:text-white text-white text-xl' />
                </a>
                <a href='#' class='px-2 py-2 group rounded-full border-2 border-white hover:bg-[#00bfe7]'>
                    <AiOutlineTwitter class='group-hover:text-white text-white text-xl' />
                </a>

                <a href='#' class='px-2 py-2 group rounded-full border-2 border-white hover:bg-[#00bfe7]'>
                    <FaInstagram class='group-hover:text-white text-white text-xl' />
                </a>

                <a href='#' class='px-2 py-2 group rounded-full border-2 border-white hover:bg-[#00bfe7]'>
                    <FaYoutube class='group-hover:text-white text-white text-xl' />
                </a>
                <a href='#' class='px-2 py-2 group rounded-full border-2 border-white] hover:bg-[#00bfe7]'>
                    <AiFillLinkedin class='group-hover:text-white text-white text-xl' />
                </a>
            </div>
        </motion.div>
    </div>
</div>



    <div class='max-w-[1240px] mx-auto mt-7 px-3 text-gray-300'>
  <div class='flex flex-wrap justify-center gap-6'>
  <motion.div
              initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}} class='w-full md:w-1/3 md:pe-5'>
      <h6 class='text-[#FFFFFF] mt-6 text-xl font-semibold'>ABOUT US!</h6>
      <p class='mt-6 leading-9 text-gray-300/75'>Formed in 2006 by Matt Hobbs and Cael Jones, Videoprah is an award-winning, full-service production company specializing.</p>

      <button className="mt-5 text-white flex items-center justify-center ">Read more
        <FaLongArrowAltRight className="text-xl ml-3 mt-1 text-gray-300/75" />
        </button>
    </motion.div>

    <div class='w-full md:w-1/6'>
    <motion.div
              initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
       class='space-y-3 mt-6'>
        <h6 class='text-[#FFFFFF] text-xl font-medium'>Who we are</h6>
        <ul>
          <a href='#'>
            <li class='py-2 text-gray-300/75 hover:text-[#00bfe7]'>Team</li>
          </a>
          <a href='#'>
            <li class='py-2 text-gray-300/75 hover:text-[#00bfe7]'>Careers</li>
          </a>
          <a href='#'>
            <li class='py-2 text-gray-300/75 hover:text-[#00bfe7]'>Contact Us</li>
          </a>
          <a href='#'>
            <li class='py-2 text-gray-300/75 hover:text-[#00bfe7]'>Location</li>
          </a>
        </ul>
      </motion.div>
    </div>

    <div class='w-full md:w-1/6'>
    <motion.div
              initial={{x:100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
       class='space-y-3 mt-6'>
        <h6 class='text-[#FFFFFF] text-xl font-medium'>Our work</h6>
        <ul>
          <a href='#'>
            <li class='py-2 text-gray-300/75 hover:text-[#00bfe7]'>Feature</li>
          </a>
          <a href='#'>
            <li class='py-2 text-gray-300/75 hover:text-[#00bfe7]'>Latest</li>
          </a>
          <a href='#'>
            <li class='py-2 text-gray-300/75 hover:text-[#00bfe7]'>Browse Archive</li>
          </a>
          <a href='#'>
            <li class='py-2 text-gray-300/75 hover:text-[#00bfe7]'>Video For Web</li>
          </a>
        </ul>
      </motion.div>
    </div>

    <motion.div
              initial={{x:100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
     class='w-full md:w-1/4'>
      <div class='space-y-3 mt-6'>
        <h6 class='text-[#FFFFFF] text-xl font-medium'>Newsletter</h6>
        <p className='leading-7 text-gray-300/75'>Videoprah is an award-winning, full-service production company specializing.</p>
      </div>
      
          <div className="flex mt-7 items-start">
            <input className="border border-gray-600 bg-transparent text-white focus:outline-none placeholder-white w-full px-3 py-2 mb-2" placeholder="Email" />
            <a href='#'>
            <div className="bg-[#00bfe7] px-3 py-3">
              <FiSend className="text-white text-lg" />
            </div>
            </a>
        </div>
    </motion.div>
  </div> 
</div>




        <div class='tracking-wider text-center mx-auto max-w-[1240px] mt-20'>
            <h1 class='text-gray-300/75'>© Copyright © 2024 All rights reserved | Designed By Sudais Khan .</h1>
        </div>


   </div>

    </>
  )
}

export default Footer