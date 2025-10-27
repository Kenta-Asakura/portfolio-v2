function Hero() {
  return (
    <section id="hero" className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello, I'm Your Name</h1>

          <p className="py-6 text-lg">
            Frontend Developer specializing in React and modern web technologies. 
            I build accessible, performant, and beautiful user experiences.
          </p>

            <button className="btn btn-primary">
              View Projects
            </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;