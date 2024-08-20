import React from 'react'

function PortfolioFooter() {
  return (
<footer
      className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-center">
  <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
  <div className="flex justify-center items-center w-full lg:w-auto">
    <h1 className='text-slate-400 font-semibold text-center'>
      Feel free to contact me for Web development projects
    </h1>
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


      {/* <!--Copyright section--> */}
      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
        <span>© 2023 Copyright:</span>
        <a
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          href="https://tw-elements.com/"
        >Andre Castro</a>
      </div>
    </footer>
  )
}

export default PortfolioFooter