// import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

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
    <div className="bg-base-100 flex min-h-screen flex-col lg:flex-row">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="focus:bg-primary sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <Header />

      {/* Main content container */}
      <div className="min-h-screen grow flex-col">
        <Main>{children}</Main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
