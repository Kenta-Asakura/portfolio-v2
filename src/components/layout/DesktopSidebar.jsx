import NavLinks from '../ui/NavLinks';
import SocialLinks from '../ui/SocialLinks';

function DesktopSidebar() {
  const handleNavClick = (e) => {
    const href = e.currentTarget.getAttribute('href');

    if (href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);

      if (element) {
        const offset = 20;
        const elementPosition = element.offsetTop - offset;

        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <aside
      className="sticky top-0 hidden h-screen lg:block"
      role="navigation"
      aria-label="Desktop navigation"
    >
      <div className="d-menu bg-base-100 justify-cente r min-h-full gap-4 px-4 py-8">
        <a
          href="#hero"
          onClick={handleNavClick}
          className="focus:ring-primary mb-8 rounded-lg pl-4 focus:ring-2 focus:ring-offset-2 focus:outline-none"
        >
          <h1 className="text-primary text-2xl font-bold">K</h1>
        </a>

        <NavLinks handleNavClick={handleNavClick} />

        <div className="d-fab items-center">
          <div
            tabIndex={0}
            role="button"
            className="d-btn d-btn-outline d-btn-lg d-btn-circle d-btn-primary"
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

          <div className="mb-4 flex flex-col gap-2.5">
            <SocialLinks />
          </div>

          <div className="d-fab-close">
            <span className="d-btn d-btn-circle d-btn-lg d-btn-primary mx-auto">✕</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default DesktopSidebar;
