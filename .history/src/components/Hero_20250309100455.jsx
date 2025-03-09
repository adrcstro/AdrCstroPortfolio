import React from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaHands } from "react-icons/fa"; // Updated import
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodeDotJs, SiPhp, SiPython, SiMysql } from 'react-icons/si';
import resumePDF from '../assets/CastroAndreThomasLiquidoCV.pdf'; // Adjust the path accordingly

//variants
import { fadeIn } from '../variants';

const handleClick = () => {
  window.open(resumePDF, '_blank');
};

function Hero({ isDarkMode }) {
  return (
    <div name="Home" className={`hero min-h-screen relative ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="hero-content text-center relative z-10"
      >
        <div className="max-w-3xl">
          <div className='mt-3'>
            <h3 className={`font-semibold text-md inline-flex items-center px-4 py-1 rounded-full font-montserrat ${isDarkMode ? 'bg-gray-700' : 'bg-slate-200'}`}>
              Hi
              <span className='ml-2'>
                <FaHands className='w-5 h-5 mr-2' /> {/* Updated icon */}
              </span>
              I'm Andre Castro
            </h3>
          </div>
          <h1 className="text-5xl lg:text-6xl md:text:3xl font-bold mt-4 font-montserrat">Full Stack Web Developer based in Philippines</h1>
          <div className="flex flex-wrap justify-between py-6 px-4 md:px-8 lg:px-16">
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex items-center space-x-2 shrink-0 mt-2"
            >
              <p className={`font-semibold rounded-lg py-2 px-2 font-montserrat ${isDarkMode ? 'bg-gray-700' : 'bg-slate-200'}`}>+2.5</p>
              <p className="text-sm font-semibold text-start font-montserrat">Years of<br />Experience</p>
            </motion.div>

            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex items-center space-x-2 shrink-0 mt-2"
            >
              <p className={`font-semibold rounded-lg py-2 px-2 font-montserrat ${isDarkMode ? 'bg-gray-700' : 'bg-slate-200'}`}>+10</p>
              <p className="text-sm font-semibold text-start font-montserrat">Accomplished<br />Project</p>
            </motion.div>

            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex items-center space-x-2 shrink-0 mt-2"
            >
              <p className={`font-semibold rounded-lg py-2 px-2 font-montserrat ${isDarkMode ? 'bg-gray-700' : 'bg-slate-200'}`}>+50k</p>
              <p className="text-sm font-semibold text-start font-montserrat">Lines of Code<br />Written</p>
            </motion.div>

            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex items-center space-x-2 shrink-0 mt-2"
            >
              <p className={`font-semibold rounded-lg py-2 px-2 font-montserrat ${isDarkMode ? 'bg-gray-700' : 'bg-slate-200'}`}>+2k</p>
              <p className="text-sm font-semibold text-start font-montserrat">Cups of Coffee<br />Consumed</p>
            </motion.div>
          </div>
          <div className='justify-between'>
            <button
              className="btn btn-primary text-white mr-4 font-bold shadow-lg rounded-full px-8 font-montserrat"
              onClick={handleClick}
            >
              <IoDocumentTextOutline className='w-5 h-5 ' /> Resume
            </button>
            <Link to="Contact" spy={true} smooth={true} offset={-70} duration={500}>
              <button
                className={`btn btn-transparent shadow-lg font-bold border rounded-full px-8 font-montserrat ${isDarkMode ? 'border-white' : 'border-gray-900'}`}
              >
                <AiOutlineMessage className='w-5 h-5' />Contact
              </button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Background Programming Language Logos */}
      <div className="absolute inset-0 flex justify-center items-center opacity-10">
        <div className="grid grid-cols-3 gap-4">
          <SiHtml5 className="w-20 h-20 text-red-500" />
          <SiCss3 className="w-20 h-20 text-blue-500" />
          <SiJavascript className="w-20 h-20 text-yellow-500" />
          <SiReact className="w-20 h-20 text-blue-400" />
          <SiNodeDotJs className="w-20 h-20 text-green-500" />
          <SiPhp className="w-20 h-20 text-indigo-500" />
          <SiPython className="w-20 h-20 text-yellow-400" />
          <SiMysql className="w-20 h-20 text-blue-600" />
        </div>
      </div>
    </div>
  );
}

export default Hero;