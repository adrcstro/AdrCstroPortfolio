import React, { useState, useEffect } from 'react';
import hero from '../../Assets/Hero1.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../../Variants';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import LOGO from '../../Assets/Logo.png';
import Verified1 from '../../Assets/Verified1.png'
function Hero() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); 

  const handleNavigation = (path) => {
    navigate(path);
  };



  // Check if modal was shown before
  useEffect(() => {
    const hasModalBeenShown = localStorage.getItem('modalShown');
    if (!hasModalBeenShown) {
      setShowModal(true);
    }
  }, []);

  const closeModal = async () => {
    try {
      await axios.post('https://phoebe-compass-point-560accfa31d6.herokuapp.com/api/visitor/increment');
      setShowModal(false);
      // Set a flag in localStorage so the modal doesn't show again
      localStorage.setItem('modalShown', 'true');
    } catch (error) {
      console.error('Error incrementing visitor count:', error);
    }
  };

  const AcceptCookies = async () => {
    try {
      await axios.post('https://phoebe-compass-point-560accfa31d6.herokuapp.com/api/visitor/increment');
      setShowModal(false);
      // Set a flag in localStorage so the modal doesn't show again
      localStorage.setItem('modalShown', 'true');
    } catch (error) {
      console.error('Error incrementing visitor count:', error);
    }
  };


  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100">
      <section className="py-10 sm:py-16 lg:py-12">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
    <motion.h1
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="text-3xl font-bold text-black font-serif sm:text-4xl md:text-5xl lg:text-5xl text-center md:text-left"
    >
      Phoebe Compass Point Your Partner in
      <div className="relative inline-flex justify-center md:justify-start">
        <span className="absolute inset-x-0 bottom-0 border-b-[20px] border-[#4ADE80] sm:border-b-[25px] md:border-b-[30px]"></span>
        <h1 className="relative text-3xl font-bold text-black sm:text-5xl md:text-6xl lg:text-6xl">
          Mental Wellness.
        </h1>
      </div>
    </motion.h1>

    <motion.p
  variants={fadeIn("zoom", 0.2)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.7 }}
  className="mt-6 text-sm text-gray-800 text-center sm:text-left sm:text-lg md:text-xl font-montserrat"
>
  At Phoebe Compass Point, we recognize that mental health is essential to a fulfilling life. We offer personalized care tailored to adults 18 and older. If you're ready to explore what’s possible for your well-being, start with a
  <span className="text-gray-800 underline ml-2">Free Initial Consultation</span>. To ensure a smooth experience, <span className='font-semibold'>Headway</span> and <span className='font-semibold'>Zocdoc</span> manage our appointment scheduling and billing services.
</motion.p>





    <div className="grid grid-cols-1 justify-center items-center px-10 mt-4 text-center gap-x-8 gap-y-6 sm:grid-cols-2 md:grid-cols-3 sm:px-0">
  {/* Feature list */}
  <motion.div
    variants={fadeIn('zoom', 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.7 }}
    className="flex items-center justify-center"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-10 w-10 sm:h-12 sm:w-12"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
      />
    </svg>
    <p className="ml-2 text-xs sm:text-sm font-semibold text-gray-800 font-montserrat">
      Improved Mental health
    </p>
  </motion.div>

  <motion.div
    variants={fadeIn('zoom', 0.4)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.7 }}
    className="flex items-center justify-center"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-10 w-10 sm:h-12 sm:w-12"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
    <p className="ml-2 text-xs sm:text-sm font-semibold text-gray-800 font-montserrat">
      Mental health checkups
    </p>
  </motion.div>

  <motion.div
    variants={fadeIn('zoom', 0.6)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.7 }}
    className="flex items-center justify-center"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-10 w-10 sm:h-12 sm:w-12"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"
      />
    </svg>
    <p className="ml-2 text-xs sm:text-sm font-semibold text-gray-800 font-montserrat">
      Secure online support
    </p>
  </motion.div>
</div>



<div className="flex flex-col mt-4 sm:flex-row justify-center lg:justify-start items-center gap-4">
  <button
    className="btn bg-green-600 text-white rounded hover:bg-green-700 font-montserrat w-full sm:w-auto"
    onClick={() => handleNavigation('/Contact')}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-5 w-5 mr-1"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
      />
    </svg>
    Book Virtual Appointment
  </button>

  {/* Image */}
  <a href="https://www.psychologytoday.com/profile/1326276" target="_blank" rel="noopener noreferrer">
    <img 
      src={Verified1} 
      alt="Verified"  
      className="hidden sm:block w-[70%] h-[70%] sm:mt-0 object-contain shadow-md rounded-full" 
      title="Phoebe compass point"
    />
</a>
</div>

            </div>

            {/* Background Image */}
            <div
            >
              <img src={hero} alt="Hero" className="w-full h-auto" />
            </div>
          </div>

          {/* Modal Section */}
          {showModal && (
            <div className="modal modal-open">
  <div className="modal-box w-11/12 max-w-5xl rounded-none p-6 relative">
    <button
      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={closeModal}
    >
      ✕
    </button>

    {/* Logo at the top */}
    <div className="flex items-center justify-center">
      <img
        alt="Logo"
        src={LOGO}
        className="h-16 border-2 border-gray-200 w-auto ml-2 bg-white rounded-lg p-2"
      />
    </div>

    {/* Cookie Notification Content */}
    <div className="mt-4">
      <h2 className="text-2xl font-semibold mb-4 font-serif">We Use Cookies</h2>
      <p className="text-lg text-gray-700 mb-4 font-montserrat">
        We use cookies and similar tracking technologies to enhance your browsing experience,
        provide personalized content, analyze site traffic, and understand how our visitors interact with our site.
        By continuing to use our website, you consent to the placement of these cookies on your device.
      </p>
      <p className="text-lg text-gray-700 mb-4 font-serif">Cookies help us:</p>
      <ul className="list-disc list-inside text-left text-lg text-gray-700 mb-4 font-montserrat">
        <li>Recognize you when you return to our site.</li>
        <li>Remember your preferences and settings.</li>
        <li>Provide enhanced functionality and personalization.</li>
        <li>Improve site performance and offer tailored content based on your browsing behavior.</li>
      </ul>
      <p className="text-lg text-gray-700 font-montserrat">
        By using our site, you agree to our use of cookies.
      </p>
    </div>

    <div className="flex justify-center mt-2">
            <button
              className="btn bg-green-600 border-none text-white rounded hover:bg-green-700 font-montserrat"
              onClick={AcceptCookies}
            >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 mr-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
</svg>
            Accept Cookies
            </button>
          </div>
  </div>
</div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Hero;
