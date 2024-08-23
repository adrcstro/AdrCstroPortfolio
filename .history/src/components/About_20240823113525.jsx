import React from 'react';
import profile from '../assets/Profilefolio.jpg';
import { FcIdea, FcComboChart, FcManager, FcServices } from "react-icons/fc";
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'
function About({ isDarkMode }) {
  return (
    <div name="About" className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} w-full`}>
      <div className={`max-w-screen-xl mx-auto py-8 px-8 lg:py-16 lg:px-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        <motion.div
        variants={fadeIn("up",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
         className="text-center mb-10">
          <h2 className={`text-4xl tracking-tight font-bold ${isDarkMode ? 'text-white' : 'text-primary-800'}`}>
            About<span className='text-[#570df8] text-3xl'>Me.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row">
          {/* can help image */}
          <motion.div
           variants={fadeIn("right",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
           className="mr-0 md:mr-8 mb-6 md:mb-0">
            <img className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[350px] rounded-full mx-auto" src={profile} alt="can_help_banner" />
          </motion.div>
          {/* end can help image */}

          <div
           className="flex-1 flex flex-col mt-4 sm:flex-row flex-wrap -mb-4 -mx-2">
            <motion.div
          variants={fadeIn("up",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
             className="w-full sm:w-1/2 mb-4 px-2">
              <div className={`h-full py-4 px-6 border border-[#570df8] border-t-0 border-l-0 rounded-br-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className={`flex text-2xl font-bold text-md mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  Personal Identification<FcManager className='ml-2 w-6 h-7' />
                </h3>
                <p className={`text-sm text-justify ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Hi! I'm Andre Thomas Castro and I'm a Full stack web developer base in philippines. I'm 21 years old and currently living here in Antipolo, Philippines .
                </p>
              </div>
            </motion.div>

            <motion.div
          variants={fadeIn("left",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
             className="w-full sm:w-1/2 mb-4 px-2">
              <div className={`h-full py-4 px-6 border border-[#570df8] border-t-0 border-l-0 rounded-br-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className={`flex text-2xl font-bold text-md mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  Interest & Hobbies <FcIdea className='ml-2 w-6 h-7'/>
                </h3>
                <p className={`text-sm text-justify ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                I'm passionate about web development and enjoy exploring new technologies and design trends. I love coding, especially when it comes to creating clean, responsive interfaces and solving complex problems. Beyond development, I have a keen interest in UI/UX design, always looking for ways to 
                enhance user experiences.
                </p>
              </div>
            </motion.div>

            <motion.div 
                variants={fadeIn("right",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
            className="w-full sm:w-1/2 mb-4 px-2">
              <div className={`h-full py-4 px-6 border border-[#570df8] border-t-0 border-l-0 rounded-br-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className={`flex text-2xl font-bold text-md mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  Goals and Aspirations <FcComboChart className='ml-2 w-6 h-7'/>
                </h3>
                <p className={`text-sm text-justify ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  My Goals and Inspiration as a Developer is i want to learn heavy backend technologies I aim to continuously learn and stay updated with the latest trends, contributing to the open-source community.
                </p>
              </div>
            </motion.div>

            <motion.div
          variants={fadeIn("down",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
             className="w-full sm:w-1/2 mb-4 px-2">
              <div className={`h-full py-4 px-6 border border-[#570df8] border-t-0 border-l-0 rounded-br-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className={`flex text-2xl font-bold text-md mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  Skills and Abilities <FcServices className='ml-2 w-6 h-7' />
                </h3>
                <p className={`text-sm text-justify ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                I am proficient in front-end technologies like HTML, CSS, and JavaScript, with experience in creating responsive designs using frameworks like Tailwind CSS and libraries such as React.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
