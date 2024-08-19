import React from 'react'
import js from '../assets/javascript.png'
import react from '../assets/react.png'




function Toolsandtechnologies() {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-8 lg:py-16 lg:px-6">
    <div className="text-center mb-10">
        <h2 className="text-4xl tracking-tight font-bold text-primary-800">Skills</h2>
        <p className='text-md font-bold mt-2 text-slate-400'>Tools and Technologies</p>
    </div>

    <div className=''>
    <div className='inline-block bg-slate-200 p-2 rounded-lg'>
  <img className='mx-auto rounded-lg' src={js} alt='/' />
  <p className='text-sm font-bold'>Javascript</p>
</div>
   <div className='inline-block bg-slate-200 p-2 rounded-lg'>
  <img className='mx-auto rounded-lg' src={react} alt='/' />
  <p className='text-sm font-bold'>React Js</p>
</div>

</div>


</div>
  )
}

export default Toolsandtechnologies