import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../data/navigation";

function NavLinks({ handleNavClick }) {
    const [activeSection, setActiveSection] = useState('');

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
        <ul className="lg:mb-auto">
            {NAV_LINKS.map((link) => (
                <li key={link.name}>
                    <a 
                        href={link.href}
                        onClick={handleNavClick}
                        className={`
                            flex items-center rounded-lg
                            text-lg font-medium font-bold uppercase transition-all 
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
    );
}

export default NavLinks;