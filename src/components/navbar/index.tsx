
import React from 'react'

type Props = {}

function Navbar({}: Props) {
  return (
    <header className='w-full'>
        <nav className='mt-9 flex items-center justify-between px-5 py-[18px] bg-primary max-w-[1300px] mx-auto rounded-xl'>
            <div className="logo">Logo</div>
            <ul className='flex items-center gap-x-[30px]  '>
                <li> <a href="#" className='text-white'>Find Work</a> </li>
                <li> <a href="#" className='text-white'>Find Talent</a> </li>
                <li> <a href="#" className='text-white'>Articles</a> </li>
                <li> <a href="#" className='text-white'>About Us</a> </li>
                <li> <a href="#" className='text-white'>Contact Us</a> </li>
            </ul>
            <div className="flex items-center gap-x-2">
                <a href="#" className='text-white'>Login</a>
                <a href="#" className='text-white'>Join Now</a>
            </div>
        </nav>
    </header>
  )
}

export default Navbar