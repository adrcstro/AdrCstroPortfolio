import React from 'react'
import contact1 from '../assets/contactassets/gmail.png'
import contact2 from '../assets/contactassets/facebook.png'
import contact3 from '../assets/contactassets/instagram.png'
import contact4 from '../assets/contactassets/twitter.png'
import contact5 from '../assets/contactassets/github.png'
import contact6 from '../assets/contactassets/linked.png'
import contact7 from '../assets/contactassets/skype.png'
import contact8 from '../assets/contactassets/telegram.png'
import contact9 from '../assets/contactassets/phone.png'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


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
    <p className='text-md mb-[-6px] font-semibold text-slate-400'>Email me</p>
    <h4 className="flex items-center text-lg text-slate-400 font-bold">castroandew10@gmail.com <FaArrowUpRightFromSquare className='w-4 h-4 ml-2 text-slate-400 '/> </h4>
    
</div>
  </div>
  
  <div className="flex items-center  p-4 rounded-lg min-w-[70px]">
    <img className="rounded-lg w-16 h-16 mr-4" src={contact2} alt="React Js" />
    <div className='flex-grow'> 
    <p className='text-md mb-[-10px] font-semibold text-slate-400'>Message me</p>
    <h4 className="flex items-center text-lg text-slate-400 font-bold"><a href="https://www.facebook.com/profile.php?id=100009241129573" target="_blank" rel="noreferrer">Andre Thomas Castro</a><FaArrowUpRightFromSquare className='w-4 h-4 ml-2 text-slate-400 '/></h4>
    
</div>
  </div>
  
  <div className="flex items-center  p-4 rounded-lg min-w-[70px]">
    <img className="rounded-lg w-16 h-16 mr-4" src={contact3} alt="React Js" />
    <div className='flex-grow'> 
    <p className='text-md mb-[-10px] font-semibold text-slate-400'>Message me on Instagram</p>
    <h4 className="flex items-center text-lg text-slate-400 font-bold"><a href='https://www.instagram.com/_adrcstro/ ' target="_blank" rel="noreferrer">_adrcstro </a> <FaArrowUpRightFromSquare className='w-4 h-4 ml-2 text-slate-400 '/></h4>
    
</div>
  </div>
  
  <div className="flex items-center  p-4 rounded-lg min-w-[70px]">
    <img className="rounded-lg w-16 h-16 mr-4" src={contact4} alt="React Js" />
    <div className='flex-grow'> 
    <p className='text-md mb-[-10px] font-semibold text-slate-400'>DM me on X</p>
    <h4 className="flex items-center text-lg text-slate-400 font-bold"><a href='https://x.com/LiquidoAndre ' target="_blank" rel="noreferrer">@LiquidoAndre</a> <FaArrowUpRightFromSquare className='w-4 h-4 ml-2 text-slate-400 '/></h4>
    
</div>
  </div>
  
  <div className="flex items-center  p-4 rounded-lg min-w-[70px]">
    <img className="rounded-lg w-16 h-16 mr-4" src={contact5} alt="React Js" />
    <div className='flex-grow'> 
    <p className='text-md mb-[-10px] font-semibold text-slate-400'>View my projects on GitHub</p>
    <h4 className="flex items-center text-lg text-slate-400 font-bold"><a href='https://github.com/adrcstro '  target="_blank" rel="noreferrer">adrcstro</a> <FaArrowUpRightFromSquare className='w-4 h-4 ml-2 text-slate-400 '/></h4>
    
</div>
  </div>
  
  <div className="flex items-center  p-4 rounded-lg min-w-[70px]">
    <img className="rounded-lg w-16 h-16 mr-4" src={contact6} alt="React Js" />
    <div className='flex-grow'> 
    <p className='text-md mb-[-10px] font-semibold text-slate-400'>Connect with me</p>
    <h4 className="flex items-center text-lg text-slate-400 font-bold"><a href='https://www.linkedin.com/in/castro-andre-thomas-liquido-916628248/' target="_blank" rel="noreferrer">Castro Andre Thomas liquido</a> <FaArrowUpRightFromSquare className='w-4 h-4 ml-2 text-slate-400 '/>
</h4>
    
</div>
  </div>
  
  <div className="flex items-center  p-4 rounded-lg min-w-[70px]">
    <img className="rounded-lg w-16 h-16 mr-4" src={contact7} alt="React Js" />
    <div className='flex-grow'> 
    <p className='text-md mb-[-10px] font-semibold text-slate-400'>Chat with me on Skype</p>
    <h4 className="text-lg text-slate-400 font-bold">live:.cid.dc9638a93c52d16a</h4> 
    
</div>
  </div>
  
  <div className="flex items-center  p-4 rounded-lg min-w-[70px]">
    <img className="rounded-lg w-16 h-16 mr-4" src={contact8} alt="React Js" />
    <div className='flex-grow'> 
    <p className='text-md mb-[-10px] font-semibold text-slate-400'>Message me on Telegram</p>
    <h4 className="text-lg text-slate-400 font-bold">+63 9284864322</h4> 
    
</div>
  </div>
  
  <div className="flex items-center  p-4 rounded-lg min-w-[70px]">
    <img className="rounded-lg w-16 h-16 mr-4" src={contact9} alt="React Js" />
    <div className='flex-grow'> 
    <p className='text-md mb-[-10px] font-semibold text-slate-400'>Contact Number (Phillipines +63)</p>
    <h4 className="text-lg text-slate-400 font-bold">+63 9284864322</h4> 
    
</div>
  </div>
  







</div>

  </div>
  )
}

export default Contact