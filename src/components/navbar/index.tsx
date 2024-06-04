
import React from 'react'
import useMobileNav from '../../hooks/use-mobile-nav';
import MobileNav from './Mobile';
import DesktopNav from './DesktopNav';


const Navbar = () => {

  const { isMobileMenu, toggleNavMenu } = useMobileNav();

  const onButtonClick = () => {
        toggleNavMenu();
  }

  return isMobileMenu 
          ? <MobileNav onButtonClick={onButtonClick} isMobileMenu={isMobileMenu} /> 
          : <DesktopNav onButtonClick={onButtonClick} isMobileMenu={isMobileMenu} />
}

export default Navbar




