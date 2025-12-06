import SectionHeader from "../ui/SectionHeader";
import ChevronIcon from '../ui/ChevronIcon';
import AvatarImgDesktop from "../../assets/images/profile-header-desktop.jpg";
import AvatarImgMobile from "../../assets/images/profile-header-mobile.jpg";

function About() {
  const techStack = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Tailwind CSS',
    'Node.js/Express',
    'PostgreSQL',
  ];

  return (
    <section id="about" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            headerNumber="01."
            headerTitle="About Me" 
          />
          
          <div className="flex max-lg:flex-col gap-16 max-lg:items-center">
            {/* Bio Content  */}
            <div className="font-sans flex-1 space-y-5 text-base-content/80 leading-relaxed">
              <p>
                With Filipino-Japanese heritage and experience working across culturally diverse teams, 
                I bring a unique perspective to software development. My journey into web development 
                started with curiosity about how websites worked, which quickly turned into a passion 
                for building them. What began as tinkering with HTML and CSS evolved into creating 
                full-fledged applications with JavaScript and React.
              </p>

              <p>
                Fast-forward to today, and I've had the privilege of working at{' '}
                <span className="text-primary font-medium">a consulting agency</span>,{' '}
                <span className="text-primary font-medium">a hospitality tech company</span>, and{' '}
                <span className="text-primary font-medium">a digital solutions provider</span>. 
                While I'm comfortable working with various technologies across the stack, I'm most 
                at home building modern web applications where clean code meets great user experience.
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
              
              {/* Tech Stack Section */}
              <div className="pt-6">
                <p className="text-base-content/70 mb-4">
                  Here are a few technologies I've been working with recently:
                </p>
                
                <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
                  {techStack.map((tech) => (
                   <li 
                      key={tech}
                      className="flex items-center gap-3 text-sm font-mono text-base-content/70"
                    >
                      <ChevronIcon className="text-primary" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Avatar with Overlay Effect and Custom animation */}
            <div className="flex-shrink-0 rounded-md">
              {/* Desktop Image */}
              <img
                src={AvatarImgDesktop}
                alt="Kenta Asakura"
                className="about-avatar hidden lg:block w-full h-auto object-cover rounded-md"
              />

              {/* Mobile Image */}
              <img
                src={AvatarImgMobile}
                alt="Kenta Asakura"
                className="about-avatar block lg:hidden w-full h-auto object-cover rounded-md"
              />
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;