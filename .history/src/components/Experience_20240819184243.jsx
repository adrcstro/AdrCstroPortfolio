import React from 'react'
import { TERipple } from "tw-elements-react";




function Experience() {
  const timelineItems = [
    {
      title: 'Order Placed',
      date: '08/06/2023',
      description: 'Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.',
      isActive: true,
    },
    {
      title: 'Order Shipped',
      date: '09/06/2023',
      description: 'Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.',
      isActive: true,
    },
    {
      title: 'In Transit',
      date: '10/06/2023',
      description: 'Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.',
      isActive: true,
    },
    {
      title: 'Out for Delivery',
      date: '12/06/2023',
      description: 'Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.',
      isActive: true,
    },
    {
      title: 'Delivered',
      date: 'Exp. 12/08/2023',
      description: 'Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.',
      isActive: false,
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-8 lg:py-16 lg:px-6">
    <div className="text-center mb-10">
        <h2 className="text-4xl tracking-tight font-bold text-primary-800">Experi<span className='text-[#570df8] text-3xl'>ence.</span></h2>
        <p className='text-md font-bold mt-2 text-slate-400'>Professional Experience</p>
    </div>

    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
      {timelineItems.map((item, index) => (
        <div
          key={index}
          className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${
            item.isActive ? 'is-active' : ''
          }`}
        >
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 shadow shrink-0 md:order-1 ${
              index % 2 === 0 ? 'md:group-odd:-translate-x-1/2' : 'md:group-even:translate-x-1/2'
            } ${
              item.isActive ? 'bg-emerald-500 text-emerald-50' : 'text-slate-500'
            }`}
          >
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
            >
              <path
                fillRule="nonzero"
                d={index === timelineItems.length - 1 
                    ? "M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z"
                    : "M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                }
              />
            </svg>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">{item.title}</div>
              <time className={`font-caveat font-medium ${index === timelineItems.length - 1 ? 'text-amber-500' : 'text-indigo-500'}`}>
                {item.date}
              </time>
            </div>
            <div className="text-slate-500">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
</div>
  )
}

export default Experience