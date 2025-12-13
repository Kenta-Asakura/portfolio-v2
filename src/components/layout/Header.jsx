import { useState } from 'react';
import MobileNav from './MobileNav';
import DesktopSidebar from './DesktopSidebar';

function Header() {
  // Smooth scroll handler
  const handleNavClick = (e) => {
    setIsMenuOpen(false);
    const href = e.currentTarget.getAttribute('href');

    if (href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);

      if (element) {
        const offset = 20;
        const elementPosition = element.offsetTop - offset;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }x``
    }
  };

  return (
     <>
      <MobileNav />
      <DesktopSidebar />
    </>
  );
}

export default Header;