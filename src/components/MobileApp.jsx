import React from 'react';

const MobileApp = () => {
  return (
    <section className="pt-3 px-20 bg-[#1C4670]">
      <div className="container mx-auto px-6 flex justify-around">
        <div className='w-6/12'>
          <h2 className="text-3xl font-bold text-left mb-4 text-white w-9/12 ">Manage Your Services by your Mobile Phone</h2>
          <p className="text-white text-left mb-12 w-9/12 ">
            Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress.
          </p>
          <h1 className='text-white mb-2 text-lg'>Get the App</h1>

          <div className="flex justify-left items-left gap-8">
            <div className='flex  gap-3  p-2 border-2 border-green-500 bg-white rounded-md'>
              <a href="#" className="hover:opacity-90 transition">
                <img src="/playstore.png" alt="Download on App Store" className="h-14" />
              </a>
              <div>
                <p className='text-black'>Get it on</p>
                <p className='text-black font-bold text-lg'> Play Store</p>
              </div>
            </div>
            <div className='flex  gap-3  p-2 border-2 border-green-500 bg-white rounded-md'>
              <a href="#" className="hover:opacity-90 transition">
                <img src="/apple.png" alt="Download on App Store" className="h-14" />
              </a>
              <div>
                <p className='text-black'>Get it on</p>
                <p className='text-black font-bold text-lg'> App Store</p>
              </div>
            </div>
          </div>

        </div>


        <div className=" w-6/12 flex justify-center">
          <div className="">
            <img src="/mobile.png" alt="Mobile App" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;