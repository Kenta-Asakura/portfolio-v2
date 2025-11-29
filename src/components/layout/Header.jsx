import { useState, useEffect } from 'react';
import SocialLinks from '../ui/SocialLinks';
import NavLinks from '../ui/NavLinks';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      }
    }
  };

  // Close menu on Escape & prevent body scroll
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
       {/* Mobile Top Bar - Mobile/Tablet only */}
      <header 
        className="lg:hidden d-navbar fixed z-20 bg-base-200 backdrop-blur-sm shadow-md"
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

            {/* Mobile Menu Button */}
            <label 
              htmlFor="my-drawer-3"
              className="d-btn d-btn-circle d-swap d-swap-rotate d-drawer-button text-primary"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
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
                viewBox="0 0 512 512">
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
              <svg
                className="d-swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512">
                <polygon
                  points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
        </nav>
      </header>

      {/* Sidebar - Desktop only */}
      <aside 
        className="d-drawer d-drawer-end w-auto lg:d-drawer-open"
        role="navigation"
        aria-label="Main navigation"
      >
        <input 
          id="my-drawer-3"
          type="checkbox"
          className="d-drawer-toggle" 
        />
       
        <nav className="d-drawer-side">
          <label 
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="d-drawer-overlay"
            onClick={() => setIsMenuOpen(false)} // Close on overlay click
          ></label>
          
          <div className="d-menu bg-base-200 justify-center gap-7 lg:gap-4 min-h-full px-4 py-8">
            <a 
              href="#hero"
              onClick={handleNavClick}
              className="hidden lg:block mb-8 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
            >
              <h1 className="text-2xl font-bold text-primary">K</h1>
            </a>

            <NavLinks handleNavClick={handleNavClick} />

            {/* Social Links - Mobile/Tablet only */}
            <div className="max-lg:flex gap-x-3.5 hidden">
              <SocialLinks />
            </div>
            
            {/* Social and Chatbot Buttons - Desktop Only */}
            <div className="max-lg:hidden d-fab items-center">
              {/* Social Toggle Button */}
              <div 
                tabIndex={0} 
                role="button" 
                className="d-btn d-btn-lg d-btn-circle d-btn-primary"
              >
                <svg
                  className="size-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>

              {/* Collapsible Social Links */}
              <div className="flex flex-col gap-2.5 mb-4">
                <SocialLinks  />
              </div>

              {/* Social Close Button */}
              <div className="d-fab-close"> 
                 <span className="d-btn d-btn-circle d-btn-lg d-btn-primary mx-auto">✕</span>
              </div>
            </div>
           
          </div>
        </nav>
      </aside>
    </>
  );
}

export default Header;