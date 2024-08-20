import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import thumb1 from '../assets/ProjectsAsset/ResiThumbnail.png'
import thumb2 from '../assets/ProjectsAsset/CoffeeThumbnail.png'
import thumb3 from '../assets/ProjectsAsset/TricycleThumbnail.png'




function Projects() {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-8 lg:py-16 lg:px-6">
    <div className="text-center mb-10">
      <h2 className="text-4xl tracking-tight font-bold text-primary-800">
        Proj<span className='text-[#570df8] text-3xl'>ects.</span>
      </h2>
      <p className='text-md font-bold mt-2 text-slate-400'>Personal Projects & Prototype</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="card bg-blue-200 w-full shadow-xl flex flex-col">
    <figure className="px-4 pt-10">
      <img
        src={thumb1}
        alt="Shoes"
        className="rounded-xl"
      />
    </figure>
    <div className="py-2 px-4 flex-grow items-center text-first">
      <h2 className="font-bold text-md px-4">ResiQuest:(Automated Document Request Management System Web-Application)</h2>
      <p className='px-4 text-sm text-slate-600'>Brgy-409 Document Request Management System (DRMS)</p>
    </div>
    <div className='flex justify-end p-4 gap-2 mt-auto'>
      <div className='bg-slate-600 rounded-lg p-2'><FaGithub className='w-4 h-4 text-white'/></div>
      <div className='bg-slate-600 rounded-lg p-2'><FaArrowUpRightFromSquare className='w-4 h-4 text-white'/></div>
    </div>
  </div>

  <div className="card bg-[#F7DCB9] w-full shadow-xl flex flex-col">
    <figure className="px-4 pt-10">
      <img
        src={thumb2}
        alt="Shoes"
        className="rounded-xl"
      />
    </figure>
    <div className="py-2 px-4 flex-grow items-center text-first">
      <h2 className="font-bold text-md px-4">BEANtoCUP: A Coffee Shop Order and Tracking Management System Web-Application</h2>
      <p className='px-4 text-sm text-slate-600'>The system allows for efficient order placement, real-time tracking of order status, and seamless coordination</p>
    </div>
    <div className='flex justify-end p-4 gap-2 mt-auto'>
      <div className='bg-slate-600 rounded-lg p-2'><FaGithub className='w-4 h-4 text-white'/></div>
      <div className='bg-slate-600 rounded-lg p-2'><FaArrowUpRightFromSquare className='w-4 h-4 text-white'/></div>
    </div>
  </div>

  <div className="card bg-blue-300 w-full shadow-xl flex flex-col">
    <figure className="px-4 pt-10">
      <img
        src={thumb3}
        alt="Shoes"
        className="rounded-xl"
      />
    </figure>
    <div className="py-2 px-4 flex-grow items-center text-first">
      <h2 className="font-bold text-md px-4">Plate-to-Place</h2>
      <p className='px-4 text-sm text-slate-600'>Trycycle Tracking Management System</p>
    </div>
    <div className='flex justify-end p-4 gap-2 mt-auto'>
      <div className='bg-slate-600 rounded-lg p-2'><FaGithub className='w-4 h-4 text-white'/></div>
      <div className='bg-slate-600 rounded-lg p-2'><FaArrowUpRightFromSquare className='w-4 h-4 text-white'/></div>
    </div>
  </div>


</div>

  </div>
  )
}

export default Projects