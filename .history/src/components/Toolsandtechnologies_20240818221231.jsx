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

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 justify-center items-center">
  <div className="flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]">
    <img className="mx-auto rounded-lg" src={html} alt="HTML" />
    <p className="text-sm text-center font-semibold">HTML</p>
  </div>

  <div className="flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]">
    <img className="mx-auto rounded-lg" src={Css} alt="CSS" />
    <p className="text-sm text-center font-semibold">CSS</p>
  </div>

  <div className="flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]">
    <img className="mx-auto rounded-lg" src={js} alt="JavaScript" />
    <p className="text-sm text-center font-semibold">JavaScript</p>
  </div>

  <div className="flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]">
    <img className="mx-auto rounded-lg" src={react} alt="React Js" />
    <p className="text-sm text-center font-semibold">React Js</p>
  </div>

  <div className="flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]">
    <img className="mx-auto rounded-lg" src={java} alt="Java" />
    <p className="text-sm text-center font-semibold">Java</p>
  </div>

  <div className="flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]">
    <img className="mx-auto rounded-lg" src={mysql} alt="MySQL" />
    <p className="text-sm text-center font-semibold">MySQL</p>
  </div>

  <div className="flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]">
    <img className="mx-auto rounded-lg" src={Bootstrap} alt="Bootstrap" />
    <p className="text-sm text-center font-semibold">Bootstrap</p>
  </div>

  <div className="flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]">
    <img className="mx-auto rounded-lg" src={Bootstrap} alt="Bootstrap" />
    <p className="text-sm text-center font-semibold">Bootstrap</p>
  </div>
</div>



</div>
  )
}

export default Toolsandtechnologies