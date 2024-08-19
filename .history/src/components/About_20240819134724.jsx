import React from 'react'
import profile from '../assets/Profilefolio.jpg'
import { FcIdea } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";
import { FcManager } from "react-icons/fc";
import { FcServices } from "react-icons/fc";
function About() {
  return (
    <div className='w-full bg-white py-16 px-4'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <img className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[350px] rounded-full mx-auto" src={profile} alt="can_help_banner" />
    <div className='flex flex-col justify-center'>
    
    <div className="w-full sm:w-1/2 mb-4 px-2">
                <div className="h-full py-4 px-6 border border-[#570df8] border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="flex text-2xl font-bold text-md mb-6">Personal Identification<FcManager className='ml-2 w-6 h-7' /></h3>
                    <p className="text-sm text-slate-500">
                        Hi! I'm Andre Thomas Castro and I'm a Full stack web developer I'm 21 years old and Currently Living here in Antipolo,Philippines.
                    </p>
                </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2">
                <div className="h-full py-4 px-6 border border-[#570df8] border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="flex text-2xl font-bold text-md mb-6">Interest & Hobbies <FcIdea className='ml-2 w-6 h-7'/></h3>
                    <p className="text-sm text-slate-500">
                        Our website is designed with a mobile-first approach, offering a seamless browsing experience across all devices, including smartphones and tablets.
                    </p>
                </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2">
                <div className="h-full py-4 px-6 border border-[#570df8] border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="flex text-2xl font-bold text-md mb-6">Goals and Aspirations <FcComboChart className='ml-2 w-6 h-7'/></h3>
                    <p className="text-sm text-slate-500">
                        Our U.S.-based customer support team is available around the clock to answer any questions, resolve any issues, and provide helpful solutions. Whether it's through email, phone, or live chat, we're always here to support you.
                    </p>
                </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2">
                <div className="h-full py-4 px-6 border border-[#570df8] border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="flex text-2xl font-bold text-md mb-6">Skills and Abilities <FcServices className='ml-2 w-6 h-7' /></h3>
                    <p className="text-sm text-slate-500">
                        We use cutting-edge security measures to protect our customers' sensitive information and ensure the safety of all transactions made on our site.
                    </p>
                </div>
            </div>



    </div>
        </div>
        </div>
  )
}

export default About