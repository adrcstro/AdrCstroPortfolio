import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import thumb1 from '../assets/ProjectsAsset/ResiThumbnail.png'
import thumb2 from '../assets/ProjectsAsset/CoffeeThumbnail.png'
import thumb3 from '../assets/ProjectsAsset/TricycleThumbnail.png'
import thumb4 from '../assets/ProjectsAsset/LangsysThumbnail.png'
import thumb5 from '../assets/ProjectsAsset/reactp1thumbnaikl.png'
import thumb6 from '../assets/ProjectsAsset/reactp2thumbnail.png'
import { SiPhp } from "react-icons/si";
import { FaHtml5, FaJs, FaGitAlt, FaBootstrap } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql, SiJquery } from "react-icons/si";


import resi1 from '../assets/ProjectsAsset/IndividualProjectAssets/resi1.png'
import resi2 from '../assets/ProjectsAsset/IndividualProjectAssets/resi2.png'
import resi3 from '../assets/ProjectsAsset/IndividualProjectAssets/resi3.png'
import resi4 from '../assets/ProjectsAsset/IndividualProjectAssets/resi4.png'
import resi5 from '../assets/ProjectsAsset/IndividualProjectAssets/resi5.png'
import resi6 from '../assets/ProjectsAsset/IndividualProjectAssets/resi6.png'
















