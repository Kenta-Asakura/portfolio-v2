function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-100 align-bottom" role="contentinfo">
      <div className="container mx-auto px-4 pb-4 text-center sm:px-6 md:pb-6 lg:px-8">
        {/* Copyright */}
        <p className="border-base-300 text-base-content/60 mx-auto mt-1 border-t pt-4 text-sm md:pt-6">
          Designed & Built by Kenta Asakura © {currentYear}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
