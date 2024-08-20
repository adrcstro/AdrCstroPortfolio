import React from 'react'
import contact1 from '../assets/contactassets/gmail.png'



function Contact() {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-8 lg:py-16 lg:px-6">
    <div className="text-center mb-10">
      <h2 className="text-4xl tracking-tight font-bold text-primary-800">
        Cont<span className='text-[#570df8] text-3xl'>act.</span>
      </h2>
      <p className='text-md font-bold mt-2 text-slate-400'>Contact Details & Social Media</p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  
    <div className="flex items-center  p-4 rounded-lg min-w-[70px]">
    <img className="rounded-lg w-16 h-16 mr-4" src={contact1} alt="React Js" />
    <div className='flex-grow'> 
    <p className='text-md mb-[-4px] font-semibold text-slate-400'>Email me</p>
    <h4 className="text-lg text-slate-400 font-bold">castroandew10@gmail.com</h4>
    
</div>
  </div>
  


</div>

  </div>
  )
}

export default Contact