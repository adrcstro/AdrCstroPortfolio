import React from 'react';
import { SiPhp } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiJquery } from "react-icons/si";

function Experience() {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-8 lg:py-16 lg:px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl tracking-tight font-bold text-primary-800">
          Experi<span className='text-[#570df8] text-3xl'>ence.</span>
        </h2>
        <p className='text-md font-bold mt-2 text-slate-400'>Professional Experience</p>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        
        {/* Order Placed */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
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
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">ResiQuest <span className='text-slate-500 text-sm'>(Automated Document Request Management System)</span></div>
              <time className="font-caveat font-medium text-indigo-500">2023/2024</time>
            </div>
            <div className="text-slate-500">
            <div className="font-bold text-slate-900">Role: <span className='text-slate-500 text-sm'>Full Stack Developer</span></div>
            <h3 className='font-bold text-black'>Description:</h3>
             <p className='text-sm text-slate-500'>ResiQuest: An Automated Document Request Management System is a software solution designed to streamline and automate the process of requesting, managing, and tracking documents in residential or organizational settings.</p>
             <h3 className='font-bold text-black'>Technology Used:</h3>
             <div className='flex p-2 gap-2'>
             <SiPhp className='w-10 h-10'/>
             <FaHtml5  className='w-10 h-10'/>
             <IoLogoCss3  className='w-10 h-10'/>
             <FaJs className='w-10 h-10'/>
             <RiTailwindCssFill className='w-10 h-10'/>
             <SiMysql className='w-10 h-10'/>
             <SiJquery className='w-10 h-10'/>
             <FaGitAlt className='w-10 h-10'/>
             </div>
            </div>
          </div>
        </div>

        {/* Order Shipped */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
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
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
            <div className="font-bold text-slate-900">BEANtoCUP <span className='text-slate-500 text-sm'>(A Coffee Shop Order and Tracking Management System)</span></div>
              <time className="font-caveat font-medium text-indigo-500">2022/2023</time>
            </div>
            <div className="text-slate-500">
            <div className="font-bold text-slate-900">Role: <span className='text-slate-500 text-sm'>Full Stack Developer</span></div>
            <h3 className='font-bold text-black'>Description:</h3>
             <p className='text-sm text-slate-500'>BEANtoCUP: A Coffee Shop Order and Tracking Management System is a comprehensive solution for managing coffee shop operations, including order processing, inventory tracking, and customer management.</p>
             <h3 className='font-bold text-black'>Technology Used:</h3>
             <div className='flex p-2 gap-2'>
             <SiPhp className='w-10 h-10'/>
             <FaHtml5  className='w-10 h-10'/>
             <IoLogoCss3  className='w-10 h-10'/>
             <FaJs className='w-10 h-10'/>
             <SiMysql className='w-10 h-10'/>
             <FaBootstrap className='w-10 h-10'/>
             <SiJquery className='w-10 h-10'/>
             <FaGitAlt className='w-10 h-10'/>
             </div>
            </div>
          </div>
        </div>

        {/* In Transit */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
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
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">Tittle</div>
              <time className="font-caveat font-medium text-indigo-500">10/06/2023</time>
            </div>
            <div className="text-slate-500">
            <div className="font-bold text-slate-900">Role: <span className='text-slate-500 text-sm'></span></div>
            <h3 className='font-bold text-black'>Description:</h3>
             <p className='text-sm text-slate-500'></p>
             <h3 className='font-bold text-black'>Technology Used:</h3>
           
            </div>
          </div>
        </div>

        {/* Out for Delivery */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
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
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
            <div className="font-bold text-slate-900">Tittle</div>
              <time className="font-caveat font-medium text-indigo-500">12/06/2023</time>
            </div>
            <div className="text-slate-500">
            <div className="font-bold text-slate-900">Role: <span className='text-slate-500 text-sm'></span></div>
            <h3 className='font-bold text-black'>Description:</h3>
             <p className='text-sm text-slate-500'></p>
             <h3 className='font-bold text-black'>Technology Used:</h3>
           
            </div>
          </div>
        </div>

        {/* Delivered */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 text-slate-500">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
            >
              <path
                fillRule="nonzero"
                d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z"
              />
            </svg>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
            <div className="font-bold text-slate-900">Tittle</div>
              <time className="font-caveat font-medium text-indigo-500">Exp. 12/08/2023</time>
            </div>
            <div className="text-slate-500">
            <div className="font-bold text-slate-900">Role: <span className='text-slate-500 text-sm'></span></div>
            <h3 className='font-bold text-black'>Description:</h3>
             <p className='text-sm text-slate-500'></p>
             <h3 className='font-bold text-black'>Technology Used:</h3>
           
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Experience;
