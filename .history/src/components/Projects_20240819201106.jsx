import React from 'react'

function Projects() {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-8 lg:py-16 lg:px-6">
    <div className="text-center mb-10">
      <h2 className="text-4xl tracking-tight font-bold text-primary-800">
        Proj<span className='text-[#570df8] text-3xl'>ects.</span>
      </h2>
      <p className='text-md font-bold mt-2 text-slate-400'>Personal Projects & Prototype</p>
    </div>
    <div className={`rounded-lg p-6 shadow-sm ${className}`}>
      <div className="overflow-hidden rounded-lg">
        <img
          className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
          src={thumbnailSrc}
          alt={thumbnailAlt}
        />
      </div>
      <h3 className="pt-5 text-[14px] font-normal text-gray-600 block">
        {heading}
      </h3>
      <p className="font-normal text-gray-500 cursor-pointer text-lg duration-300 transition hover:text-[#FA5252] mt-2">
        {description}
      </p>
    </div>
  );
}

function Card3Presentation() {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 sm:p-8">
      <Card3
        className="bg-[#fcf4ff]"
        heading="Heading"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
        thumbnailSrc="/img/placeholder-1.jpg"
      />
      <Card3
        className="bg-[#fefaf0]"
        heading="Heading"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
        thumbnailSrc="/img/placeholder-1.jpg"
      />
      <Card3
        className="bg-[#f3faff]"
        heading="Heading"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
        thumbnailSrc="/img/placeholder-1.jpg"
      />
    </div>

  </div>
  )
}

export default Projects