import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../data/navigation";

function NavLinks({ handleNavClick }) {
    const [activeSection, setActiveSection] = useState('');

    // Intersection Observer for active section tracking
    useEffect(() => {
        // Track visible sections with their intersection ratios
        const visibleSections = new Map();

        // Check if user has scrolled to bottom
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // If user is within 100px of bottom, activate last section
            if (scrollTop + windowHeight >= documentHeight - 100) {
                const lastLink = NAV_LINKS[NAV_LINKS.length - 1];
                const lastSectionId = lastLink.href.slice(1);
                setActiveSection(lastSectionId);
                return;
            }
            
            // Otherwise use normal intersection observer logic
            if (visibleSections.size > 0) {
                const mostVisible = [...visibleSections.entries()]
                    .reduce((max, [id, ratio]) => 
                        ratio > max.ratio ? { id, ratio } : max
                    , { id: '', ratio: 0 });

                setActiveSection(mostVisible.id);
            }
        };

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px', // Trigger when section enters the viewport's active zone (top 20% to bottom 40%)
            threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] // Multiple thresholds for granular visibility tracking
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Store intersection ratio for each visible section
                    visibleSections.set(entry.target.id, entry.intersectionRatio);
                } else {
                    // Remove section when it leaves the viewport
                    visibleSections.delete(entry.target.id);
                }
            });

            handleScroll(); // Run scroll check after intersection updates
        }, observerOptions);

        // Observe all sections
        NAV_LINKS.forEach((link) => {
            const sectionId = link.href.slice(1); // Remove '#' from href
            const element = document.getElementById(sectionId);
            
            if (element) {
                observer.observe(element);
            }
        });

        // Add scroll listener for bottom detection
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Initial check
        handleScroll();

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <ul className="lg:mb-auto">
            {NAV_LINKS.map((link) => {
                const sectionId = link.href.slice(1);
                const isActive = activeSection === sectionId;
                
                return (
                    <li key={link.name}>
                        <a 
                            href={link.href}
                            onClick={handleNavClick}
                            className={`
                                flex items-center rounded-lg
                                text-lg lg:text-base 
                                text-base-content/80 font-secondary font-normal uppercase transition-all 
                                hover:bg-base-100 hover:text-primary hover:translate-x-1 
                                focus:outline-none focus:ring-2 focus:ring-primary 
                                ${isActive 
                                  ? 'text-primary bg-base-100 translate-x-1' 
                                  : 'text-base-content'
                                }`}
                            aria-current={isActive ? 'page' : undefined}
                        >
                            {link.name}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}

export default NavLinks;