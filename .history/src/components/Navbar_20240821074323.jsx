import React from 'react';
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";

function Navbar({ isDarkMode, toggleTheme }) {
  return (
    <div className={`navbar shadow-lg sticky top-0 z-50 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-base-100 text-black'}`}>
      <div className="navbar-start">
        <div className="dropdown">
          {/* ...Dropdown Content... */}
        </div>
      </div>

      <div className="navbar-end mr-2">
        {isDarkMode ? (
          <IoMoonSharp className='w-5 h-5 cursor-pointer' onClick={toggleTheme} />
        ) : (
          <IoSunnySharp className='w-5 h-5 cursor-pointer' onClick={toggleTheme} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
