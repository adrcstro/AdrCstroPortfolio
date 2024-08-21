import React from 'react'
import Educ1 from '../assets/educationassets/earist.png'
import Educ2 from '../assets/educationassets/mnhs.png'



function Education({ isDarkMode }) {
  return (
    <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} w-full`}>
    <div className="max-w-screen-xl mx-auto py-8 px-8 lg:py-16 lg:px-6">
    <div className="text-center mb-10">
      <h2 className={`text-4xl tracking-tight font-bold ${isDarkMode ? 'text-white' : 'text-primary-800'}`}>
        Educa<span className='text-[#570df8] text-3xl'>tion.</span>
      </h2>
      <p className='text-md font-bold mt-2 text-slate-400'>School Attended</p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
    <div className={`flex items-center  shadow-lg p-4 rounded-lg min-w-[70px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>




    <img className={`rounded-lg w-16 h-16 mr-4  ${isDarkMode ? 'bg-white' : 'bg-white'} `} src={Educ1} alt="React Js"/>



   


    <div className='flex-grow'> 
    <p className='text-sm font-semibold text-slate-400'>Degree</p>
    <p className="text-sm font-bold">Bachelor of Science in Computer Science (BSCS)</p>
    <p className='text-sm font-semibold text-slate-400 mt-2'>2021-Present</p>
    <p className='text-sm text-slate-400 font-bold'>Eulogio "Amang" Rodriguez Institute of Science and Technology</p>
</div>
  </div>
  
  <div className="flex items-center border border-slate-200 shadow-lg p-4 rounded-lg min-w-[70px]">
    <img className="rounded-lg w-16 h-16 mr-4" src={Educ2} alt="React Js" />
    <div className='flex-grow'> 
    <p className='text-sm font-semibold text-slate-400'>Strand</p>
    <p className="text-sm font-bold">Information Communication Technology (ICT)</p>
    <p className='text-sm font-semibold text-slate-400 mt-2'>2020-2021</p>
    <p className='text-sm text-slate-400 font-bold'>Muntindilaw National High School</p>
</div>
  </div>
  

</div>
</div>
  </div>
  )
}

export default Education