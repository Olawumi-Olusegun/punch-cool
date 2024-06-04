import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



function WhyChooseUs() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[30%,1fr] gap-5 px-2 md:px-5 pb-20 ">
    <div className="flex flex-col gap-y-5 p-3">
      <h2 className='text-4xl md:leading-[1] font-bold md:font-[54px]'>Why choose Zwilt?</h2>
      <p className='max-w-[326px] text-[22px] text-gray-700 leading-[1.4]'>We take complex hiring processes - and simplify them. Connecting you to the world{"'"}s highly qualified talent pool.</p>
    </div>

    <Carousel
    showStatus={false}
    autoPlay={true}
    swipeable={true}
    infiniteLoop={true}
    showIndicators={false}
    >
      <div className="shadow-xl flex-1 grid grid-cols-1 md:grid-cols-2 gap-y-3 p-4 rounded-xl">
        <div className="flex flex-col gap-y-5">
          <h2 className='text-4xl md:leading-[1] max-w-[464px]: font-bold md:text-[54px] text-start'>Onboard without the risk.</h2>
          <div className="">
            <ul className='text-gray-600 flex items-start flex-col gap-y-1.5'>
              <li className='text-sm md:text-base md:text-nowrap'> <div className='h-2 w-5 rounded-full inline-block bg-gray-500 mr-2' /> We pick the best for you to select.</li>
              <li className='text-sm md:text-base md:text-nowrap'><div className='h-2 w-5 rounded-full inline-block bg-gray-500 mr-2' /> Thousands of vetted candidates in dozens of categories.</li>
              <li className='text-sm md:text-base md:text-nowrap'> <div className='h-2 w-5 rounded-full inline-block bg-gray-500 mr-2' /> Risk-free resource swapping for the best fit.</li>
            </ul>
          </div>

            <a href='#' className="flex items-center gap-2 mt-auto">
              <button className="flex items-center justify-center w-16 h-16 rounded-3xl md:h-[74px] md:w-[74px] bg-black/80  md:rounded-[30px] ">
              <div className="">
                    <img src={"/assets/arrow-right-white.png"} alt="logo" className='h-5 w-5' />
                </div>
              </button>
              <span className='text-[22px] font-semibold'>Learn More</span>
            </a>
        </div>
        <div className="">
          <img src="/assets/group-2_4.png" alt="image" className='pointer-events-none' />
        </div>
      </div>

      <div className="shadow-xl flex-1 grid grid-cols-1 md:grid-cols-2 gap-y-3 p-4 rounded-xl">
        <div className="flex flex-col gap-y-5">
          <h2 className='text-4xl md:leading-[1] max-w-[239px] font-bold md:text-[54px] self-start text-start'>An open book.</h2>
          <div className="flex items-start">
            <ul className='text-gray-600 flex items-start flex-col gap-y-1.5'>
              <li className='text-sm md:text-base md:text-nowrap'><div className='h-2 w-5 rounded-full inline-block bg-yellow-500 mr-2' /> Easy and transparent one-to-one chat with candidates.</li>
              <li className='text-sm md:text-base md:text-nowrap'><div className='h-2 w-5 rounded-full inline-block bg-yellow-500 mr-2' />Simple and convenient payment methods.</li>
              <li className='text-sm md:text-base md:text-nowrap'><div className='h-2 w-5 rounded-full inline-block bg-yellow-500 mr-2' />Review past ratings.</li>
            </ul>
          </div>

            <a href='#' className="flex items-center gap-2 mt-auto">
              <button className="flex items-center justify-center w-16 h-16 rounded-3xl md:h-[74px] md:w-[74px] bg-black/80  md:rounded-[30px] ">
              <div className="">
                    <img src={"/assets/arrow-right-white.png"} alt="logo" className='h-5 w-5' />
                </div>
              </button>
              <span className='text-[22px] font-semibold'>Learn More</span>
            </a>
        </div>
        <div className="">
          <img src="/assets/group-2_4.png" alt="image" className='pointer-events-none' />
        </div>
      </div>

      <div className="shadow-xl flex-1 grid grid-cols-1 md:grid-cols-2 gap-y-3 p-4 rounded-xl">
        <div className="flex flex-col gap-y-5">
          <h2 className='text-4xl md:leading-[1] max-w-[239px] font-bold md:text-[54px] text-start'>Stay in the loop.</h2>
          <div className="flex items-start">
            <ul className='text-gray-600 flex items-start flex-col gap-y-1.5'>
              <li className='text-sm md:text-base md:text-nowrap'><div className='h-2 w-5 rounded-full inline-block bg-green-200 mr-2' />Track your staff activity down to every minute with screenshots.</li>
              <li className='text-sm md:text-base md:text-nowrap'><div className='h-2 w-5 rounded-full inline-block bg-green-200 mr-2' />Comprehensive timesheet data to process payments.</li>
              <li className='text-sm md:text-base md:text-nowrap'><div className='h-2 w-5 rounded-full inline-block bg-green-200 mr-2' />Create projects to organize and assign tasks more effectively.</li>
            </ul>
          </div>

            <a href='#' className="flex items-center gap-2 mt-auto">
              <button className="flex items-center justify-center w-16 h-16 rounded-3xl md:h-[74px] md:w-[74px] bg-black/80  md:rounded-[30px] ">
                <div className="">
                    <img src={"/assets/arrow-right-white.png"} alt="logo" className='h-5 w-5' />
                </div>
              </button>
              <span className='text-[22px] font-semibold'>Learn More</span>
            </a>
        </div>
        <div className="">
          <img src="/assets/group-2_4.png" alt="image" className='pointer-events-none' />
        </div>
      </div>
    </Carousel>
    
  </div>
  )
}

export default WhyChooseUs