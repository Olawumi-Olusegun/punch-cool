
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

function Footer({}: Props) {
  return (
    <section className=' border-t-2 border-t-white/10 bg-[#202229] pt-2 pb-4 mt-auto px-5'>
        <footer className='text-white/70 text-xs flex flex-col md:flex-row items-center flex-wrap gap-y-2 justify-between max-w-[1300px] mx-auto '>
            <p>All rights reserved  by Zwilt</p>
            <div className="flex items-center gap-x-5">
                <Link to="#" className='underline decoration-gray-400'>Privacy Policy</Link>
                <Link to="#" className='underline decoration-gray-400'>Terms and Conditions</Link>
            </div>
        </footer>
    </section>
  )
}

export default Footer