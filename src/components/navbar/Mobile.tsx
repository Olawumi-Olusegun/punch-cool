import React, { useEffect } from 'react'
import { X } from "lucide-react";
import { motion, useAnimationControls } from "framer-motion";

const variants = {
  close: {
    width: "5rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
      }
  },
  open: {
    width: "100%",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.7,
    }
  }
}


const MobileNav = ({onButtonClick, isMobileMenu}: {onButtonClick:() => void, isMobileMenu: boolean}) => {

  const navControls = useAnimationControls();

  useEffect(() => {
    if(isMobileMenu) {
      navControls.start("open")
    } else {
      navControls.start("close")
    }
  }, [isMobileMenu])

    return (
      <motion.header 
        variants={variants}
        initial="close"
        animate={navControls}
      className='w-full relative'>
          <nav className='absolute top-0 left-0 w-full z-10 flex flex-col px-5 py-[18px] bg-primary max-w-[1300px] mx-auto rounded-xl rounded-t-none'>
    
              <div className="flex justify-between items-center">
                <a href="#" className="py-3 inline-block">
                  <img src="/assets/zwilt-logo.png" alt="zwilt-logo" />
                </a>

                <button className='py-3 px-4 bg-secondary text-white rounded-lg md:hidden'>
                    <X onClick={onButtonClick} className='text-white md:hidden' />
                </button>
              </div>
  
              <ul className='flex flex-col gap-x-[30px] gap-y-5'>
                  <li onClick={onButtonClick}> <a href="#" className='text-white block py-2.5 '>Find Work</a> </li>
                  <li onClick={onButtonClick}> <a href="#" className='text-white block py-2.5 '>Find Talent</a> </li>
                  <li onClick={onButtonClick}> <a href="#" className='text-white block py-2.5 '>Articles</a> </li>
                  <li onClick={onButtonClick}> <a href="#" className='text-white block py-2.5 '>About Us</a> </li>
                  <li onClick={onButtonClick}> <a href="#" className='text-white block py-2.5 '>Contact Us</a> </li>
              </ul>
              <div className="flex flex-col gap-3 w-full mt-5 ">
                  <a onClick={onButtonClick} href="#" className='border-2 border-white text-black/80 hover:bg-white/80 text-center duration-300 font-semibold rounded-xl px-4 py-2 '>Login</a>
                  <a onClick={onButtonClick} href="#" className='bg-white text-black/80 hover:bg-white/80 text-center duration-300 font-semibold rounded-xl px-4 py-2  '>Join Now</a>
              </div>

          </nav>
      </motion.header>
    )
  }

  export default MobileNav