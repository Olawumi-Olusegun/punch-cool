
import React from 'react'

type Props = {}

function StartAJourney({}: Props) {
  return (
    <div className="w-full px-3 md:px-0 py-28 bg-white">
    <div className="max-w-[1300px] mx-auto">
    <div className="bg-purple-100 -skew-y-2 ">          
      <div className="flex flex-col gap-5 mb-10 ">
        <div className="items-center justify-between  grid grid-cols-1 lg:grid-cols-2 ">
          <div className="flex gap-x-3 skew-y-2 p-5 py-10 flex-1">
            <h1 className='font-bold text-7xl inline-block bg-gradient-to-b from-purple-300 via-purple-50 to-transparent text-transparent bg-clip-text'>1</h1>
              <div className="flex flex-col gap-y-5">              
                <h2 className='text-2xl lg:text-[34px] font-semibold w-full lg:max-w-[445px] lg:leading-[1]'>Find your next star performer.</h2>
                <p className='w-full lg:max-w-[407px] '>Explore the vast Zwilt marketplace to find the candidate that meets your needs.</p>
                <div className="flex items-center gap-2 mt-auto">
                  <button className="flex items-center justify-center  h-[49.79px] w-[49.79px] bg-black/80  rounded-[20.19px] ">
                    <img src={"/Vector.png"} alt="logo" className='h-5 w-5' />
                  </button>
                  <span className='text-[22px] font-semibold '>Join now</span>
                </div>
              </div>
          </div>
          <div className="overflow-hidden relative w-full flex justify-end ">
            <img src="/assets/group-2_2.png" alt="" className='pointer-events-none object-contain ' />
          </div>
        </div>
      </div>          
    </div>
    </div>
    
    <div className="max-w-[1300px] mx-auto">
    <div className="bg-red-50 -skew-y-2 ">          
      <div className="flex flex-col gap-5 mb-10 ">
        <div className="items-center justify-between  grid grid-cols-1 lg:grid-cols-2 ">
          <div className="flex gap-x-3 skew-y-2 p-5 py-10 flex-1">
            <h1 className='font-bold text-7xl inline-block bg-gradient-to-b from-purple-300 via-purple-50 to-transparent text-transparent bg-clip-text'>2</h1>
              <div className="flex flex-col gap-y-5">              
                <h2 className='text-2xl lg:text-[34px] font-semibold w-full lg:max-w-[445px] lg:leading-[1]'>Find your next star performer.</h2>
                <p className='w-full lg:max-w-[407px] '>Explore the vast Zwilt marketplace to find the candidate that meets your needs.</p>
                <div className="flex items-center gap-2 mt-auto">
                  <button className="flex items-center justify-center  h-[49.79px] w-[49.79px] bg-black/80  rounded-[20.19px] ">
                    <img src={"/Vector.png"} alt="logo" className='h-5 w-5' />
                  </button>
                  <span className='text-[22px] font-semibold '>Join now</span>
                </div>
              </div>
          </div>
          <div className="overflow-hidden relative w-full flex justify-end ">
            <img src="/assets/group-2_3.png" alt="" className='pointer-events-none object-cover ' />
          </div>
        </div>
      </div>          
    </div>
    </div>
    
    <div className="max-w-[1300px] mx-auto">
    <div className="bg-purple-50 -skew-y-2 ">          
      <div className="flex flex-col gap-5 mb-10 ">
        <div className="items-center justify-between  grid grid-cols-1 lg:grid-cols-2 ">
          <div className="flex gap-x-3 skew-y-2 p-5 py-10 flex-1">
            <h1 className='font-bold text-7xl inline-block bg-gradient-to-b from-purple-300 via-purple-50 to-transparent text-transparent bg-clip-text'>3</h1>
              <div className="flex flex-col gap-y-5">              
                <h2 className='text-2xl lg:text-[34px] font-semibold w-full lg:max-w-[445px] lg:leading-[1]'>Find your next star performer.</h2>
                <p className='w-full lg:max-w-[407px] '>Explore the vast Zwilt marketplace to find the candidate that meets your needs.</p>
                <div className="flex items-center gap-2 mt-auto">
                  <button className="flex items-center justify-center  h-[49.79px] w-[49.79px] bg-black/80  rounded-[20.19px] ">
                    <img src={"/Vector.png"} alt="logo" className='h-5 w-5' />
                  </button>
                  <span className='text-[22px] font-semibold '>Join now</span>
                </div>
              </div>
          </div>
          <div className="overflow-hidden relative w-full flex justify-end ">
            <img src="/assets/group-2_1.png" alt="" className='pointer-events-none object-cover ' />
          </div>
        </div>
      </div>          
    </div>
    </div>
  </div>
  )
}

export default StartAJourney