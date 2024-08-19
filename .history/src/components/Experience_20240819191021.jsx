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

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        
        {/* Order Placed */}
        <div className="relative flex items-center justify-between md:justify-start md:flex-row group">
       
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">Order Placed</div>
              <time className="font-caveat font-medium text-indigo-500">08/06/2023</time>
            </div>
            <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
          </div>
        </div>
        
        {/* Order Shipped */}
        <div className="relative flex items-center justify-between md:justify-start md:flex-row-reverse group">
        
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">Order Shipped</div>
              <time className="font-caveat font-medium text-indigo-500">09/06/2023</time>
            </div>
            <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
          </div>
        </div>
        
        {/* In Transit */}
        <div className="relative flex items-center justify-between md:justify-start md:flex-row group">
         
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">In Transit</div>
              <time className="font-caveat font-medium text-indigo-500">10/06/2023</time>
            </div>
            <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
          </div>
        </div>
        
        {/* Out for Delivery */}
        <div className="relative flex items-center justify-between md:justify-start md:flex-row-reverse group">
         
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">Out for Delivery</div>
              <time className="font-caveat font-medium text-indigo-500">12/06/2023</time>
            </div>
            <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
          </div>
        </div>
        
        {/* Delivered */}
        <div className="relative flex items-center justify-between md:justify-start md:flex-row group">
        
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
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
