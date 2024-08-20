import React from 'react'
import thumb1 from '../assets/ProjectsAsset/ResiThumbnail.png'
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

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
  <div className="card bg-blue-400 w-full shadow-xl">
    <figure className="px-4 pt-10">
      <img
        src={thumb1}
        alt="Shoes"
        className="rounded-xl"
      />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">ResiQuest:(Automated Document Request Management System)</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
    </div>
    <div className='flex justify-end p-4 gap-2'>
<div className='bg-slate-500 p-2'><FaGithub className='w-5 h-5'/></div>


      
      <FaArrowUpRightFromSquare className='w-5 h-5'/>
      </div>
  </div>
  
  
 
  
</div>


  </div>
  )
}

export default Projects