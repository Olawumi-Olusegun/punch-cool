
import React from 'react'

type Props = {}

function Footer({}: Props) {
  return (
    <section className='border-t bg-black py-2 mt-auto'>
        <footer className='text-white/70 text-xs flex items-center justify-between max-w-[1300px] mx-auto '>
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