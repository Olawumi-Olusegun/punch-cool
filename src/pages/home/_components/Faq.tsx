import React from 'react'

type Props = {}

function Faq({}: Props) {
  return (
    <div className="max-w-[1300px] mx-auto skew-y-2 px-5 ">
    <h2 className="text-4xl font-bold md:text-center py-10 ">Frequently asked questions</h2>
    
    <div className="grid grid-cols-1 w-full divide-y">
        
    <div className="gap-3 grid grid-cols-1 hover:cursor-pointer group md:grid-cols-2 hover:bg-gray-200 duration-300 ">
          <div className='border-b md:border-b-0'>
            <a href="#" className='border-r inline-block font-semibold py-5 px-8'>General</a>
          </div>
          <div className='flex1 flex items-center justify-between group'>
            <span className='flex-1  py-5 px-5 text-gray-500'>I want to work part-time, is that possible</span>
            <img src="/assets/arrow-right-yellow.png" alt="arrow icon" className='inline-block mr-6 opacity-0 duration-300 group-hover:opacity-100' />
          </div> 

        </div>

      <div className="gap-3 grid grid-cols-1 hover:cursor-pointer group md:grid-cols-2 hover:bg-gray-200 duration-300 ">
          <span className='h-1'></span>
          <div className='flex1 flex items-center justify-between group'>
            <span className='flex-1  py-5 px-5 text-gray-500'>How long are the average projects?</span>
            <img src="/assets/arrow-right-yellow.png" alt="arrow icon" className='inline-block mr-6 opacity-0 duration-300 group-hover:opacity-100' />
          </div>  
        </div>

        <div className="gap-3 grid grid-cols-1 hover:cursor-pointer group md:grid-cols-2 hover:bg-gray-200 duration-300 ">
          <span className='h-1'></span>
          <div className='flex1 flex items-center justify-between group'>
            <span className='flex-1  py-5 px-5 text-gray-500'>How much can I earn?</span>
            <img src="/assets/arrow-right-yellow.png" alt="arrow icon" className='inline-block mr-6 opacity-0 duration-300 group-hover:opacity-100' />
          </div>           
        </div>

        <div className="gap-3 grid grid-cols-1 hover:cursor-pointer group md:grid-cols-2 hover:bg-gray-200 duration-300 ">
          <span className='h-1'></span>
          <div className='flex1 flex items-center justify-between group'>
            <span className='flex-1  py-5 px-5 text-gray-500'>How does the payment works?</span>
            <img src="/assets/arrow-right-yellow.png" alt="arrow icon" className='inline-block mr-6 opacity-0 duration-300 group-hover:opacity-100' />
          </div>
        </div>
      
    </div>
    
    <div className="grid grid-cols-1 w-full divide-y">
        
    <div className="gap-3 grid grid-cols-1 hover:cursor-pointer group md:grid-cols-2 hover:bg-gray-200 duration-300 ">
          <div className='border-b md:border-b-0'>
            <a href="#" className='border-r inline-block font-semibold py-5 px-8 bg-gray-200'>General</a>
            <a href="#" className='border-r inline-block font-semibold py-5 px-5'>Joining Process</a>
          </div>
          <div className='flex1 flex items-center justify-between group'>
            <span className='flex-1  py-5 px-5 text-gray-500'>I want to work part-time, is that possible</span>
            <img src="/assets/arrow-right-yellow.png" alt="arrow icon" className='inline-block mr-6 opacity-0 duration-300 group-hover:opacity-100' />
          </div>
        </div>

        <div className="gap-3 grid grid-cols-1 hover:cursor-pointer group md:grid-cols-2 hover:bg-gray-200 duration-300 ">
          <span className='h-1'></span>
          <div className='flex1 flex items-center justify-between group'>
            <span className='flex-1  py-5 px-5 text-gray-500'>How long are the average projects?</span>
            <img src="/assets/arrow-right-yellow.png" alt="arrow icon" className='inline-block mr-6 opacity-0 duration-300 group-hover:opacity-100' />
          </div>
        </div>

        <div className="gap-3 grid grid-cols-1 hover:cursor-pointer group md:grid-cols-2 hover:bg-gray-200 duration-300 ">
          <span className='h-1'></span>
          <div className='flex1 flex items-center justify-between group'>
            <span className='flex-1  py-5 px-5 text-gray-500'>How much can I earn?</span>
            <img src="/assets/arrow-right-yellow.png" alt="arrow icon" className='inline-block mr-6 opacity-0 duration-300 group-hover:opacity-100' />
          </div>
        </div>
      
    </div>
    
  </div>
  )
}

export default Faq