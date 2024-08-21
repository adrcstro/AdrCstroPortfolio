import React from 'react'

function PortfolioFooter({isDarkMode}) {
  return (
  
<footer className="bg-neutral-100  text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200">
<div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} w-full`}>
  <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500">
    <div className="flex justify-center items-center lg:block text-center">
      <h1 className='text-slate-400 text-center font-semibold text-lg'> "An investment in knowledge pays the best interest."<span className='text-sm'>-Benjamin Franklin</span></h1>
    </div>
    {/* <!-- Social network icons container --> */}
  </div>

  {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
  <div className="mx-6 py-10 text-center md:text-left">
    <div className="flex flex-col gap-4 items-center md:flex-row md:gap-16 md:justify-center">
      <a href="#link1" className="text-slate-500 font-bold hover:underline">Home</a>
      <a href="#link2" className="text-slate-500 font-bold hover:underline">About</a>
      <a href="#link3" className="text-slate-500 font-bold hover:underline">Tools & Technologies</a>
      <a href="#link4" className="text-slate-500 font-bold hover:underline">Experience</a>
      <a href="#link5" className="text-slate-500 font-bold hover:underline">Project</a>
      <a href="#link6" className="text-slate-500 font-bold hover:underline">Contact</a>
    </div>
  </div>

  {/* <!-- Copyright section --> */}
  
  <div className="bg-slate-800 p-2 text-center text-slate-400 ">
    <span>© 2023 Copyright</span>
    <a
      className="font-semibold text-slate-500   ml-2"
      href="https://tw-elements.com/"
    >Andre Castro</a>
  </div>
  </div>
</footer>

  )
}

export default PortfolioFooter