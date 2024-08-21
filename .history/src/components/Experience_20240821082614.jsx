import React from 'react';
import { SiPhp } from "react-icons/si";
import { FaHtml5, FaJs, FaGitAlt, FaBootstrap } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql, SiJquery } from "react-icons/si";

function Experience({ isDarkMode }) {
  return (
    <div className={`w-full ${isDarkMode ? 'bg-gray-900' : 'bg-white'} py-8`}>
      <div className={`max-w-screen-xl mx-auto py-8 px-8 lg:py-16 lg:px-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        <div className="text-center mb-10">
          <h2 className={`text-4xl tracking-tight font-bold ${isDarkMode ? 'text-white' : 'text-primary-800'}`}>
            Experi<span className='text-[#570df8] text-3xl'>ence.</span>
          </h2>
          <p className={`text-md font-bold mt-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Professional Experience</p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          
          {/* Order Placed */}
          <div className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active ${isDarkMode ? 'bg-transparent' : 'bg-white'}`}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-emerald-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 text-emerald-50">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fillRule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>
            <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border ${isDarkMode ? 'border-gray-600 bg-gray-800' : 'border-slate-200'} shadow`}>
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>ResiQuest <span className='text-slate-500 text-sm'>(Automated Document Request Management System)</span></div>
                <time className="font-caveat font-medium text-indigo-500">2023/2024</time>
              </div>
              <div className={`text-slate-500 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                <div className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Role: <span className='text-slate-500 text-sm'>Full Stack Developer</span></div>
                <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Description:</h3>
                <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>ResiQuest: An Automated Document Request Management System is a software solution designed to streamline and automate the process of requesting, managing, and tracking documents in residential or organizational settings.</p>
                <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Technology Used:</h3>
                <div className='flex p-2 gap-2'>
                  <SiPhp className='w-10 h-10' />
                  <FaHtml5 className='w-10 h-10' />
                  <IoLogoCss3 className='w-10 h-10' />
                  <FaJs className='w-10 h-10' />
                  <RiTailwindCssFill className='w-10 h-10' />
                  <SiMysql className='w-10 h-10' />
                  <SiJquery className='w-10 h-10' />
                  <FaGitAlt className='w-10 h-10' />
                </div>
              </div>
            </div>
          </div>

          {/* Order Shipped */}
          <div className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active ${isDarkMode ? 'bg-transparent' : 'bg-white'}`}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-emerald-500 shadow shrink-0 md:order-1 md:group-even:translate-x-1/2 text-emerald-50">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fillRule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>
            <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border ${isDarkMode ? 'border-gray-600 bg-gray-800' : 'border-slate-200'} shadow`}>
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>BEANtoCUP <span className='text-slate-500 text-sm'>(A Coffee Shop Order and Tracking Management System)</span></div>
                <time className="font-caveat font-medium text-indigo-500">2022/2023</time>
              </div>
              <div className={`text-slate-500 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                <div className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Role: <span className='text-slate-500 text-sm'>Full Stack Developer</span></div>
                <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Description:</h3>
                <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>BEANtoCUP: A Coffee Shop Order and Tracking Management System is a comprehensive solution for managing coffee shop operations, including order processing, inventory tracking, and customer management.</p>
                <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Technology Used:</h3>
                <div className='flex p-2 gap-2'>
                  <SiPhp className='w-10 h-10' />
                  <FaHtml5 className='w-10 h-10' />
                  <IoLogoCss3 className='w-10 h-10' />
                  <FaJs className='w-10 h-10' />
                  <SiMysql className='w-10 h-10' />
                  <FaBootstrap className='w-10 h-10' />
                  <SiJquery className='w-10 h-10' />
                  <FaGitAlt className='w-10 h-10' />
                </div>
              </div>
            </div>
          </div>

          {/* In Transit */}
          <div className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active ${isDarkMode ? 'bg-transparent' : 'bg-transparent'}`}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-emerald-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 text-emerald-50">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fillRule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>
            <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border ${isDarkMode ? 'border-gray-600 bg-gray-800' : 'border-slate-200'} shadow`}>
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>LittleWiz <span className='text-slate-500 text-sm'>(LittleWiz Coffee Shop)</span></div>
                <time className="font-caveat font-medium text-indigo-500">2021/2022</time>
              </div>
              <div className={`text-slate-500 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                <div className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Role: <span className='text-slate-500 text-sm'>Full Stack Developer</span></div>
                <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Description:</h3>
                <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>LittleWiz Coffee Shop: A web application designed to streamline the coffee shop operations, enabling easy order processing and customer management.</p>
                <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Technology Used:</h3>
                <div className='flex p-2 gap-2'>
                  <SiPhp className='w-10 h-10' />
                  <FaHtml5 className='w-10 h-10' />
                  <IoLogoCss3 className='w-10 h-10' />
                  <FaJs className='w-10 h-10' />
                  <RiTailwindCssFill className='w-10 h-10' />
                  <SiMysql className='w-10 h-10' />
                  <FaBootstrap className='w-10 h-10' />
                  <FaGitAlt className='w-10 h-10' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
