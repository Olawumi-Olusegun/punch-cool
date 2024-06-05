
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

function FooterButtom({}: Props) {
  return (
    <>
        <div className="footer-slant" />
        <div className="w-full mx-auto px-3 md:px-0  py-20 bg-gradient-to-b from-[#0C0C0C] from-5% to-[#202229]">
          
          <div className="max-w-[1300px] mx-auto -skew-y-3 bg-blue-500 flex flex-col gap-8  items-center justify-center  h-[481px]">
            <h2 className='text-center skew-y-3 text-4xl md:text-[54px] leading-[1] font-bold max-w-[683px] text-white'>Need a job done, and done well? Get started</h2>
            <button className="self-center skew-y-3 flex items-center justify-center  h-[73.73px] w-[73.73px] bg-black/80  rounded-[29.89px] ">
              <img src={"/assets/arrow-right-white.png"} alt="logo" className='rotate-90' />
            </button>
          </div>

          <div className='mt-32 text-white px-5 '>
            
            <div className="max-w-[1300px] mx-auto gap-x-32 gap-y-5 grid grid-cols-1 lg:grid-cols-[20rem,1fr]">
              <div className="">
                <Link to='/' className='flex items-center '>
                  <span className='font-bold text-3xl'>Zilt</span> <img src={"/Vector.png"} alt="logo" />
                </Link>

                <p className='text-slate-300 mt-[28.69px] leading-6 max-w-[700px]'>We take complex hiring processes - and simplify them. Connecting you to the world{"'"}s highly qualified talent pool.</p>
              
              <div className="flex flex-col gap-y-5 mt-[20px]">
                <h2 className='text-white/40 text-sm font-semibold '>LINKS AND REDIRECTS</h2>
                <div className="flex items-center gap-x-3">
                  <button className='bg-gray-800 rounded-[20.27px] px-8 py-3 hover:bg-gray-700 transition-colors duration-300 '>Hire now</button>
                  <button className='bg-gray-800 rounded-[20.27px] px-8 py-3 hover:bg-gray-700 transition-colors duration-300 '>Apply now</button>
                </div>
              </div>

              </div>

              <div className="max-w-[876px] w-full">
                <h2 className='text-3xl md:text-5xl font-semibold text-left tracking-wide max-w-[779px] '>Connecting the right people to the right businesses.</h2>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 mt-[64px] gap-6 ">
                <ul className="">
                  <h2 className='text-white/40 text-sm font-semibold mb-4'>PLATFORM</h2>
                  <li className='mb-2'> <Link to="#" className='text-[18px]'>Find Work</Link> </li>
                  <li className='mb-2'> <Link to="#" className='text-[18px]'>Find Talent</Link> </li>
                  <li className='mb-2'> <Link to="#" className='text-[18px]'>Categories</Link> </li>
                  <li className='mb-2'> <Link to="#" className='text-[18px]'>About Us</Link> </li>
                </ul>
                <ul className="">
                  <h2 className='text-white/40 text-sm font-semibold mb-4'>CATEGORIES</h2>
                  <li className='mb-2'> <Link to="#" className='text-[18px]'>Data Science</Link> </li>
                  <li className='mb-2'> <Link to="#" className='text-[18px]'>Find Talent</Link> </li>
                  <li className='mb-2'> <Link to="#" className='text-[18px]'>IT & Networking</Link> </li>
                  <li className='mb-2'> <Link to="#" className='text-[18px]'>Web & Mobile</Link> </li>
                </ul>
                <ul className="">
                  <h2 className='text-white/40 text-sm font-semibold mb-4'>HELP</h2>
                  <li className='mb-2'> <Link to="#" className='text-[18px]'>FAQ{"'"}s</Link> </li>
                  <li className='mb-2'> <Link to="#" className='text-[18px]'>Contact Us</Link> </li>
                </ul>
                <ul className="">
                  <h2 className='text-white/40 text-sm font-semibold mb-4'>GET IN TOUCH @</h2>
                  <li className='mb-2'> <Link to="#" className='text-[18px]'>Instagram</Link> </li>
                  <li className='mb-2'> <Link to="#" className='text-[18px]'>LinkedIn</Link> </li>
                  <li className='mb-2'> <Link to="#" className='text-[18px]'>Twitter</Link> </li>
                </ul>
              </div>
              
              </div>
            </div>
            
          </div>
          
        </div>
    </>
  )
}

export default FooterButtom