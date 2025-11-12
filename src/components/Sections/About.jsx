import SectionHeader from "../ui/SectionHeader";
import AvatarImgDesktop from "../../assets/images/profile-header-desktop.jpg";
import AvatarImgMobile from "../../assets/images/profile-header-mobile.jpg";

function About() {
  return (
    <section id="about" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
           <SectionHeader 
            headerNumber="01."
            headerTitle="About Me" 
          />
          
          <div className="flex flex-col lg:flex-row gap-20 items-center">
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
                  alt="Your Name"
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