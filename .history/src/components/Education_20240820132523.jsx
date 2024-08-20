import React from 'react'
import Educ1 from '../assets/educationassets/earist-logo-1.png'



function Education() {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-8 lg:py-16 lg:px-6">
    <div className="text-center mb-10">
      <h2 className="text-4xl tracking-tight font-bold text-primary-800">
        Educa<span className='text-[#570df8] text-3xl'>tion.</span>
      </h2>
      <p className='text-md font-bold mt-2 text-slate-400'>School Attended</p>
    </div>
    
    <div className="flex grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src={Educ1}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
  
</div>

  </div>
  )
}

export default Education