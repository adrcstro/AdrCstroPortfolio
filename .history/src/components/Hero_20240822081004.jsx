import React from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaHandsClapping } from "react-icons/fa6";
import { Link, animateScroll as scroll } from 'react-scroll';
import {motion} from 'framer-motion';

//variants
import {fadeIn} from '../variants'




function Hero({ isDarkMode }) {
  return (
    <div name="Home" className={`hero min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <motion.div
           variants={fadeIn("up",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
      
      
      
       className="hero-content text-center">
        <div className="max-w-3xl">
          <div className='mt-3'>
            <h3 className={`font-semibold text-md inline-flex items-center px-4 py-1 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-slate-200'}`}>
              Hi 
              <span className='ml-2'>
                <FaHandsClapping className='w-5 h-5 mr-2'/>
              </span> 
              I'm Andre Castro
            </h3>
          </div>
          <h1  className="text-5xl lg:text-6xl md:text:3xl font-bold mt-4">Full Stack Web Developer based in Philippines</h1>
          <div className="flex flex-wrap justify-between py-6 px-4 md:px-8 lg:px-16">
            
            <motion.div
          variants={fadeIn("left",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
             className="flex items-center space-x-2 shrink-0 mt-2">
              <p className={`font-semibold rounded-lg py-2 px-2 ${isDarkMode ? 'bg-gray-700' : 'bg-slate-200'}`}>+2.5</p>
              <p className="text-sm font-semibold text-start">Years of<br/>Experience</p>
            </motion.div>

            <motion.div
           variants={fadeIn("left",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
             className="flex items-center space-x-2 shrink-0 mt-2">
              <p className={`font-semibold rounded-lg py-2 px-2 ${isDarkMode ? 'bg-gray-700' : 'bg-slate-200'}`}>+10</p>
              <p className="text-sm font-semibold text-start">Accomplished<br/>Project</p>
            </motion.div>

            <motion.div
            variants={fadeIn("right",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
             className="flex items-center space-x-2 shrink-0 mt-2">
              <p className={`font-semibold rounded-lg py-2 px-2 ${isDarkMode ? 'bg-gray-700' : 'bg-slate-200'}`}>+50k</p>
              <p className="text-sm font-semibold text-start">Lines of Code<br/>Written</p>
            </motion.div>
            <motion.div
          variants={fadeIn("right",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
             className="flex items-center space-x-2 shrink-0 mt-2">
              <p className={`font-semibold rounded-lg py-2 px-2 ${isDarkMode ? 'bg-gray-700' : 'bg-slate-200'}`}>+2k</p>
              <p className="text-sm font-semibold text-start">Cups of Coffee<br/>Consumed</p>
            </motion.div>
          </div>
          <div className='justify-between'>  
            <button className="btn btn-primary mr-4 shadow-lg rounded-full px-8">
              <IoDocumentTextOutline className='w-5 h-5'/>Resume
            </button>

            <Link to="Contact" spy={true} smooth={true} offset={-70}  duration={500}>
            <button className={`btn btn-transparent shadow-lg border rounded-full px-8 ${isDarkMode ? 'border-white' : 'border-gray-900'}`}>
              <AiOutlineMessage className='w-5 h-5' />Contact
            </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
