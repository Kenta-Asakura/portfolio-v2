function About() {
  return (
    <section id="about" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1 prose lg:prose-lg">
              {/* Bio */}
              <p>
                I'm a passionate Frontend Developer with 1 year of experience building 
                modern web applications. I specialize in React, JavaScript, and creating 
                accessible user interfaces.
              </p>
              <p>
                Currently diving into Full-Stack Development to expand my skill set and 
                build end-to-end solutions.
              </p>
              
              {/* Main Tech Stack */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
                <p className="text-base-content/80">
                  React, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, DaisyUI, 
                  Git, Vite, Node.js, Express, MongoDB
                </p>
              </div>
            </div>

            {/* Avatar */}
            <div className="avatar">
              <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="" alt="Your Name" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;