import React from 'react'
import profile from '../assets/Profilefolio.jpg'
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

<h3 className='font-bold text-lg'>Hi Im Andre Thomas Castro</h3>

        <h1 className="text-5xl lg:text-6xl md:text:3xl  font-bold mt-4 ">Full Stack Web Developer based in Philippines</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <div className='justify-between'>  
        <button className="btn btn-primary mr-2 shadow-lg rounded-full px-8 ">Resume</button>
        <button className="btn btn-transparent shadow-lg border border-gray-900 rounded-full px-8">Contact</button>
        </div>
       
      </div>
    </div>
  </div>
  )
}

export default Hero