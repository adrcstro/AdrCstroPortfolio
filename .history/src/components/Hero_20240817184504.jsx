import React from 'react'
import profile from '../assets/Profilefolio.jpg'
import {AiOutlineMessage } from 'react-icons/ai'
import { IoDocumentTextOutline } from "react-icons/io5";

function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content text-center">
      <div className="max-w-3xl">
      <div className="avatar">
  <div className="mask mask-squircle w-24">
    <img src={profile} />
  </div>
</div>
<div className='mt-3'>
  <h3 className='font-semibold text-md bg-slate-200 inline-block px-4 py-1 rounded-full'>Hi Im Andre Thomas Castro</h3>
</div>


        <h1 className="text-5xl lg:text-6xl md:text:3xl  font-bold mt-4 ">Full Stack Web Developer based in Philippines</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
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