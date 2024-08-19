import React from 'react'
import profile from '../assets/Profilefolio.jpg'
function About() {
  return (
    <div className='w-full bg-white py-16 px-4'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <img className='w-[350px] mx-auto my-4' src={profile} alt="/"/>
    <div className='flex flex-col justify-center'>
    <p className='text-[#00df9a] text-lg font-bold'>About me</p>
    <h1 className='md:text-4xl sm:text-3xl text-xl font-bold py-2'>Manage Data Analytics</h1>
    <p className='text-justify'>Analytics involves the systematic analysis of data to uncover patterns,
     trends, and insights that can inform decision-making. By leveraging various 
     techniques such as statistical analysis, data mining, and predictive modeling,
      analytics helps organizations transform raw data into actionable knowledge. 
      This process is essential for optimizing business strategies, enhancing customer 
      experiences, and driving innovation. Whether applied in marketing, finance, healthcare,
       or any other field, analytics empowers companies to make data-driven decisions,
        ultimately leading to more effective and efficient outcomes.</p>
        <button className='text-[#00df9a] bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 '>Get Started</button>
    </div>
        </div>
        </div>
  )
}

export default About