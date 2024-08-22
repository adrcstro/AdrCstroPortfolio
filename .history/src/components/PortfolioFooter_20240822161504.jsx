import React from 'react'
import { Link } from 'react-scroll';
function PortfolioFooter({isDarkMode}) {
  return (
  
<footer name="Footer" className="bg-neutral-100  text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200">
<div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} w-full`}>
  <div className="flex items-center justify-center  p-6 dark:border-neutral-500">
    <div className="flex justify-center items-center lg:block text-center">
      <h1 className='text-slate-400 text-center font-semibold text-lg'> "An investment in knowledge pays the best interest."<span className='text-sm'>-Benjamin Franklin</span></h1>
    </div>
    {/* <!-- Social network icons container --> */}
  </div>

  {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
 

  <div className={`py-6 text-center md:text-left ${isDarkMode ? 'bg-gray-800' : 'text-primary-800'}`}>
  <div className="flex flex-col gap-4 items-center md:flex-row md:gap-16 md:justify-center list-none">
  <li className="text-slate-400 font-bold hover:underline">  <Link to="Home" spy={true} smooth={true}   duration={500}>Home</Link></li>
  <li className="text-slate-400 font-bold hover:underline"> <Link to="About" spy={true} smooth={true} offset={-150}  duration={500}>About</Link></li>
  <li className="text-slate-400 font-bold hover:underline"><Link to="Technology" spy={true} smooth={true} offset={-120}  duration={500}>Tools & Technologies</Link></li>
  <li className="text-slate-400 font-bold hover:underline"> <Link to="Experience" spy={true} smooth={true} offset={-100}  duration={500}>Experience</Link></li>
  <li className="text-slate-400 font-bold hover:underline"><Link to="Projects" spy={true} smooth={true} offset={-90}  duration={500}>Projects</Link></li>
  <li className="text-slate-400 font-bold hover:underline"><Link to="Contact" spy={true} smooth={true} offset={-70}  duration={500}>Contact</Link></li>
</div>

  </div>

  {/* <!-- Copyright section --> */}

  <div className={` p-2 text-center text-slate-400 ${isDarkMode ? 'bg-gray-800' : 'text-primary-800'}`}>
    <span>© 2023 Copyright</span>
    <a
      className="font-semibold text-slate-400 ml-2"
      href="https://tw-elements.com/"
    >Andre Castro</a>
  </div>
  </div>
</footer>

  )
}

export default PortfolioFooter