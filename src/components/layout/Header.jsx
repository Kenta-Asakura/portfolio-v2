import { useState } from 'react';
import MobileNav from './MobileNav';
import DesktopSidebar from './DesktopSidebar';

function Header() {
  return (
     <>
      <MobileNav />
      <DesktopSidebar />
    </>
  );
}

export default Header;