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
import { FaJava } from "react-icons/fa";
import { DiNetbeans } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import resi1 from '../assets/ProjectsAsset/IndividualProjectAssets/resi1.png'
import resi2 from '../assets/ProjectsAsset/IndividualProjectAssets/resi2.png'
import resi3 from '../assets/ProjectsAsset/IndividualProjectAssets/resi3.png'
import resi4 from '../assets/ProjectsAsset/IndividualProjectAssets/resi4.png'
import resi5 from '../assets/ProjectsAsset/IndividualProjectAssets/resi5.png'
import resi6 from '../assets/ProjectsAsset/IndividualProjectAssets/resi6.png'
import coffe1 from '../assets/ProjectsAsset/IndividualProjectAssets/coffe1.png'
import coffe2 from '../assets/ProjectsAsset/IndividualProjectAssets/coffe2.png'
import coffe3 from '../assets/ProjectsAsset/IndividualProjectAssets/coffe3.png'
import coffe4 from '../assets/ProjectsAsset/IndividualProjectAssets/coffe4.png'
import coffe5 from '../assets/ProjectsAsset/IndividualProjectAssets/coffe5.png'
import coffe6 from '../assets/ProjectsAsset/IndividualProjectAssets/coffe6.png'
import tri1 from '../assets/ProjectsAsset/IndividualProjectAssets/tri1.png'
import tri2 from '../assets/ProjectsAsset/IndividualProjectAssets/tri2.png'
import tri3 from '../assets/ProjectsAsset/IndividualProjectAssets/tri3.png'
import tri4 from '../assets/ProjectsAsset/IndividualProjectAssets/tri4.png'
import tri5 from '../assets/ProjectsAsset/IndividualProjectAssets/tri5.png'
import tri6 from '../assets/ProjectsAsset/IndividualProjectAssets/tri6.png'
import langsy1 from '../assets/ProjectsAsset/IndividualProjectAssets/langsy1.png'
import langsy2 from '../assets/ProjectsAsset/IndividualProjectAssets/langsy2.png'
import langsy3 from '../assets/ProjectsAsset/IndividualProjectAssets/langsy3.png'
import langsy4 from '../assets/ProjectsAsset/IndividualProjectAssets/langsy4.png'
import langsy5 from '../assets/ProjectsAsset/IndividualProjectAssets/langsy5.png'
import langsy6 from '../assets/ProjectsAsset/IndividualProjectAssets/langsy6.png'
import anali1 from '../assets/ProjectsAsset/IndividualProjectAssets/anali1.png'
import anali2 from '../assets/ProjectsAsset/IndividualProjectAssets/anali2.png'
import anali3 from '../assets/ProjectsAsset/IndividualProjectAssets/anali3.png'
import anali4 from '../assets/ProjectsAsset/IndividualProjectAssets/anali4.png'
import cloud1 from '../assets/ProjectsAsset/IndividualProjectAssets/cloud1.png'
import cloud2 from '../assets/ProjectsAsset/IndividualProjectAssets/cloud2.png'
import cloud3 from '../assets/ProjectsAsset/IndividualProjectAssets/cloud3.png'
import cloud4 from '../assets/ProjectsAsset/IndividualProjectAssets/cloud4.png'
import cloud5 from '../assets/ProjectsAsset/IndividualProjectAssets/cloud5.png'
import cloud6 from '../assets/ProjectsAsset/IndividualProjectAssets/cloud6.png'

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
  <h2 className={`font-bold text-md px-4  ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>ResiQuest:(Automated Document Request Management System Web-Application)</h2>
      <p className={`px-4 text-sm  ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>Brgy-409 Document Request Management System (DRMS)</p>
    </div>
    <div className='flex justify-end p-4 gap-2 mt-auto'>
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'><FaGithub href='https://github.com/adrcstro/ResiQuest-BRGY409' target="_blank"  className='w-4 h-4 text-white '/></div>
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105' onClick={()=>document.getElementById('my_modal_3').showModal()}><FaArrowUpRightFromSquare className='w-4 h-4 text-white '/></div>
    </div>
  </motion.div>

  <dialog id="my_modal_3" className="modal">
  <div className={`modal-box w-11/12 max-w-6xl h-auto md:h-[600px] ${isDarkMode ? 'bg-slate-800 ' : 'text-primary-800'}`}>
    <form method="dialog">
      {/* Close Button */}
      <button className={`btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>✕</button>
    </form>
    <div className="flex flex-col h-full p-4 overflow-hidden">
      {/* Scrollable Content Section */}
      <div  className={`w-full h-full overflow-y-auto ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
        {/* Carousel Section */}
        <div className="carousel w-full h-full border-2 rounded-lg border-slate-400">
  {[
    { id: "slide6", img: resi6, next: "#slide2", prev: "#slide6" },
    { id: "slide2", img: resi5, next: "#slide3", prev: "#slide1" },
    { id: "slide3", img: resi4, next: "#slide4", prev: "#slide2" },
    { id: "slide4", img: resi3, next: "#slide5", prev: "#slide3" },
    { id: "slide5", img: resi2, next: "#slide6", prev: "#slide4" },
    { id: "slide1", img: resi1, next: "#slide1", prev: "#slide5" },
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
          <p className={`text-justify ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
            <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Technology Used:</span>
          </p>
          <div  className={`flex p-2 gap-2 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
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
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'><FaArrowUpRightFromSquare className='w-4 h-4 text-white' onClick={()=>document.getElementById('my_modal_4').showModal()}/></div>
    </div>
  </motion.div>

  <dialog id="my_modal_4" className="modal">
  <div className={`modal-box w-11/12 max-w-6xl h-auto md:h-[600px] ${isDarkMode ? 'bg-slate-800 ' : 'text-primary-800'}`}>
    <form method="dialog">
      {/* Close Button */}
      <button className={`btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>✕</button>
    </form>
    <div className="flex flex-col h-full p-4 overflow-hidden">
      {/* Scrollable Content Section */}
      <div  className={`w-full h-full overflow-y-auto ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
        {/* Carousel Section */}
        <div className="carousel w-full h-full border-2 rounded-lg border-slate-400">
  {[
    { id: "coffe1", img: coffe1, next: "#coffe2", prev: "#coffe6" },
    { id: "coffe2", img: coffe5, next: "#coffe3", prev: "#coffe1" },
    { id: "coffe3", img: coffe4, next: "#coffe4", prev: "#coffe2" },
    { id: "coffe4", img: coffe3, next: "#coffe5", prev: "#coffe3" },
    { id: "coffe5", img: coffe2, next: "#coffe6", prev: "#coffe4" },
    { id: "coffe6", img: coffe6, next: "#coffe1", prev: "#coffe5" },
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
        "BEANtoCUP" - A Coffee Shop Order and Tracking Management System
          </h2>
          <p className={`mt-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}><span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Project Role: </span> Full Stack Developer</p>
          <p className={`text-justify ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}><span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Description:</span>  BEANtoCUP: A Coffee Shop Order and Tracking Management System is a comprehensive solution for managing coffee shop operations, including order processing, inventory tracking, and customer management. </p>
          <p className={`text-justify ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
            <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Activities:</span>
            <ul className="list-disc list-inside">
            <li>Designed and managed database schema for orders and inventory</li>
            <li>Integrated third-party payment gateways for secure transactions</li>
            <li>Implemented user authentication and role-based access control</li>
            <li>Created responsive user interfaces for customers and admin</li>
            <li>Optimized performance with caching and load testing</li>
            <li>Ensured security with encryption and vulnerability protection</li>
            </ul>
          </p>
          <p className={`text-justify ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
            <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Technology Used:</span>
          </p>
          <div  className={`flex p-2 gap-2 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
          <SiPhp className='w-10 h-10' />
                  <FaHtml5 className='w-10 h-10' />
                  <IoLogoCss3 className='w-10 h-10' />
                  <FaJs className='w-10 h-10' />
                  <SiMysql className='w-10 h-10' />
                  <FaBootstrap className='w-10 h-10' />
                  <SiJquery className='w-10 h-10' />
                  <FaGitAlt className='w-10 h-10' />
          </div>
        </div>
      </div>
    </div>
  </div>
</dialog>






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
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'><FaArrowUpRightFromSquare className='w-4 h-4 text-white' onClick={()=>document.getElementById('my_modal_5').showModal()}/></div>
    </div>
  </motion.div>
 

  <dialog id="my_modal_5" className="modal">
  <div className={`modal-box w-11/12 max-w-6xl h-auto md:h-[600px] ${isDarkMode ? 'bg-slate-800 ' : 'text-primary-800'}`}>
    <form method="dialog">
      {/* Close Button */}
      <button className={`btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>✕</button>
    </form>
    <div className="flex flex-col h-full p-4 overflow-hidden">
      {/* Scrollable Content Section */}
      <div  className={`w-full h-full overflow-y-auto ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
        {/* Carousel Section */}
        <div className="carousel w-full h-full border-2 rounded-lg border-slate-400">
  {[
    { id: "tri1", img: tri1, next: "#tri2", prev: "#tri6" },
    { id: "tri2", img: tri5, next: "#tri3", prev: "#tri1" },
    { id: "tri3", img: tri4, next: "#tri4", prev: "#tri2" },
    { id: "tri4", img: tri3, next: "#tri5", prev: "#tri3" },
    { id: "tri5", img: tri2, next: "#tri6", prev: "#tri4" },
    { id: "tri6", img: tri6, next: "#tri1", prev: "#tri5" },
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
        Plate-to-Place: Tricycle Tracking Management System
          </h2>
          <p className={`mt-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}><span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Project Role: </span> Full Stack Developer</p>
          <p className={`text-justify ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}><span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Description:</span>  The "Plate-to-Place" is an innovative web application designed to manage and track tricycles within a specific area or fleet. This system allows administrators to monitor tricycle locations in real-time, manage driver assignments, and ensure efficient operation across routes. </p>
          <p className={`text-justify ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
            <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Activities:</span>
            <ul className="list-disc list-inside">
            <li>Developed real-time tricycle tracking and route monitoring features</li>
            <li>Integrated Google Maps API for geolocation and route visualization</li>
            <li>Built a driver management module with scheduling and assignment capabilities</li>
            <li>Created responsive user interfaces for drivers and dispatchers</li>
            <li>Implemented notifications and alerts for drivers and dispatchers</li>
            <li>Conducted end-to-end testing and deployment on Web</li>
            </ul>
          </p>
          <p className={`text-justify ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
            <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Technology Used:</span>
          </p>
          <div  className={`flex p-2 gap-2 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
          <SiPhp className='w-10 h-10' />
                  <FaHtml5 className='w-10 h-10' />
                  <IoLogoCss3 className='w-10 h-10' />
                  <FaJs className='w-10 h-10' />
                  <SiMysql className='w-10 h-10' />
                  <FaBootstrap className='w-10 h-10' />
                  <SiJquery className='w-10 h-10' />
                  <FaGitAlt className='w-10 h-10' />
          </div>
        </div>
      </div>
    </div>
  </div>
</dialog>




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
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'><FaArrowUpRightFromSquare className='w-4 h-4 text-white' onClick={()=>document.getElementById('my_modal_6').showModal()}/></div>
    </div>
  </motion.div>



  <dialog id="my_modal_6" className="modal">
  <div className={`modal-box w-11/12 max-w-6xl h-auto md:h-[600px] ${isDarkMode ? 'bg-slate-800 ' : 'text-primary-800'}`}>
    <form method="dialog">
      {/* Close Button */}
      <button className={`btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>✕</button>
    </form>
    <div className="flex flex-col h-full p-4 overflow-hidden">
      {/* Scrollable Content Section */}
      <div  className={`w-full h-full overflow-y-auto ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
        {/* Carousel Section */}
        <div className="carousel w-full h-full border-2 rounded-lg border-slate-400">
  {[
    { id: "langsy1", img: langsy1, next: "#langsy2", prev: "#langsy6" },
    { id: "langsy2", img: langsy5, next: "#langsy3", prev: "#langsy1" },
    { id: "langsy3", img: langsy4, next: "#langsy4", prev: "#langsy2" },
    { id: "langsy4", img: langsy3, next: "#langsy5", prev: "#langsy3" },
    { id: "langsy5", img: langsy2, next: "#langsy6", prev: "#langsy4" },
    { id: "langsy6", img: langsy6, next: "#langsy1", prev: "#langsy5" },
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
        LANGSYS:Language Learning System (20 Foreign Language to Learn)
          </h2>
          <p className={`mt-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}><span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Project Role: </span> Full Stack Java Developer</p>
          <p className={`text-justify ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}><span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Description:</span>  LANGSYS is an innovative Java application designed to facilitate language acquisition across 20 different foreign languages. This user-friendly platform provides a comprehensive suite of tools and resources tailored for learners at all levels, from beginners to advanced speakers.</p>
          <p className={`text-justify ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
            <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Activities:</span>
            <ul className="list-disc list-inside">
            <li>Developed an interactive language lesson module with multimedia content for engaging learning experiences.</li>
            <li>Integrated speech recognition technology to provide real-time feedback on pronunciation and speaking skills.</li>
            <li>Implemented a user progress tracking system to monitor learning milestones and performance analytics.</li>
            <li>Created responsive web interfaces for learners and instructors, ensuring a seamless user experience across devices.</li>
            <li>Developed a community forum feature for users to connect, collaborate, and share language learning tips and resources.</li>
            <li>Conducted thorough testing and deployment of the application to ensure functionality, performance, and security.</li>
            </ul>
          </p>
          <p className={`text-justify ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
            <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Technology Used:</span>
          </p>
          <div  className={`flex p-2 gap-2 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                  <FaJava className='w-10 h-10' />
                  <DiNetbeans className='w-10 h-10' />
                  <SiMysql className='w-10 h-10' />
                 
          </div>
        </div>
      </div>
    </div>
  </div>
</dialog>








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
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'><FaArrowUpRightFromSquare className='w-4 h-4 text-white' onClick={()=>document.getElementById('my_modal_2').showModal()}/></div>
    </div>
  </motion.div>


  <dialog id="my_modal_2" className="modal">
  <div className={`modal-box w-11/12 max-w-6xl h-auto md:h-[600px] ${isDarkMode ? 'bg-slate-800 ' : 'text-primary-800'}`}>
    <form method="dialog">
      {/* Close Button */}
      <button className={`btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>✕</button>
    </form>
    <div className="flex flex-col h-full p-4 overflow-hidden">
      {/* Scrollable Content Section */}
      <div  className={`w-full h-full overflow-y-auto ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
        {/* Carousel Section */}
        <div className="carousel w-full h-full border-2 rounded-lg border-slate-400">
  {[
    { id: "anali1", img: anali1, next: "#anali2", prev: "#anali4" },
    { id: "anali2", img: anali2, next: "#anali3", prev: "#anali1" },
    { id: "anali3", img: anali3, next: "#anali4", prev: "#anali2" },
    { id: "anali4", img: anali4, next: "#anali1", prev: "#anali3" },
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
        React Analytics Landing Page (Cloned)
          </h2>
          <p className={`mt-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}><span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Project Role: </span> Front-End Developer</p>
          <p className={`text-justify ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}><span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Description:</span>  The React Analytics Landing Page project is a fully responsive web application that replicates a modern analytics dashboard interface using React. Designed to showcase data visualization and user interaction, this landing page serves as a demonstration of key web development skills, including component-based architecture, state management, and API integration.</p>
          <p className={`text-justify ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
            <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Activities:</span>
            <ul className="list-disc list-inside">
            <li>Cloned the landing page layout using React to ensure a responsive and visually appealing design.</li>
            <li>Implemented data visualization components using charting libraries to display analytics effectively.</li>
            <li>Developed reusable React components for navigation, headers, and footers to promote code modularity.</li>
            <li>Integrated mock data sources to simulate real-time analytics, enhancing the user experience.</li>
            <li>Optimized the application for performance by implementing lazy loading and code-splitting techniques.</li>
            <li>Conducted thorough testing and debugging to ensure functionality across different browsers and devices.</li>
            </ul>
          </p>
          <p className={`text-justify ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
            <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Technology Used:</span>
          </p>
          <div  className={`flex p-2 gap-2 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
          <FaHtml5 className='w-10 h-10' />
                  <IoLogoCss3 className='w-10 h-10' />
                  <FaJs className='w-10 h-10' />
                  <FaReact className='w-10 h-10' />
                  <FaGitAlt className='w-10 h-10' />
                 
          </div>
        </div>
      </div>
    </div>
  </div>
</dialog>















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
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'><FaArrowUpRightFromSquare className='w-4 h-4 text-white' onClick={()=>document.getElementById('my_modal_1').showModal()}/></div>
    </div>
  </motion.div>

  <dialog id="my_modal_1" className="modal">
  <div className={`modal-box w-11/12 max-w-6xl h-auto md:h-[600px] ${isDarkMode ? 'bg-slate-800 ' : 'text-primary-800'}`}>
    <form method="dialog">
      {/* Close Button */}
      <button className={`btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>✕</button>
    </form>
    <div className="flex flex-col h-full p-4 overflow-hidden">
      {/* Scrollable Content Section */}
      <div  className={`w-full h-full overflow-y-auto ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
        {/* Carousel Section */}
        <div className="carousel w-full h-full border-2 rounded-lg border-slate-400">
  {[
    { id: "cloud1", img: cloud1, next: "#cloud2", prev: "#cloud6" },
    { id: "cloud2", img: cloud5, next: "#cloud3", prev: "#cloud1" },
    { id: "cloud3", img: cloud4, next: "#cloud4", prev: "#cloud2" },
    { id: "cloud4", img: cloud3, next: "#cloud5", prev: "#cloud3" },
    { id: "cloud5", img: cloud2, next: "#cloud6", prev: "#cloud4" },
    { id: "cloud6", img: cloud6, next: "#cloud1", prev: "#cloud5" },
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
        Cloud Management Landing Page (Cloned)
          </h2>
          <p className={`mt-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}><span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Project Role: </span> Front-End Developer</p>
          <p className={`text-justify ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}><span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Description:</span>  The Cloud Management Landing Page (Cloned) project is a React-based web application that replicates the design and functionality of a modern cloud management platform's landing page. </p>
          <p className={`text-justify ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
            <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Activities:</span>
            <ul className="list-disc list-inside">
            <li>Developed a fully responsive hero section with a modern design, including a call-to-action button that adapts to different screen sizes.</li>
  <li>Implemented service offerings section using reusable React components, ensuring consistency and easy maintenance across the application.</li>
  <li>Created client testimonials carousel with smooth transitions and optimized performance using Framer Motion.</li>
  <li>Integrated Tailwind CSS to style the landing page, achieving a clean and consistent design throughout the project.</li>
  <li>Optimized the page load time by implementing lazy loading for images and code-splitting techniques.</li>
  <li>Ensured cross-browser compatibility and accessibility by testing and debugging the landing page on various devices and browsers.</li>
            </ul>
          </p>
          <p className={`text-justify ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
            <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Technology Used:</span>
          </p>
          <div  className={`flex p-2 gap-2 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
          <FaHtml5 className='w-10 h-10' />
                  <IoLogoCss3 className='w-10 h-10' />
                  <FaJs className='w-10 h-10' />
                  <FaReact className='w-10 h-10' />
                  <FaGitAlt className='w-10 h-10' />
                 
          </div>
        </div>
      </div>
    </div>
  </div>
</dialog>



</div>
</div>
  </div>
  )
}

export default Projects