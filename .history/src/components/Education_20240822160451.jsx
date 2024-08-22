import React from 'react'
import Educ1 from '../assets/educationassets/earist.png'
import Educ2 from '../assets/educationassets/mnhs.png'
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'
function Education({ isDarkMode }) {
  return (
    <div name="Education" className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} w-full`}>
    <div className="max-w-screen-xl mx-auto py-8 px-8 lg:py-16 lg:px-6">
    <div className="text-center mb-10">
      <motion.h2
        variants={fadeIn("up",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
       className={`text-4xl tracking-tight font-bold ${isDarkMode ? 'text-white' : 'text-primary-800'}`}>
        Educa<span className='text-[#570df8] text-3xl'>tion.</span>
      </motion.h2>
      <motion.p 
       variants={fadeIn("down",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
      className='text-md font-bold mt-2 text-slate-400'>School Attended</motion.p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
    <motion.div
      variants={fadeIn("right",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
     className={`flex  border border-slate-200 items-center  shadow-lg p-4 rounded-lg min-w-[70px] ${isDarkMode ? 'bg-slate-800 border-none' : 'bg-white'}`}>
    <img className={`rounded-lg w-16 h-16 mr-4  ${isDarkMode ? 'bg-white' : 'bg-white'} `} src={Educ1} alt="React Js"/>
    <div className='flex-grow'> 
    <p className={`text-sm  ' ${isDarkMode ? 'text-white font-semibold' : 'text-slate-400 font-semibold'}`}>Degree</p>
    <p className={`text-sm ' ${isDarkMode ? 'text-white font-bold' : 'text-black font-bold'}`}>Bachelor of Science in Computer Science (BSCS)</p>
    <p className={`text-sm mt-2 ' ${isDarkMode ? 'text-white font-semibold' : 'text-slate-400 font-semibold'}`}>2021-Present</p>
    <p className={`text-sm  ' ${isDarkMode ? 'text-white font-bold' : 'text-slate-400 font-bold'}`}>Eulogio "Amang" Rodriguez Institute of Science and Technology</p>
</div>
  </motion.div>
  <motion.div
    variants={fadeIn("left",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
   className={`flex  border border-slate-200 items-center  shadow-lg p-4 rounded-lg min-w-[70px] ${isDarkMode ? 'bg-slate-800 border-none' : 'bg-white'}`}>
  <img className={`rounded-lg w-16 h-16 mr-4   ${isDarkMode ? 'bg-white' : 'bg-white'} `} src={Educ2} alt="React Js"/>
    <div className='flex-grow'> 
    <p className={`text-sm  ' ${isDarkMode ? 'text-white font-semibold' : 'text-slate-400 font-semibold'}`}>Strand</p>
    <p className={`text-sm ' ${isDarkMode ? 'text-white font-bold' : 'text-black font-bold'}`}>Information Communication Technology (ICT)</p>
    <p className={`text-sm mt-2 ' ${isDarkMode ? 'text-white font-semibold' : 'text-slate-400 font-semibold'}`}>2020-2021</p>
    <p className={`text-sm  ' ${isDarkMode ? 'text-white font-bold' : 'text-slate-400 font-bold'}`}>Muntindilaw National High School</p>
</div>
  </motion.div>
  

</div>
</div>
  </div>
  )
}

export default Education