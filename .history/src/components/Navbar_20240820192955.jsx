import React from 'react';
import { IoSunnySharp } from "react-icons/io5";
function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
     <li><a href="/about">About</a></li>
<li><a href="/tools-technologies">Tools & Technologies</a></li>
<li><a href="/projects">Projects</a></li>
<li><a href="/education">Education</a></li>
<li><a href="/contact">Contact</a></li>

          </ul>
        </div>
      </div>

      <div className="navbar-end">
      <IoSunnySharp className='w-5 h5' />
      </div>

      
    </div>
  );
}

export default Navbar;
