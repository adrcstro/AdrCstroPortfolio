import React from 'react'
import { TERipple } from "tw-elements-react";

function Experience() {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-8 lg:py-16 lg:px-6">
    <div className="text-center mb-10">
        <h2 className="text-4xl tracking-tight font-bold text-primary-800">Experi<span className='text-[#570df8] text-3xl'>ence.</span></h2>
        <p className='text-md font-bold mt-2 text-slate-400'>Professional Experience</p>
    </div>

    <h3 className="mb-6 ml-3 text-2xl font-bold">Latest News</h3>

    
    <ol className="border-l border-neutral-300 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">
          {/* <!--First item--> */}
          <li className='bg-slate-200'>
            <div className="flex-start flex items-center pt-2 md:block md:pt-0">
              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
              <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
                01.07.2021
              </p>
            </div>
            <div className="ml-4 mt-2 pb-5 md:ml-0">
              <h4 className="mb-1.5 text-xl font-semibold">
                Title of section 1
              </h4>
              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper, et elementum lorem ornare.
                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                sodales vehicula.
              </p>
            </div>
          </li>
          {/* <!--Second item--> */}
          <li>
            <div className="flex-start flex items-center pt-2 md:block md:pt-0">
              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
              <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
                13.09.2021
              </p>
            </div>
            <div className="ml-4 mt-2 pb-5 md:ml-0">
              <h4 className="mb-1.5 text-xl font-semibold">
                Title of section 2
              </h4>
              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                Libero expedita explicabo eius fugiat quia aspernatur autem
                laudantium error architecto recusandae natus sapiente sit nam
                eaque, consectetur porro molestiae ipsam an deleniti.
              </p>
            </div>
          </li>
          {/* <!--Third item--> */}
          <li>
            <div className="flex-start flex items-center pt-2 md:block md:pt-0">
              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
              <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
                25.11.2021
              </p>
            </div>
            <div className="ml-4 mt-2 pb-5 md:ml-0">
              <h4 className="mb-1.5 text-xl font-semibold">
                Title of section 3
              </h4>
              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                Voluptatibus temporibus esse illum eum aspernatur, fugiat
                suscipit natus! Eum corporis illum nihil officiis tempore.
                Excepturi illo natus libero sit doloremque, laborum molestias
                rerum pariatur quam ipsam necessitatibus incidunt, explicabo.
              </p>
            </div>
          </li>
        </ol>

</div>
  )
}

export default Experience