// import { useState, useEffect } from 'react';
// import Header from './Header';
// import Footer from './Footer';

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
    <div className="flex flex-col min-h-screen bg-base-100">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* <Header /> */}
      
      {/* Main content area */}
      <main 
        id="main-content"
        className="flex-grow w-full"
        role="main"
      >
        {children}
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default Layout;