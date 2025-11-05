import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com/Kenta-Asakura', icon: 'G' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/kenta-asakura/', icon: 'in' },
  { name: 'Wantedly', href: 'https://wantedly.com/', icon: 'X' }
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showSocialLinks, setShowSocialLinks] = useState(false);

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
        className="lg:hidden navbar fixed z-20 bg-base-200 backdrop-blur-sm shadow-md"
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

            {/* Mobile Menu Button */}
            <label 
              htmlFor="my-drawer-3"
              className="btn btn-circle swap swap-rotate drawer-button"
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

      {/* Sidebar - Hidden on mobile/tablet */}
      <aside 
        className="drawer drawer-end w-auto lg:drawer-open"
        role="navigation"
        aria-label="Main navigation"
      >
        <input 
          id="my-drawer-3"
          type="checkbox"
          className="drawer-toggle" 
        />
       
        <nav className="drawer-side">
          <label 
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
            onClick={() => setIsMenuOpen(false)} // Close on overlay click
          ></label>
          
          <div className="menu bg-base-200 justify-center gap-7 lg:gap-4 min-h-full px-4 py-8">
            <a 
              href="#hero"
              onClick={handleNavClick}
              className="hidden lg:block mb-8 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
            >
              <h1 className="text-2xl font-bold text-primary">K</h1>
            </a>

            {/* Sidebar content */}
            <ul className="lg:mb-auto">
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

            {/* Collapsible Social Links */}
            {showSocialLinks && (
              <div
                id="social-links-section"
                className="flex flex-col items-center gap-2 animate-fade-in"
              >
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center justify-between
                      px-4 py-2 rounded-lg
                      bg-base-200 hover:bg-base-300
                      hover:text-primary transition-colors
                      focus:outline-none focus:ring-2 focus:ring-primary
                      text-sm"
                    aria-label={`Visit ${social.name} profile`}
                  >
                    <span className="font-bold text-xs">{social.icon}</span>
                  </a>
                ))}
              </div>
            )}

            {/* Social and Chatbot Buttons */}
            <div className="pt-3 space-y-3">
              {/* Toggle Social Links Button */}
              <button
                onClick={() => setShowSocialLinks((prev) => !prev)}
                className="
                  flex items-center justify-center
                  mx-auto p-3 rounded-full
                  bg-base-200 hover:bg-base-300
                  transition-colors
                  focus:outline-none focus:ring-2 focus:ring-primary"
                aria-expanded={showSocialLinks}
                aria-controls="social-links-section"
                aria-label="Toggle social links"
                title="Connect with me"
              >
                {/* Social Links Icon */}
                <svg
                  className={`w-6 h-6 transition-transform}`}
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
              </button>

              {/* Chatbot Button */}
              <button
                onClick={() => {
                  // TODO: Implement chatbot functionality
                  console.log('Chatbot clicked');
                }}
                className="
                  flex items-center justify-center
                  mx-auto p-3 rounded-full
                  bg-primary hover:bg-primary/90
                  text-primary-content
                  transition-colors
                  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Open chatbot"
                title="Chat with me"
              >
                {/* Chatbot Icon */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}

export default Header;