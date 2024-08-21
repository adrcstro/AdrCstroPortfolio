import React from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaHandsClapping } from "react-icons/fa6";

function Hero({ isDarkMode }) {
  return (
    <div className={`hero min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          <div className='mt-3'>
            <h3 className={`font-semibold text-md inline-flex items-center px-4 py-1 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-slate-200'}`}>
              Hi 
              <span className='ml-2'>
                <FaHandsClapping className='w-5 h-5 mr-2'/>
              </span> 
              I'm Andre Castro
            </h3>
          </div>
          <h1 className="text-5xl lg:text-6xl md:text-3xl font-bold mt-4">Full Stack Web Developer based in Philippines</h1>
          <div className="flex flex-wrap justify-between py-6 px-4 md:px-8 lg:px-16">
            {[
              { value: '+2.5', label: 'Years of Experience' },
              { value: '+10', label: 'Accomplished Project' },
              { value: '+50k', label: 'Lines of Code Written' },
              { value: '+2k', label: 'Cups of Coffee Consumed' }
            ].map((item) => (
              <div key={item.label} className="flex items-center space-x-2 shrink-0 mt-2">
                <p className={`font-semibold rounded-lg py-2 px-2 ${isDarkMode ? 'bg-gray-700' : 'bg-slate-200'}`}>{item.value}</p>
                <p className="text-sm font-semibold text-start">{item.label}</p>
              </div>
            ))}
          </div>
          <div className='justify-between'>  
            <button className="btn btn-primary mr-2 shadow-lg rounded-full px-8">
              <IoDocumentTextOutline className='w-5 h-5'/>Resume
            </button>
            <button className={`btn btn-transparent shadow-lg border rounded-full px-8 ${isDarkMode ? 'border-white' : 'border-gray-900'}`}>
              <AiOutlineMessage className='w-5 h-5' />Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
