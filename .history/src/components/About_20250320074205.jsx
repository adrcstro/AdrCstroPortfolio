import React from 'react';
import profile from '../assets/Profilefolio.jpg';
import { FcIdea, FcComboChart, FcManager, FcServices } from "react-icons/fc";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

function About({ isDarkMode }) {
  return (
    <div name="About" className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} w-full`}>
      <div className={`max-w-screen-xl mx-auto py-8 px-8 lg:py-16 lg:px-6 ${isDarkMode ? 'text-white' : 'text-black'} font-montserrat`}>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
           viewport={{ once: true, amount: 0.7 }} 
          className="text-center mb-10"
        >
          <h2 className={`text-4xl tracking-tight font-bold ${isDarkMode ? 'text-white' : 'text-primary-800'}`}>
            About<span className='text-[#570df8] text-3xl'>Me.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
             viewport={{ once: true, amount: 0.7 }} 
            className="mb-6 lg:mb-0 lg:mr-8"
          >
            <img className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[350px] rounded-full mx-auto" src={profile} alt="Profile" />
          </motion.div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
               viewport={{ once: true, amount: 0.7 }} 
              className={`p-4 border-2 border-gray-400 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <h3 className={`flex items-center text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Personal Identification <FcManager className='ml-2 w-6 h-6' />
              </h3>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Hi! I'm Andre Thomas Castro and I'm a Full stack web developer based in the Philippines. I'm 21 years old and currently living here in Antipolo, Philippines.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
               viewport={{ once: true, amount: 0.7 }} 
              className={`p-4 border-4 border-gray-400 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <h3 className={`flex items-center text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Interests & Hobbies <FcIdea className='ml-2 w-6 h-6' />
              </h3>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                I'm passionate about web development and enjoy exploring new technologies and design trends. I love coding, especially when it comes to creating clean, responsive interfaces and solving complex problems.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
               viewport={{ once: true, amount: 0.7 }} 
              className={`p-4 border-4 border-gray-400 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <h3 className={`flex items-center text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Goals & Aspirations <FcComboChart className='ml-2 w-6 h-6' />
              </h3>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                I'm passionate about web development and enjoy exploring new technologies and design trends. I love coding, especially when it comes to creating clean, responsive interfaces and solving complex problems.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
               viewport={{ once: true, amount: 0.7 }} 
              className={`p-4 border-4 border-gray-400 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <h3 className={`flex items-center text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Skills & Abilities <FcServices className='ml-2 w-6 h-6' />
              </h3>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Proficient in HTML, CSS, JavaScript, and React, 
                with experience in creating responsive designs using Tailwind CSS. 
                Im also profecient in Backend Technologies such as NodeJs,ExpressJs , PHP and Python.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;