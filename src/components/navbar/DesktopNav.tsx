import React from 'react';
import { Menu, X } from "lucide-react";
import useMobileNav from "../../hooks/use-mobile-nav";
import { Link } from 'react-router-dom';

const DesktopNav = ({onButtonClick}: {onButtonClick:() => void, isMobileMenu: boolean}) => {

    const {  isMobileMenu } = useMobileNav();

    

     return (
       <header className='w-full px-5'>
           <nav className='mt-9 flex items-center justify-between px-5 py-[18px] bg-primary max-w-[1300px] mx-auto rounded-xl'>
               <Link to='/' className="logo">
                 <img src="/assets/zwilt-logo.png" alt="zwilt-logo" />
               </Link>
               <ul className='hidden md:flex items-center gap-x-[30px]'>
                   <li> <Link to="#" className='text-white'>Find Work</Link> </li>
                   <li> <Link to="#" className='text-white'>Find Talent</Link> </li>
                   <li> <Link to="#" className='text-white'>Articles</Link> </li>
                   <li> <Link to="#" className='text-white'>About Us</Link> </li>
                   <li> <Link to="#" className='text-white'>Contact Us</Link> </li>
               </ul>
               <div className="hidden md:flex items-center gap-x-4">
                   <Link to="#" className='text-white'>Login</Link>
                   <Link to="#" className='bg-white text-black/80 hover:bg-white/80 duration-300 font-semibold rounded-xl px-4 py-2  '>Join Now</Link>
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