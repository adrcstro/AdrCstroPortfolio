import React from 'react';

function Experience() {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-8 lg:py-16 lg:px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl tracking-tight font-bold text-primary-800">
          Experi<span className='text-[#570df8] text-3xl'>ence.</span>
        </h2>
        <p className='text-md font-bold mt-2 text-slate-400'>Professional Experience</p>
      </div>

      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        
        {/* Order Placed */}
        <div className="relative flex items-start md:items-center group">
          <div className="absolute -left-5 top-0 md:static md:flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 text-white border-2 border-white shadow-md">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
              <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
            </svg>
          </div>
          <div className="w-full md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow md:ml-[3rem]">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">Order Placed</div>
              <time className="font-caveat font-medium text-indigo-500">08/06/2023</time>
            </div>
            <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
          </div>
        </div>
        
        {/* Order Shipped */}
        <div className="relative flex items-start md:items-center group">
          <div className="absolute -left-5 top-0 md:static md:flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 text-white border-2 border-white shadow-md">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
              <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
            </svg>
          </div>
          <div className="w-full md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow md:ml-[3rem] md:mr-auto">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">Order Shipped</div>
              <time className="font-caveat font-medium text-indigo-500">09/06/2023</time>
            </div>
            <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
          </div>
        </div>
        
        {/* In Transit */}
        <div className="relative flex items-start md:items-center group">
          <div className="absolute -left-5 top-0 md:static md:flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 text-white border-2 border-white shadow-md">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
              <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
            </svg>
          </div>
          <div className="w-full md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow md:ml-[3rem]">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">In Transit</div>
              <time className="font-caveat font-medium text-indigo-500">10/06/2023</time>
            </div>
            <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
          </div>
        </div>
        
        {/* Out for Delivery */}
        <div className="relative flex items-start md:items-center group">
          <div className="absolute -left-5 top-0 md:static md:flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 text-white border-2 border-white shadow-md">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
              <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
            </svg>
          </div>
          <div className="w-full md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow md:ml-[3rem] md:mr-auto">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">Out for Delivery</div>
              <time className="font-caveat font-medium text-indigo-500">12/06/2023</time>
            </div>
            <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
          </div>
        </div>
        
        {/* Delivered */}
        <div className="relative flex items-start md:items-center group">
          <div className="absolute -left-5 top-0 md:static md:flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-slate-300 text-slate-500 border-2 border-white shadow-md">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
              <path fillRule="nonzero" d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
            </svg>
          </div>
          <div className="w-full md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow md:ml-[3rem]">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">Delivered</div>
              <time className="font-caveat font-medium text-amber-500">Exp. 12/08/2023</time>
            </div>
            <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
