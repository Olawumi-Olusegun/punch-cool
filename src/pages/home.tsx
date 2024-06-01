
import React from 'react'

type Props = {}

function Home({}: Props) {
  return (
    <>
    <section className='mt-[144px]'>
        <h2 className='text-center text-[#202229] tracking-tight leading-[1] font-bold text-[54px] max-w-[671px] mx-auto'>Finding the right fit has never been easier</h2>
        <p className="mt-5 text-gray-600 leading-7 text-center tracking-tight max-w-[582px] text-[22px] mx-auto ">
        With our rigorous pre-vetting process, you'll never have to worry about finding the ideal candidate ever again.
        </p>
        <div className="flex items-center duration-300 h-[74px] w-full max-w-[570px] mx-auto mt-[30px] overflow-hidden border-2 inset-0 rounded-xl focus:outline focus:outline-gray-800 focus-within:outline-transparent focus-within:ring-2 focus-within:ring-yellow-600 ">
            <input type="text" placeholder='Looking for design' className='text-gray-500 flex-1 py-5 px-5 focus:outline-none ' />
            <button type='button' className='h-[74px] w-[74px] rounded-xl bg-yellow-600'></button>
        </div>
    </section>

    </>

    
  )
}

export default Home