
import React from 'react'

type Props = {}

function HowItWorks({}: Props) {
  return (
    <div className="w-full relative -skew-y-2 py-28 bg-gradient-to-b from-[#0C0C0C] from-5% to-[#202229] text-white">
    <div className="skew-y-2 grid grid-cols-1 md:grid-cols-2 gap-10  px-5 max-w-[1300px] mx-auto">
   
        <div className="flex flex-col gap-6 ">
          <h2 className='inline-block items-center justify-center text-4xl md:text-[54px] font-bold w-full md:max-w-[379px] md:leading-[1]'>How it worked for Jason {" "} 
          <span className='inline-flex justify-center items-center w-[50px] h-[50px] rounded-full overflow-hidden bg-red-500'>
            <img src="/assets/user-3.png" alt="user image" className='self-center' />
          </span>
           {" "}at <img src="/assets/groovehq.png" alt="groovehq-icon" className='py-2' />
           </h2>
          <p className='text-lg max-w-[450.79px] md:text-[22px] tracking-wide text-white/90'>Zwilt enabled us to deliver on time and they{"'"}ve been heavy hitters in our corner since.</p>
          
          <div className="flex items-center gap-2 mt-auto">
            <button className="flex items-center justify-center h-[49.79px] w-[49.79px] bg-white  rounded-[20.19px] ">
              <img src={"/assets/arrow-right-black.png"} alt="logo" className='h-5 w-5' />
            </button>
            <button className="flex items-center justify-center h-[49.79px] w-[49.79px] bg-white  rounded-[20.19px] ">
              <img src={"/assets/arrow-right-black.png"} alt="logo" className='h-5 w-5' />
            </button>
          </div>

        </div>
        <div className="flex flex-col gap-10 ">
          <div className="flex items-center gap-5">
            <div className="bg-[#AF7CFF] h-[96.54px] w-[96.54px] rounded-[40.05px] flex items-center justify-center ">
              <img src={"/assets/groovehq-white.png"} alt="logo" className='groovehq-white' />
            </div>
          <div className="flex flex-col ">
            <h2 className='text-white text-[34px] font-semibold '>Jason Makki</h2>
            <p className='text-white/30'>Engineer at GROOVE</p>
            <p className='text-white/30'>San Francisco</p>
          </div>
          </div>
          <p className='w-full p-3 max-w-[487.6px] text-white/90 '>Zwilt enabled us to deliver on time and they{"'"}ve been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they{"'"}ve been heavy hitters in our corner since.Zwilt enabled us to deliver on time and they’ve been heavy hitters.</p>
        </div>
      
    </div>
    <img src="/assets/quotation-mark.png" alt="quotation-mark icon" className='h-20 w-20 sm:h-auto sm:w-auto absolute top-0 right-14 pointer-events-none' />
  </div>
  )
}

export default HowItWorks