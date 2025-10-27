import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' }
];

const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com/yourusername', icon: 'G' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: 'in' },
  { name: 'Twitter', href: 'https://twitter.com/yourusername', icon: 'X' }
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

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

  // Intersection Observer for active section tracking
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    // ?
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    NAV_LINKS.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
       {/* Mobile Top Bar - Only visible on mobile/tablet */}
      <header 
        className="lg:hidden navbar bg-base-100/95 backdrop-blur-sm shadow-md"
        role="banner"
      >
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a 
              href="#hero" 
              className="btn btn-ghost text-xl"
              onClick={handleNavClick}
            >
              K
            </a>

            {/* Mobile Menu Button - Now controls the drawer */}
            <label 
              htmlFor="my-drawer-3"
              className="btn btn-circle swap swap-rotate drawer-button"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <input 
                type="checkbox" 
                checked={isMenuOpen}
                onChange={() => {}}
                aria-hidden="true"
                tabIndex={-1}
              />

              {/* hamburger icon */}
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512">
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
              <svg
                className="swap-on fill-current"
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

      {/* Desktop Sidebar - Hidden on mobile/tablet */}
      <aside 
        className="drawer w-auto lg:drawer-open"
        role="navigation"
        aria-label="Main navigation"
      >
        <input 
          id="my-drawer-3"
          type="checkbox"
          className="drawer-toggle" 
        />
       
        <nav className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>

          <div className="menu justify-between bg-base-200 min-h-full w-32 p-4">
            <a 
              href="#hero"
              onClick={handleNavClick}
              className="mb-8 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
            >
              <h1 className="text-2xl font-bold text-primary">K</h1>
            </a>

            {/* Sidebar content here */}
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={handleNavClick}
                    className={`
                      flex items-center gap-3 rounded-lg 
                      text-sm font-medium transition-all 
                      hover:bg-base-200 hover:text-primary hover:translate-x-1 
                      focus:outline-none focus:ring-2 focus:ring-primary 
                      ${activeSection === link.href.slice(1) 
                        ? 'text-primary bg-base-200 translate-x-1' 
                        : 'text-base-content'
                      }`}
                    aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <ul className="pt-6 border-t border-base-300">
              <p className="text-sm text-base-content/60 mb-3 px-4">Connect with me</p>

              <li className="flex gap-2">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1 flex items-center justify-center 
                      px-4 py-2 rounded-lg 
                      bg-base-200 hover:bg-base-300 
                      hover:text-primary transition-colors 
                      focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label={social.name}
                  >
                    <span className="font-bold">{social.icon}</span>
                  </a>
                ))}
              </li>
            </ul>
          </div>
          
        </nav>
      </aside>
    </>
  );
}

export default Header;