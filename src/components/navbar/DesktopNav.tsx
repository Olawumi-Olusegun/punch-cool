import React from 'react'
import { Menu, X } from "lucide-react";
import useMobileNav from "../../hooks/use-mobile-nav";

const DesktopNav = ({onButtonClick}: {onButtonClick:() => void, isMobileMenu: boolean}) => {

    const {  isMobileMenu } = useMobileNav();

     return (
       <header className='w-full px-5'>
           <nav className='mt-9 flex items-center justify-between px-5 py-[18px] bg-primary max-w-[1300px] mx-auto rounded-xl'>
               <a href='#' className="logo">
                 <img src="/assets/zwilt-logo.png" alt="zwilt-logo" />
               </a>
               <ul className='hidden md:flex items-center gap-x-[30px]'>
                   <li> <a href="#" className='text-white'>Find Work</a> </li>
                   <li> <a href="#" className='text-white'>Find Talent</a> </li>
                   <li> <a href="#" className='text-white'>Articles</a> </li>
                   <li> <a href="#" className='text-white'>About Us</a> </li>
                   <li> <a href="#" className='text-white'>Contact Us</a> </li>
               </ul>
               <div className="hidden md:flex items-center gap-x-4">
                   <a href="#" className='text-white'>Login</a>
                   <a href="#" className='bg-white text-black/80 hover:bg-white/80 duration-300 font-semibold rounded-xl px-4 py-2  '>Join Now</a>
               </div>

         
                <button className='md:hidden'>
                  {
                    isMobileMenu 
                    ? <X onClick={onButtonClick} className='md:hidden cursor-pointer text-white' />
                    :  <Menu onClick={onButtonClick} className='md:hidden cursor-pointer text-white' />
                  }
                </button>
           </nav>
       </header>
     )
   }
   export default DesktopNav