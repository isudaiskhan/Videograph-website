import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { RxSlash } from "react-icons/rx";
import bgimage from '../../Components/Assets/Navbar-bg.jpg';
import { FiMail, FiMessageSquare, FiUser,FiPhoneCall } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import { LuSendHorizonal } from "react-icons/lu";
import Footer from '../../Components/Footer/Footer';
import { FaRegEnvelopeOpen,FaMapLocationDot  } from "react-icons/fa6";
import ScrollButton from '../../Components/ScrollButton/ScrollButton';
import {motion} from 'framer-motion';





const Contact = () => {
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
            <h1 className="sm:text-5xl text-3xl font-bold text-white mt-28">Contact us</h1>
            <div className="flex items-center mt-6">
              <h2 className="text-white mr-4">Home</h2>
              <RxSlash className="text-white" />
              <h2 className="text-gray-400 ml-4">Contact</h2>
            </div>
          </motion.div>
        </div>
      </div>


       <div className='py-6 mt-24 overflow-hidden'>
     
          {/* Mobile number And Icons */}
          <div class="lg:flex mx-auto max-w-[1240px] ps-6 pe-6 lg:space-y-0 space-y-12">
          <motion.div
              initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
          class="md:w-1/2 lg:w-2/6">
             <div class="flex items-center">
                 <div class="mr-4">
                 <FiPhoneCall className='text-white text-4xl' />       
                 </div>
                 <div>
                     <a href="#" class="text-xl text-white font-semibold hover:text-[#00bfe7]">Hotline</a>
                     <p class="text-gray-400">1-677-124-44227 1-688-356-66889</p>
                 </div>
             </div>
         </motion.div>
     
     
         <motion.div
              initial={{x:100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
          class="md:w-1/2 lg:w-2/6">
             <div class="flex items-center lg:justify-center">
                 <div class="mr-4">
                 <FaRegEnvelopeOpen className='text-white text-4xl' />
                     
                 </div>
                 <div>
                     <a href="#" class="text-xl text-white font-semibold hover:text-[#00bfe7]">Email</a>
                     <p class="text-gray-400">Support@gmail.com</p>
                 </div>
             </div>
         </motion.div>
     
     
     
         <motion.div
              initial={{x:100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
          class="md:w-1/2 lg:w-2/6">
             <div class="flex items-center">
                 <div class="mr-4 lg:mx-auto">
                 <FaMapLocationDot className='text-white text-4xl' />
                     
                 </div>
                 <div>
                     <a href="#" class="text-xl text-white font-semibold hover:text-[#00bfe7]">Address</a>
                     <p class="text-gray-400">Los Angeles Gournadi, 1230 Bariasl</p>
                 </div>
             </div>
         </motion.div>
     </div>
     
     </div>
     



      <div className="max-w-[1240px] mx-auto px-4 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <div>
          <motion.div
              initial={{x:-100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
             className="relative h-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52431.851007321144!2d72.32743849563327!3d34.78100972810476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dc22cdc1c33b0d%3A0x24e073e14d27a662!2sMingora%2C%20Swat%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1710674870516!5m2!1sen!2s "
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute top-0 left-0 w-full mt-4"
              ></iframe>
            </motion.div>
          </div>


           {/* Form Section */}
            <div className='overflow-hidden p-1'>
            <motion.form
              initial={{x:100,opacity:0}}
     whileInView={{x: 0, opacity: 1}}
     transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
     duration:1}}
            className="space-y-5 lg:mt-0 mt-14">
              <h1 className="md:text-4xl text-3xl font-semibold text-white">Get in Touch</h1>
              {/* Form inputs */}
              <div className="space-y-5">
                <div className='relative'>
                  <input type="text" id="input1" name="user_name" placeholder='Name' required className="w-full border border-gray-500 px-4 py-3 bg-transparent text-white" />
                  <FiUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <div className='relative'>
                  <input type="email" id="input2" name="user_Email" placeholder='Email' required className="w-full border border-gray-500 px-4 py-3 bg-transparent text-white" />
                  <FiMail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <div className='relative'>
                  <input type="text" id="input2" name="user_Website" placeholder='Website' required className="w-full border border-gray-500 px-4 py-3 bg-transparent text-white" />
                  <CgWebsite className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <div className='relative'>
                  <textarea id="textarea" placeholder='Message' name="message" required rows="5" className="p-2 px-4 py-3 w-full border border-gray-500 bg-transparent text-white" />
                  <FiMessageSquare className="absolute right-3 bottom-3 text-gray-400" />
                </div>
              </div>

              <div className="flex justify-center">
                <button type="submit" className="font-medium flex items-center justify-center px-8 py-3 w-full text-white bg-[#00bfe7] hover:bg-[#2094ac]">
                  SEND MESSAGE
                  <LuSendHorizonal className='ml-3' />
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>

      <Footer />
      <ScrollButton />
    </>
  );
}

export default Contact;