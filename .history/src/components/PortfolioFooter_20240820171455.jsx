import React from 'react'

function PortfolioFooter() {
  return (
<footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-8">
    <a className="text-sm  font-semibold link-hover">Home</a>
    <a className="text-sm  font-semibold link-hover">About</a>
    <a className="text-sm  font-semibold link-hover">Tools & Technologies</a>
    <a className="text-sm  font-semibold link-hover">Projects</a>
    <a className="text-sm  font-semibold link-hover">Projects</a>
    <a className="text-sm  font-semibold link-hover">Education</a>
    <a className="text-sm  font-semibold link-hover">Contact</a>
  </nav>
  <nav>
  
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Andre Thomas Castro</p>
  </aside>
</footer>

  )
}

export default PortfolioFooter