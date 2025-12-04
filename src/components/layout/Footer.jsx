function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-base-100 align-bottom"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-4 md:pb-6 text-center">
        {/* Copyright */}
        <p className="mx-auto border-t border-base-300 text-sm text-base-content/60 pt-4 md:pt-6 mt-1">
          Designed & Built by Kenta Asakura © {currentYear}
        </p>
      </div>
    </footer>
  );
}

export default Footer;