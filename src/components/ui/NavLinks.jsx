import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../data/navigation";

function NavLinks({ handleNavClick }) {
    const [activeSection, setActiveSection] = useState('');

    // Intersection Observer for active section tracking
     useEffect(() => {
      const observers = []; // Store observers for cleanup
  
      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      };
  
      NAV_LINKS.forEach((link, index) => {
        const element = document.querySelector(link.href);
        if (element) {
          const isLastSection = index === NAV_LINKS.length - 1;
          
          const observer = new IntersectionObserver(observerCallback, {
            root: null,
            rootMargin: isLastSection ? '-10% 0px -20% 0px' : '-10% 0px -70% 0px',
            threshold: 0
          });
          
          observer.observe(element);
          observers.push(observer); // Store for cleanup
        }
      });
  
      return () => {
        observers.forEach(observer => observer.disconnect());
      };
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
                            font-secondary text-lg lg:text-base 
                            text-base-content/80  font-normal uppercase transition-all 
                            hover:bg-base-100 hover:text-primary hover:translate-x-1
                            ${activeSection === link.href.slice(1) 
                              ? 'text-primary bg-base-100 translate-x-1' 
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