import {motion} from 'framer-motion';
import {fadeIn} from '../variants'
function Projects({ isDarkMode }) {
  return (
    <div name="Projects" className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} w-full`}>
    <div className="max-w-screen-xl mx-auto py-8 px-8 lg:py-16 lg:px-6">
    <div className="text-center mb-10">
      <motion.h2
       variants={fadeIn("up",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
       className={`text-4xl tracking-tight font-bold ${isDarkMode ? 'text-white' : 'text-primary-800'}`}>
        Proj<span className='text-[#570df8] text-3xl'>ects.</span>
      </motion.h2>
      <motion.p
       variants={fadeIn("down",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
       className='text-md font-bold mt-2 text-slate-400'>Personal Projects & Prototype</motion.p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <motion.div 
  variants={fadeIn("right",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
  className={`card bg-blue-200 w-full shadow-xl flex flex-col ${isDarkMode ? 'bg-slate-800 ' : 'text-primary-800'}`}>
    <figure className="px-4 pt-10">
      <img
        src={thumb1}
        alt="Shoes"
        className="rounded-xl transition-transform transform hover:scale-105"
      />
    </figure>
    <div className="py-2 px-4 flex-grow items-center text-first">
  <h2 className={`font-bold text-md px-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>ResiQuest:(Automated Document Request Management System Web-Application)</h2>
      <p className={`px-4 text-sm  ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>Brgy-409 Document Request Management System (DRMS)</p>
    </div>
    <div className='flex justify-end p-4 gap-2 mt-auto'>
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'><FaGithub className='w-4 h-4 text-white '/></div>
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105' onClick={()=>document.getElementById('my_modal_3').showModal()}><FaArrowUpRightFromSquare className='w-4 h-4 text-white '/></div>
    </div>
  </motion.div>

  <dialog id="my_modal_3" className="modal">
  

  <div className={`modal-box w-11/12 max-w-6xl h-auto md:h-[600px] ${isDarkMode ? 'bg-slate-800 ' : 'text-primary-800'}`}>
  
    <form method="dialog">
      {/* Close Button */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>

    <div className="flex flex-col h-full p-4 overflow-hidden">
      {/* Scrollable Content Section */}
      <div className="w-full h-full overflow-y-auto">
        {/* Carousel Section */}
        <div className="carousel w-full h-full border-2 rounded-lg border-slate-400">
  {[
    { id: "slide1", img: resi6, next: "#slide2", prev: "#slide6" },
    { id: "slide2", img: resi5, next: "#slide3", prev: "#slide1" },
    { id: "slide3", img: resi4, next: "#slide4", prev: "#slide2" },
    { id: "slide4", img: resi3, next: "#slide5", prev: "#slide3" },
    { id: "slide5", img: resi2, next: "#slide6", prev: "#slide4" },
    { id: "slide6", img: resi1, next: "#slide1", prev: "#slide5" },
  ].map(({ id, img, next, prev }) => (
    <div key={id} id={id} className="carousel-item relative w-full h-full">
      <img src={img} className="w-full h-full object-contain" alt="Slide" />
      <div className="absolute inset-y-1/2 left-5 right-5 flex justify-between transform -translate-y-1/2">
        <a href={prev} className="btn btn-circle">❮</a>
        <a href={next} className="btn btn-circle">❯</a>
      </div>
    </div>
  ))}
</div>
        {/* Text Content Section */}
        <div className="w-full p-4 mt-4">
      
        <h2  className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
            RESIQUEST: An Automated Document Request Management System
          </h2>
          <p className={`mt-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}><span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Project Role: </span> Full Stack Developer</p>
          <p className={`text-justify ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}><span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Description:</span> ResiQuest is a software solution designed to streamline and automate the process of requesting, managing, and tracking documents in residential or organizational settings. It enables users to submit requests, track their status, and receive notifications, reducing manual effort and improving efficiency in document handling.</p>
         
        
         
         
         
          <p className={`text-justify ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
            <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Activities:</span>
            <ul className="list-disc list-inside">
              <li>Automated the process of requesting documents</li>
              <li>Managed document tracking and notifications</li>
              <li>Improved efficiency in document handling</li>
              <li>Integrated with existing systems</li>
              <li>Enhanced user interface for ease of use</li>
              <li>Provided real-time updates on request status</li>
            </ul>
          </p>

         
        

          <p className="text-slate-600 text-justify mt-2">
            <span className="font-bold">Technology Used:</span>
          </p>
          <div className="flex p-2 gap-2">
            <SiPhp className="w-10 h-10" />
            <FaHtml5 className="w-10 h-10" />
            <IoLogoCss3 className="w-10 h-10" />
            <FaJs className="w-10 h-10" />
            <RiTailwindCssFill className="w-10 h-10" />
            <SiMysql className="w-10 h-10" />
            <SiJquery className="w-10 h-10" />
            <FaGitAlt className="w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  </div>
</dialog>






  <motion.div
  variants={fadeIn("down",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
   className={`card bg-[#F7DCB9] w-full shadow-xl flex flex-col ${isDarkMode ? 'bg-slate-800 ' : 'text-primary-800'}`}>
    <figure className="px-4 pt-10">
      <img
        src={thumb2}
        alt="Shoes"
        className="rounded-xl transition-transform transform hover:scale-105"
      />
    </figure>
    <div className="py-2 px-4 flex-grow items-center text-first">
      <h2 className={`font-bold text-md px-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>BEANtoCUP: A Coffee Shop Order and Tracking Management System Web-Application</h2>
      <p className={`px-4 text-sm  ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}> A comprehensive solution for managing coffee shop operations</p>
   </div>
    <div className='flex justify-end p-4 gap-2 mt-auto'>
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'><FaGithub className='w-4 h-4 text-white'/></div>
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'><FaArrowUpRightFromSquare className='w-4 h-4 text-white'/></div>
    </div>
  </motion.div>
  <motion.div
  variants={fadeIn("left",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
   className={`card bg-indigo-300 w-full shadow-xl flex flex-col ${isDarkMode ? 'bg-slate-800 ' : 'text-primary-800'}`}>
    <figure className="px-4 pt-10">
      <img
        src={thumb3}
        alt="Shoes"
        className="rounded-xl transition-transform transform hover:scale-105"
      />
    </figure>
    <div className="py-2 px-4 flex-grow items-center text-first">
      <h2 className={`font-bold text-md px-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Plate-to-Place: Tricycle Tracking Management System</h2>
      <p className={`px-4 text-sm  ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>Strengthening Safety Measures for Tricycle Transportation</p>
    
    </div>
    <div className='flex justify-end p-4 gap-2 mt-auto'>
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'><FaGithub className='w-4 h-4 text-white'/></div>
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'><FaArrowUpRightFromSquare className='w-4 h-4 text-white'/></div>
    </div>
  </motion.div>
 
  <motion.div
  variants={fadeIn("right",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
   className={`card bg-indigo-300  w-full shadow-xl flex flex-col ${isDarkMode ? 'bg-slate-800 ' : 'text-primary-800'}`}>
    <figure className="px-4 pt-10">
      <img
        src={thumb4}
        alt="Shoes"
        className="rounded-xl transition-transform transform hover:scale-105"
      />
    </figure>
    <div className="py-2 px-4 flex-grow items-center text-first">
      <h2 className={`font-bold text-md px-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>LANGSYS:Language Learning System (20 Foreign Language to Learn)</h2>
      <p className={`px-4 text-sm  ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>A Java-based application designed to facilitate language learning through interactive lessons</p>
    </div>
    <div className='flex justify-end p-4 gap-2 mt-auto'>
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'><FaGithub className='w-4 h-4 text-white'/></div>
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'><FaArrowUpRightFromSquare className='w-4 h-4 text-white'/></div>
    </div>
  </motion.div>

  <motion.div
  variants={fadeIn("up",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
   className={`card bg-slate-300  w-full shadow-xl flex flex-col ${isDarkMode ? 'bg-slate-800 ' : 'text-primary-800'}`}>
    <figure className="px-4 pt-10">
      <img
        src={thumb5}
        alt="Shoes"
        className="rounded-xl transition-transform transform hover:scale-105"
      />
    </figure>
    <div className="py-2 px-4 flex-grow items-center text-first">
    <h2 className={`font-bold text-md px-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>React Analytics Landing Page (Cloned)</h2>
    <p className={`px-4 text-sm  ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>Dynamic Landing Page for Data Analytics Composed of financial Growth</p>
    </div>
    <div className='flex justify-end p-4 gap-2 mt-auto'>
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'><FaGithub className='w-4 h-4 text-white'/></div>
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'><FaArrowUpRightFromSquare className='w-4 h-4 text-white'/></div>
    </div>
  </motion.div>

  <motion.div
  variants={fadeIn("left",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
   className={`card bg-[#F7DCB9] w-full shadow-xl flex flex-col ${isDarkMode ? 'bg-slate-800 ' : 'text-primary-800'}`}>
    <figure className="px-4 pt-10">
      <img
        src={thumb6}
        alt="Shoes"
        className="rounded-xl transition-transform transform hover:scale-105"
      />
    </figure>
    <div className="py-2 px-4 flex-grow items-center text-first">
    <h2 className={`font-bold text-md px-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Cloud Management Landing Page (Cloned)</h2>
    <p className={`px-4 text-sm  ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>Dynamic Landing Page for Cloud Computing and API Development</p>
    </div>
    <div className='flex justify-end p-4 gap-2 mt-auto'>
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'><FaGithub className='w-4 h-4 text-white'/></div>
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'><FaArrowUpRightFromSquare className='w-4 h-4 text-white'/></div>
    </div>
  </motion.div>



</div>
</div>
  </div>
  )
}

export default Projects