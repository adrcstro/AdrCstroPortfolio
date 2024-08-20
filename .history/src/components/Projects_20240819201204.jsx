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
    <div className="w-full p-2 rounded-lg shadow-xl lg:flex lg:max-w-lg">
            <img
                className="object-cover w-full lg:w-40 lg:h-40"
                src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                alt="image"
            />
            <div className="pl-2">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                    react tailwind horizontal card image
                </h4>
                <p className="mb-2 leading-normal">
                    react tailwind css horizontal card with image It is a long
                    established fact that a reader will be distracted by the
                    readable content.
                </p>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                    Read more
                </button>
            </div>
        </div>

  </div>
  )
}

export default Projects