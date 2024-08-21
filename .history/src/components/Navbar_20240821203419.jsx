import React from 'react';
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";
import { Link, animateScroll as scroll } from 'react-scroll';
function Navbar({ isDarkMode, toggleTheme }) {
  return (
    <div className={`navbar bg-base-100 shadow-lg sticky top-0 z-50 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-base-100 text-black'}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${isDarkMode ? 'text-white' : 'text-black'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-base-100 text-slate-500'}`}
          >
            <li className={`text-sm font-semibold ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-300'}`}>
              <Link to="Home" spy={true} smooth={true}  duration={500}>Home</Link>
            </li>
            <li className={`text-sm font-semibold ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-300'}`}>
            <Link to="About" spy={true} smooth={true}  duration={500}>Home</Link>
            </li>
            <li className={`text-sm font-semibold ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-300'}`}>
              <a href="/tools-technologies">Tools & Technologies</a>
            </li>
            <li className={`text-sm font-semibold ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-300'}`}>
              <a href="/projects">Projects</a>
            </li>
            <li className={`text-sm font-semibold ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-300'}`}>
              <a href="/education">Education</a>
            </li>
            <li className={`text-sm font-semibold ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-300'}`}>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-end mr-2">
        {isDarkMode ? (
          <IoMoonSharp className='w-5 h-5 cursor-pointer  ' onClick={toggleTheme} />
        ) : (
          <IoSunnySharp className='w-5 h-5 cursor-pointer' onClick={toggleTheme} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
