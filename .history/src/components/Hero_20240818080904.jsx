import React from 'react'
import profile from '../assets/Profilefolio.jpg'
import {AiOutlineMessage } from 'react-icons/ai'
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaHandsClapping } from "react-icons/fa6";
function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content text-center">
      <div className="max-w-3xl">
      <div className="avatar">
  <div className="mask mask-squircle w-24">
    <img src={profile} alt='/' />
  </div>
</div>
<div className='mt-3'>
  <h3 className='font-semibold text-md bg-slate-200 inline-flex items-center px-4 py-1 rounded-full'>
    Hi 
    <span className='ml-2'>
      <FaHandsClapping className='w-5 h-5 mr-2'/>
    </span> 
    I'm Andre Castro
  </h3>
</div>


        <h1 className="text-5xl lg:text-6xl md:text:3xl  font-bold mt-4 ">Full Stack Web Developer based in Philippines</h1>
        
        <div className="flex flex-wrap justify-between py-6 px-4 md:px-8 lg:px-16">
  <div className="flex items-center space-x-2 shrink-0">
    <p className="font-semibold bg-slate-200 rounded-lg py-2 px-2">+2.5</p>
    <p className="text-xm">Years of<br/>Experience</p>
  </div>
  <div className="flex items-center space-x-2 shrink-0">
    <p className="font-semibold bg-slate-200 rounded-lg py-2 px-2">+2.5</p>
    <p className="text-xm">Years of<br/>Experience</p>
  </div>
  <div className="flex items-center space-x-2 shrink-0">
    <p className="font-semibold bg-slate-200 rounded-lg py-2 px-2">+2.5</p>
    <p className="text-xm">Years of<br/>Experience</p>
  </div>
</div>


        <div className='justify-between'>  
        <button className="btn btn-primary mr-2 shadow-lg rounded-full px-8 "><IoDocumentTextOutline className='w-5 h-5'/>Resume</button>
        <button className="btn btn-transparent shadow-lg border border-gray-900 rounded-full px-8"><AiOutlineMessage className='w-5 h-5' />Contact</button>
        </div>
       
      </div>
    </div>
  </div>
  )
}

export default Hero