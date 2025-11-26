import SectionHeader from "../ui/SectionHeader";
import AvatarImgDesktop from "../../assets/images/profile-header-desktop.jpg";
import AvatarImgMobile from "../../assets/images/profile-header-mobile.jpg";

function About() {
  const techStack = [
    'React',
    'Tailwind CSS', 
    'JavaScript',
    'Node.js',
    'Express',
    'PostgreSQL'
  ];

  return (
    <section id="about" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
           <SectionHeader 
            headerNumber="01."
            headerTitle="About Me" 
          />
          
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 space-y-4 text-base lg:text-lg text-base-content/90 leading-relaxed">
              {/* Bio */}
              <p>
                With Filipino-Japanese heritage and experience working across culturally diverse teams, 
                I bring a unique perspective to software development. My journey into web development 
                started with curiosity about how websites worked, which quickly turned into a passion 
                for building them. What began as tinkering with HTML and CSS evolved into creating 
                full-fledged applications with JavaScript and React.
              </p>

              <p>
                Fast-forward to today, and I've had the opportunity to work across different industries, from 
                hospitality tech to consulting agencies. While I'm comfortable working with various technologies 
                across the stack, I'm most at home building modern web applications where clean code meets 
                great user experience.
              </p>

              <p>
                My approach is simple: stay adaptable, write maintainable code, and never stop learning. 
                Whether it's picking up a new framework or debugging a tricky issue, I treat each challenge 
                as a chance to level up.
              </p>

              <p> 
                When I'm not at my desk coding, you'll find me pushing myself at the skatepark or the gym—
                same energy, different terrain. 🛹🏋🏻
              </p>
              
              {/* Main Tech Stack */}
              <div className="mt-8 pt-6">
                <h3 className="text-xl font-semibold mb-4 text-base-content">
                  Main Technologies I work with
                </h3>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {techStack.map((tech, index) => (
                    <li 
                      key={tech}
                      className="flex items-center gap-3 text-base text-base-content/80"
                    >
                      {/* Chevron Icon */}
                      <svg 
                        className="w-4 h-4 text-primary flex-shrink-0"
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Avatar */}
            <div className="d-avatar">
              <div className="w-72 ring-primary overflow-hidden">
                {/* Desktop */}          
                <img
                  src={AvatarImgDesktop}
                  alt="Your Name"
                  className="hidden lg:block w-full h-auto object-cover"
                />

                {/* Mobile */}
                <img
                  src={AvatarImgMobile}
                  alt="Kenta Asakura"
                  className="block lg:hidden w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;