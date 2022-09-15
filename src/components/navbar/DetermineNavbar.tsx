import React, { useState, useEffect } from 'react';
import DesktopNavbar from './desktopNav/DesktopNavbar';
import MobileNavbar from './mobileNav/MobileNavbar';

export default function DetermineNavbar() {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint: number = 768;

    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth));
    }, []);

  return width < breakpoint ? <MobileNavbar /> : <DesktopNavbar />;
}
