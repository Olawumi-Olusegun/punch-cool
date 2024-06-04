
import React from 'react'

type Props = {}

function Footer({}: Props) {
  return (
    <section className=' border-t-2 border-t-white/10 bg-[#202229] pt-2 pb-4 mt-auto px-5'>
        <footer className='text-white/70 text-xs flex items-center flex-wrap justify-between max-w-[1300px] mx-auto '>
            <p>All rights reserved  by Zwilt</p>
            <div className="flex items-center gap-x-5">
                <a href="#" className='underline decoration-gray-400'>Privacy Policy</a>
                <a href="#" className='underline decoration-gray-400'>Terms and Conditions</a>
            </div>
        </footer>
    </section>
  )
}

export default Footer