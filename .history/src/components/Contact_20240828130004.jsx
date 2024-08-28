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
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'

function Contact({isDarkMode}) {
  return (

    <div name="Contact" className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} w-full`}>
    <div className="max-w-screen-xl mx-auto py-8 px-8 lg:py-16 lg:px-6">
    <div className="text-center mb-10">
      <motion.h2 
        variants={fadeIn("up",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
      className={`text-4xl tracking-tight font-bold ${isDarkMode ? 'text-white' : 'text-primary-800'}`}>
        Cont<span className='text-[#570df8] text-3xl'>act.</span>
      </motion.h2>
      <motion.p 
        variants={fadeIn("down",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
      className='text-md font-bold mt-2 text-slate-400'>Contact Details & Social Media</motion.p>
    </div>
    
    <motion.div 
    variants={fadeIn("down",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="flex items-center  p-4 rounded-lg min-w-[70px]">
    <img className="rounded-lg w-16 h-16 mr-4" src={contact1} alt="React Js" />
    <div className='flex-grow'> 
    <p className='text-md mb-[-6px] font-semibold text-slate-400'>Email me</p>
    <h4 className="flex items-center text-lg text-slate-400 font-bold">castroandew10@gmail.com <a href="https://mail.google.com/" target="_blank" rel="noreferrer"><FaArrowUpRightFromSquare className='w-4 h-4 ml-2 text-slate-400 transition-transform transform hover:scale-105'/> </a></h4>
    
</div>
  </div>
  
  <div className="flex items-center  p-4 rounded-lg min-w-[70px]">
    <img className="rounded-lg w-16 h-16 mr-4" src={contact2} alt="React Js" />
    <div className='flex-grow'> 
    <p className='text-md mb-[-6px] font-semibold text-slate-400'>Message me</p>
    <h4 className="flex items-center text-lg text-slate-400 font-bold">Andre Thomas Castro<a href="https://www.facebook.com/profile.php?id=100009241129573" target="_blank" rel="noreferrer"><FaArrowUpRightFromSquare className='w-4 h-4 ml-2 text-slate-400 transition-transform transform hover:scale-105 '/></a></h4>
    
</div>
  </div>
  
  <div className="flex items-center  p-4 rounded-lg min-w-[70px]">
    <img className="rounded-lg w-16 h-16 mr-4" src={contact3} alt="React Js" />
    <div className='flex-grow'> 
    <p className='text-md mb-[-6px] font-semibold text-slate-400'>Message me on Instagram</p>
    <h4 className="flex items-center text-lg text-slate-400 font-bold">_adrcstro<a href='https://www.instagram.com/_adrcstro/ ' target="_blank" rel="noreferrer"> <FaArrowUpRightFromSquare className='w-4 h-4 ml-2 text-slate-400 transition-transform transform hover:scale-105 '/></a> </h4>
    
</div>
  </div>
  
  <div className="flex items-center  p-4 rounded-lg min-w-[70px]">
    <img className="rounded-lg w-16 h-16 mr-4" src={contact4} alt="React Js" />
    <div className='flex-grow'> 
    <p className='text-md mb-[-6px] font-semibold text-slate-400'>DM me on X</p>
    <h4 className="flex items-center text-lg text-slate-400 font-bold">@LiquidoAndre<a href='https://x.com/LiquidoAndre ' target="_blank" rel="noreferrer"> <FaArrowUpRightFromSquare className='w-4 h-4 ml-2 text-slate-400 transition-transform transform hover:scale-105 '/></a></h4>
    
</div>
  </div>
  
  <div className="flex items-center  p-4 rounded-lg min-w-[70px]">
    <img className="rounded-lg w-16 h-16 mr-4" src={contact5} alt="React Js" />
    <div className='flex-grow'> 
    <p className='text-md mb-[-6px] font-semibold text-slate-400'>View my projects on GitHub</p>
    <h4 className="flex items-center text-lg text-slate-400 font-bold">adrcstro<a href='https://github.com/adrcstro '  target="_blank" rel="noreferrer"><FaArrowUpRightFromSquare className='w-4 h-4 ml-2 text-slate-400 transition-transform transform hover:scale-105 '/></a> </h4>
    
</div>
  </div>
  
  <div className="flex items-center  p-4 rounded-lg min-w-[70px]">
    <img className="rounded-lg w-16 h-16 mr-4" src={contact6} alt="React Js" />
    <div className='flex-grow'> 
    <p className='text-md mb-[-6px] font-semibold text-slate-400'>Connect with me</p>
    <h4 className="flex items-center text-lg text-slate-400 font-bold">Castro Andre Thomas liquido<a href='https://www.linkedin.com/in/castro-andre-thomas-liquido-916628248/' target="_blank" rel="noreferrer"> <FaArrowUpRightFromSquare className='w-4 h-4 ml-2 text-slate-400 transition-transform transform hover:scale-105 '/></a>
</h4>
    
</div>
  </div>
  
  <div className="flex items-center  p-4 rounded-lg min-w-[70px]">
    <img className="rounded-lg w-16 h-16 mr-4" src={contact7} alt="React Js" />
    <div className='flex-grow'> 
    <p className='text-md mb-[-6px] font-semibold text-slate-400'>Chat with me on Skype</p>
    <h4 className="flex items-center text-lg text-slate-400 font-bold">live:.cid.dc9638a93c52d16a <a href='https://www.skype.com/en/' target="_blank" rel="noreferrer"><FaArrowUpRightFromSquare className='w-4 h-4 ml-2 text-slate-400 transition-transform transform hover:scale-105 '/></a></h4> 
    
</div>
  </div>
  
  <div className="flex items-center  p-4 rounded-lg min-w-[70px]">
    <img className="rounded-lg w-16 h-16 mr-4" src={contact8} alt="React Js" />
    <div className='flex-grow'> 
    <p className='text-md mb-[-6px] font-semibold text-slate-400'>Message me on Telegram</p>
    <h4 className="flex items-center text-lg text-slate-400 font-bold">+63 9284864322 <a href='https://web.telegram.org/' target="_blank" rel="noreferrer"><FaArrowUpRightFromSquare className='w-4 h-4 ml-2 text-slate-400 transition-transform transform hover:scale-105 '/></a></h4> 
    
</div>
  </div>
  
  <div className="flex items-center  p-4 rounded-lg min-w-[70px]">
    <img className="rounded-lg w-16 h-16 mr-4" src={contact9} alt="React Js" />
    <div className='flex-grow'> 
    <p className='text-md mb-[-6px] font-semibold text-slate-400'>Whatsapp(Philippines +63)</p>
    <h4 className="flex items-center text-lg text-slate-400 font-bold">+63 9284864322</h4> 
</div>
  </div>

</motion.div>
  </div>
  </div>
  )
}

export default Contact