import React from 'react'

type Props = {}

function Hero({}: Props) {
  return (
    <div className='w-full'>
        <h2 className='flex text-center items-center text-[#202229] tracking-tight leading-[1] font-bold text-4xl md:text-[54px] max-w-[671px] mx-auto'>
            <span className='inline-block'> Finding the right fit 
              <span className='inline-flex justify-center items-center w-[68px] h-[68px]'>
                <img src="/assets/user-2.png" alt="user image" />
              </span>
              has never been easier
            </span>
        </h2>
        <p className="mt-5 text-gray-600 md:leading-7 text-center tracking-tight max-w-[582px] text-base md:text-[22px] mx-auto ">
          With our rigorous pre-vetting process, you'll never have to worry about finding the ideal candidate ever again.
        </p>

        <form className='relative flex items-center h-[74px] w-full max-w-[570px] mx-auto mt-[30px] '>
          <input id='search' type="text" placeholder='Looking for design' autoComplete='off' className='text-gray-500 h-[74px] flex-1 py-5 px-3 pr-[78px]  focus:outline-none border-2 focus:border-transparent focus:ring-2 focus:ring-yellow-500 rounded-xl duration-100  ' />
          <button type='button' className='flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-0 h-[74px] w-[74px] rounded-xl bg-yellow-600'>
            <img src="/assets/arrow-right-black.png" alt="arrow-icon" />
          </button>
        </form>
    </div>
  )
}

export default Hero