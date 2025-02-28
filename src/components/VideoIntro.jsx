import React from 'react';

const VideoIntro = () => {
  return (
    <section className="py-16 gradient-bg bg-violet-950 text-white">
      <div className="container mx-auto px-6 flex justify-center">

        <div className=' text-left '>
          <h2 className="text-3xl font-bold text-center mb-12">Our Video Introductions</h2>
          <div className="mt-12  md:grid-cols-2 gap-6 max-w-4xl mx-auto ">
            <div className="flex items-center space-x-4 mb-5">
              <div className="bg-white bg-opacity-20 rounded-full">
                <img src='idea1.png'>
                </img>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Expert Advice Together</h3>
                <p className="text-white text-opacity-80">Get insights from our team of compliance experts</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-white bg-opacity-20 rounded-full">
                <img src='/idea2.png'>
                </img>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Truly Secure and Safe</h3>
                <p className="text-white text-opacity-80">Your data is protected with enterprise-grade security</p>
              </div>
            </div>
          </div>
        </div>


        <div>


          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-2/3 relative">
              <img
                src="/youtube.png"
                alt="Video Thumbnail"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white bg-opacity-80 p-4 rounded-full hover:bg-opacity-100 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>



      </div>
    </section>
  );
};

export default VideoIntro;