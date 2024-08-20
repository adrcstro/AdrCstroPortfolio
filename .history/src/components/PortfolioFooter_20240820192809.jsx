import React from 'react'

function PortfolioFooter() {
  return (
<footer className="footer footer-center bg-base-300 text-base-content p-4">
<div className="navbar-center">
      <a href="/logo" className="text-4xl font-bold">Adr<span className='text-[#570df8]  text-3xl'>cstro</span></a>
      </div>
<div>
  <ul className='flex gap-8'>
    <li className='text-slate-500 font-semibold '>Home</li>
    <li className='text-slate-500 font-semibold '>Home</li>
    <li className='text-slate-500 font-semibold '>Home</li>
    <li className='text-slate-500 font-semibold '>Home</li>
    <li className='text-slate-500 font-semibold '>Home</li>
    <li className='text-slate-500 font-semibold '>Home</li>
  </ul>
</div>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
  )
}

export default PortfolioFooter