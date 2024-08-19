import React from 'react'
import profile from '../assets/Profilefolio.jpg'
import { FcIdea } from "react-icons/fc";
function About() {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-8 lg:py-16 lg:px-6">
    <div className="text-center mb-10">
        <h2 className="text-4xl tracking-tight font-bold text-primary-800">About Me!</h2>
    </div>

    <div className="flex flex-col md:flex-row">
        {/* can help image */}
        <div className="mr-0 md:mr-8 mb-6 md:mb-0">
    <img className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[300px] rounded-full mx-auto" src={profile} alt="can_help_banner" />
</div>


        {/* end can help image */}

        <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div className="w-full sm:w-1/2 mb-4 px-2">
                <div className="h-full py-4 px-6 border border-[#570df8] border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="text-2xl font-bold text-md mb-6">Personal Identification</h3>
                    <p className="text-md text-slate-500">
                        Hi! Im Andre Thomas Castro and im a Full stack web developer I'm 21 years old and Currently Living here in Antipolo,Philippines.
                    </p>
                </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2">
                <div className="h-full py-4 px-6 border border-[#570df8] border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="flex text-2xl font-bold text-md mb-6">Interest & Hobbies <FcIdea className='ml-2 w-6 h-6'/></h3>
                    <p className="text-sm">
                        Our website is designed with a mobile-first approach, offering a seamless browsing experience across all devices, including smartphones and tablets.
                    </p>
                </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2">
                <div className="h-full py-4 px-6 border border-[#570df8] border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="text-2xl font-bold text-md mb-6">Goals and Aspirations</h3>
                    <p className="text-sm">
                        Our U.S.-based customer support team is available around the clock to answer any questions, resolve any issues, and provide helpful solutions. Whether it's through email, phone, or live chat, we're always here to support you.
                    </p>
                </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2">
                <div className="h-full py-4 px-6 border border-[#570df8] border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="text-2xl font-bold text-md mb-6">Skills and Abilities</h3>
                    <p className="text-sm">
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