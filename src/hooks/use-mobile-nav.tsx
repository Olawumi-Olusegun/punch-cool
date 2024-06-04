import { useCallback, useEffect, useState } from "react";


const useMobileNav = () => {

    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const [windowSize, setWindowSize] = useState(window.innerWidth ?? 0);



   const openNavMenu = useCallback(() => setIsMobileMenu(true), []);
   const closeNavMenu = useCallback(() => setIsMobileMenu(false), []);
   const toggleNavMenu = useCallback(() => setIsMobileMenu((prevState) => !prevState), []);

   const smallScreen = ()  => windowSize < 1024;


   useEffect(() => {

    const handleScreenResize = () => {
        if(!smallScreen()) {
            setIsMobileMenu(false)
        }
    }

    window.addEventListener("resize", handleScreenResize);

    return () => window.removeEventListener("resize", handleScreenResize);

   }, [smallScreen])

    return { openNavMenu, closeNavMenu, toggleNavMenu, isMobileMenu }


}

export default useMobileNav