function Hero() {
  return (
    <section id="hero" className="d-hero min-h-screen bg-base-100">
      <div className="d-hero-content">
        <div className="max-w-md">
          <p className="text-primary text-2xl">Hi, I'm</p>
          <h1 className="text-7xl font-bold leading-none md:whitespace-nowrap">Kenta Asakura.</h1>
          <p className="py-6 text-base-content/80">
            A Software Engineer with experience across diverse projects. 
            My specialty lies in Web Development, where I leverage modern technologies to create exceptional digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;