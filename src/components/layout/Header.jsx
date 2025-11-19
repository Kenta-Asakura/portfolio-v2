import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

const SOCIAL_LINKS = [
  { 
    name: 'GitHub', 
    href: 'https://github.com/Kenta-Asakura', 
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="size-6"
      >
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  },
  { 
    name: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/kenta-asakura/', 
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="size-6"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  { 
    name: 'Wantedly', 
    href: 'https://wantedly.com/', 
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="size-6"
      >
        <path d="M18.453 14.555c-.171-.111-.344-.223-.52-.328l-.004-.003c-1.477-.882-3.163-1.315-4.87-1.315-1.707 0-3.393.433-4.87 1.315l-.004.003c-.176.105-.349.217-.52.328C3.39 17.467 0 22.92 0 24h4.635c0-.762.254-1.91.736-2.974.483-1.064 1.188-2.041 2.086-2.642.549-.366 1.141-.614 1.755-.747.614-.132 1.25-.15 1.878-.054l.91.134.91-.134c.628-.096 1.264-.078 1.878.054.614.133 1.206.381 1.755.747.898.601 1.603 1.578 2.086 2.642.482 1.064.736 2.212.736 2.974H24c0-1.08-3.39-6.533-5.547-9.445zM13.09 12.909c3.573 0 6.479-2.91 6.479-6.454C19.569 2.91 16.663 0 13.09 0S6.612 2.91 6.612 6.455c0 3.544 2.905 6.454 6.478 6.454z"/>
      </svg>
    )
  }
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  // const [showSocialLinks, setShowSocialLinks] = useState(false);
  const [showSocialLinks, setShowSocialLinks] = useState(true); // !TEST

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

      {/* Sidebar - Hidden on mobile/tablet */}
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

            {/* Sidebar Nav Links */}
            <ul className="lg:mb-auto">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={handleNavClick}
                    className={`
                      flex items-center rounded-lg
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
            {/* <div
              id="social-links-section"
              className={`lg:${showSocialLinks ? '' : 'hidden'}
                flex lg:flex-col items-center gap-2 animate-fade-in`}
            >
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-center
                    w-10 h-10 rounded-full
                    bg-gray-500 hover:bg-base-300
                    hover:text-primary transition-colors
                    focus:outline-none focus:ring-2 focus:ring-primary
                    text-sm"
                  aria-label={`Visit ${social.name} profile`}
                >
                  <span className="font-bold text-xl">{social.icon}</span>
                </a>
              ))}
            </div> */}

            {/* Social and Chatbot Buttons */}
            {/* TEST - Socials Toggle Button */}
            {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
            <div className="d-fab items-center">
              <div 
                tabIndex={0} 
                role="button" 
                className="d-btn d-btn-lg d-btn-circle d-btn-primary"
              >
                {/* <svg
                  aria-label="New"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg> */}

                {/* Old Icon */}
                {/* Social Links Icon */}
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
              {SOCIAL_LINKS.map((social) => (
                <button 
                  id="btn social-links-section"
                  className={`lg:${showSocialLinks ? '' : 'hidden'}
                    flex lg:flex-col items-center gap-2 animate-fade-in
                    d-btn d-btn-lg d-btn-circle
                    `}
                >
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex items-center justify-center
                        w-10 h-10 rounded-full
                        bg-gray-500 hover:bg-base-300
                        hover:text-primary transition-colors
                        focus:outline-none focus:ring-2 focus:ring-primary
                        text-sm"
                      aria-label={`Visit ${social.name} profile`}
                    >
                      <span className="font-bold text-xl">{social.icon}</span>
                    </a>
                </button>
              ))}

              {/* close button should not be focusable so it can close the FAB when clicked. It's just a visual placeholder */}
              {/* ! Daisy UI Component Styling Over written */}
              <div className="d-fab-close"> 
                 <span className="d-btn d-btn-circle d-btn-lg d-btn-error">✕</span>
              </div>
            
              {/* buttons that show up when FAB is open */}
              {/* <button className="d-btn d-btn-lg d-btn-circle">
                <svg
                  aria-label="Camera"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                  />
                </svg>
              </button>
            
              <button className="d-btn d-btn-lg d-btn-circle">
                <svg
                  aria-label="Gallery"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </button>

              <button className="d-btn d-btn-lg d-btn-circle">
                <svg
                  aria-label="Voice"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                  />
                </svg>
              </button> */}
            </div>
           
          </div>
        </nav>
      </aside>
    </>
  );
}

export default Header;