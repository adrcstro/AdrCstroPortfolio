import React, { useState } from 'react';
import { IoSunnySharp } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`navbar bg-base-100 shadow-lg sticky top-0 z-50 ${isDarkMode ? 'bg-gray-700' : 'bg-base-100'}`}>
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
            className={`menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-base-100 text-slate-500'}`}
          >
            <li className={`text-sm font-semibold ${isDarkMode ? 'hover:text-gray-300' : 'hover:text-black'}`}>
              <a href="/home">Home</a>
            </li>
            <li className={`text-sm font-semibold ${isDarkMode ? 'hover:text-gray-300' : 'hover:text-black'}`}>
              <a href="/about">About</a>
            </li>
            <li className={`text-sm font-semibold ${isDarkMode ? 'hover:text-gray-300' : 'hover:text-black'}`}>
              <a href="/tools-technologies">Tools & Technologies</a>
            </li>
            <li className={`text-sm font-semibold ${isDarkMode ? 'hover:text-gray-300' : 'hover:text-black'}`}>
              <a href="/projects">Projects</a>
            </li>
            <li className={`text-sm font-semibold ${isDarkMode ? 'hover:text-gray-300' : 'hover:text-black'}`}>
              <a href="/education">Education</a>
            </li>
            <li className={`text-sm font-semibold ${isDarkMode ? 'hover:text-gray-300' : 'hover:text-black'}`}>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-end mr-2">
        {isDarkMode ? (
          <IoMoonSharp className='w-5 h-5 cursor-pointer text-white' onClick={toggleTheme} />
        ) : (
          <IoSunnySharp className='w-5 h-5 cursor-pointer' onClick={toggleTheme} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
