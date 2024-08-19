import React from 'react'
import js from '../assets/javascript.png'
import react from '../assets/react.png'
import html from '../assets/html.png'
import Css from '../assets/css.png'
import java from '../assets/java.png'
import mysql from '../assets/mysql.png'
import Bootstrap from '../assets/bootstrap.png'






function Toolsandtechnologies() {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-8 lg:py-16 lg:px-6">
    <div className="text-center mb-10">
        <h2 className="text-4xl tracking-tight font-bold text-primary-800">Skills</h2>
        <p className='text-md font-bold mt-2 text-slate-400'>Tools and Technologies</p>
    </div>

    <div className='flex items-center justify-center gap-8'>
  <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
    <img className='mx-auto rounded-lg' src={html} alt='/' />
    <p className='text-sm text-center font-semibold'>HTML</p>
  </div>

  <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
    <img className='mx-auto rounded-lg' src={Css} alt='/' />
    <p className='text-sm text-center font-semibold'>CSS</p>
  </div>

  <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
    <img className='mx-auto rounded-lg' src={js} alt='/' />
    <p className='text-sm text-center font-semibold'>Javascript</p>
  </div>

  <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
    <img className='mx-auto rounded-lg' src={react} alt='/' />
    <p className='text-sm text-center font-semibold'>React Js</p>
  </div>

  <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
    <img className='mx-auto rounded-lg' src={java} alt='/' />
    <p className='text-sm text-center font-semibold'>Java</p>
  </div>
  <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
    <img className='mx-auto rounded-lg' src={mysql} alt='/' />
    <p className='text-sm text-center font-semibold'>MySQL</p>
  </div>

  <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
    <img className='mx-auto rounded-lg' src={Bootstrap} alt='/' />
    <p className='text-sm text-center font-semibold'>Bootstrap</p>
  </div>
  <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
    <img className='mx-auto rounded-lg' src={Bootstrap} alt='/' />
    <p className='text-sm text-center font-semibold'>Bootstrap</p>
  </div>


</div>



</div>
  )
}

export default Toolsandtechnologies