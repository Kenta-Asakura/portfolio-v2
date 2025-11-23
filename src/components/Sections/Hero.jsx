function Hero() {
  return (
    <section id="hero" className="d-hero min-h-screen bg-base-200">
      <div className="d-hero-content">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hi, I'm Kenta Asakura</h1>

          <p className="py-6 text-lg">
            A Software Engineer with experience across multiple technologies and the ability to adapt to diverse project requirements. 
            My specialty lies in Web Development, where I leverage modern technologies to create intuitive, accessible, and performant applications
          </p>

            <button className="d-btn d-btn-primary">
              View Projects
            </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;