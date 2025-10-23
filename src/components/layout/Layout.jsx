// import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  // For SSR - Uncomment the following lines to handle hydration issues

//  const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null; // Prevent hydration issues
//   }

  return (
   <div className="flex min-h-screen bg-base-100">

      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="
          sr-only focus:not-sr-only 
          focus:absolute focus:top-4 focus:left-4 focus:z-50 
          focus:px-4 focus:py-2 
          focus:bg-primary focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      <div className="min-h-screen w-full bg-base-100">
        <Header />
        
        <div className="lg:pl-64">
          <div className="flex flex-col min-h-screen">
            {/* Mobile header spacer */}
            <div className="h-16 lg:hidden" aria-hidden="true" />
            
            <main className="flex-grow w-full">{children}</main>
            
            <Footer /> 
          </div>
        </div>
      </div>

    </div>
  );
}

export default Layout;