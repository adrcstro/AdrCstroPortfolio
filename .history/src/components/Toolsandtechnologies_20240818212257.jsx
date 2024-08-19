import React from 'react'
import js from '../assets/javascript.png'



function Toolsandtechnologies() {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-8 lg:py-16 lg:px-6">
    <div className="text-center mb-10">
        <h2 className="text-4xl tracking-tight font-bold text-primary-800">Skills</h2>
        <p className='text-md font-bold mt-2 text-slate-400'>Tools and Technologies</p>
    </div>

    <div className=''>
    <div className='inline-block bg-slate-300 p-2 px-2 rounded-lg'>
  <img className='mx-auto' src={js} alt='/' />
  <p className='text-sm font-bold'>Javascript</p>
</div>

</div>


</div>
  )
}

export default Toolsandtechnologies