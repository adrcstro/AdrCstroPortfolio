import React from 'react'

function PortfolioFooter() {
  return (
<footer
      className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
    

      {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 py-2 text-center md:text-left">
    <div className="flex flex-col gap-4 items-center md:flex-row md:gap-16 md:justify-center">
        <a href="#link1" className="text-blue-500 hover:underline">Home</a>
        <a href="#link2" className="text-blue-500 hover:underline">About</a>
        <a href="#link3" className="text-blue-500 hover:underline">Tools & Technologies</a>
        <a href="#link4" className="text-blue-500 hover:underline">Experience</a>
        <a href="#link5" className="text-blue-500 hover:underline">Project</a>
        <a href="#link6" className="text-blue-500 hover:underline">Contact</a>
    </div>
</div>


      {/* <!--Copyright section--> */}
      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
        <span>© 2023 Copyright:</span>
        <a
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          href="https://tw-elements.com/"
        >TW Elements</a>
      </div>
    </footer>
  )
}

export default PortfolioFooter