import { useState } from "react";
import SocialLinks from "../ui/SocialLinks";
import NavLinks from "../ui/NavLinks";

function MobileNav () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle toggle button click
  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close drawer function
  const closeDrawer = () => {
    setIsMenuOpen(false);
    document.getElementById('my-drawer-3').checked = false;
  };
  
  const handleNavClick = (e) => {
    closeDrawer();

    // Smooth scroll handler
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
      }
    }
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <header 
        className="lg:hidden d-navbar fixed z-20 bg-base-100 backdrop-blur-sm shadow-md"
        role="banner"
      >
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a 
              href="#hero" 
              className="d-btn d-btn-ghost text-xl"
              onClick={handleNavClick}
            >
              <span className="text-2xl font-bold text-primary">K</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <label 
              htmlFor="my-drawer-3"
              className="d-swap d-swap-rotate d-drawer-button text-primary"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              onClick={handleToggle}
            >
              <input 
                type="checkbox" 
                checked={isMenuOpen}
                onChange={(e) => setIsMenuOpen(e.target.checked)}
                aria-hidden="true"
                tabIndex={-1}
              />

              {/* hamburger icon */}
              <svg
                className="d-swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
              <svg
                className="d-swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      <aside 
        className="d-drawer d-drawer-end w-auto"
        role="navigation"
        aria-label="Main navigation"
      >
        <input 
          id="my-drawer-3"
          type="checkbox"
          className="d-drawer-toggle" 
          checked={isMenuOpen}
        />
    
        <nav className="d-drawer-side">
          <label 
            htmlFor="my-drawer-3" 
            aria-label="close sidebar" 
            className="d-drawer-overlay"
            onClick={closeDrawer}
          ></label>

          <div className="d-menu bg-base-100 justify-center gap-7 min-h-full px-4 py-8">
            <NavLinks handleNavClick={handleNavClick} />

            <div className="flex gap-x-3.5">
              <SocialLinks />
            </div>
          </div>
        </nav>
      </aside>  
    </>
  )
}

export default MobileNav;