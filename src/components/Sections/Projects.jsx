import { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';

const projectsData = [
  {
    id: 1,
    title: 'Photosnap Website',
    description: 'A React-based multi-page marketing website for a fictional photo-sharing app. Building this project enhanced my understanding of React props for dynamic rendering and improved my skills in managing reusable and scalable component structures.',
    image: '/images/projects/photosnap.png',
    tags: ['React', 'Sass', 'Figma'],
    github: 'https://github.com/Kenta-Asakura/photosnap-react-website',
    demo: 'https://photosnap-react-website.netlify.app/',
    // featured: true,
  },
  {
    id: 2,
    title: 'WeatherVibez',
    description: 'A scalable and modular application featuring clean, maintainable code and real-time weather data integration through an external API for a seamless user experience.',
    image: '/images/projects/weather-vibez.png',
    tags: ['TypeScript', 'Sass', 'Webpack'],
    github: 'https://github.com/Kenta-Asakura/weather-dashboard',
    demo: 'https://weather-vibez.netlify.app/',
    // featured: true,
  },
  {
    id: 3,
    title: 'CoolBeans',
    description: 'A mock e-commerce coffee shop landing page developed using Bootstrap and Sass, designed for quick development and responsive functionality.',
    image: '/images/projects/CoolBeans.png',
    tags: ['JavaScript', 'Sass', 'Bootstrap'],
    github: 'https://github.com/Kenta-Asakura/bootstrap-project',
    demo: 'https://coolbeanss.netlify.app/',
    // featured: false,
  },
];

function Projects() {
  // const [filter, setFilter] = useState('all');
  
  // const filteredProjects = filter === 'all' 
  //   ? projectsData 
  //   : projectsData.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <SectionHeader 
          headerNumber="03."
          headerTitle="My Projects" 
        />

        {/* Filter Tabs */}
        {/* <div role="tablist" className="tabs tabs-boxed max-w-sm mx-auto mb-12">
          <button 
            role="tab" 
            className={`tab ${filter === 'all' ? 'tab-active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          
          <button 
            role="tab" 
            className={`tab ${filter === 'featured' ? 'tab-active' : ''}`}
            onClick={() => setFilter('featured')}
          >
            Featured
          </button>
        </div> */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* {filteredProjects.map((project) => ( */}
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="card bg-base-100 border border-base-300"
            >
              <figure>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full object-cover" 
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.description}</p>
                
                {/* Tech Stack as Text */}
                <p className="text-sm text-base-content/60 mt-2">
                  {project.tags.join(' • ')}
                </p>
                
                <div className="card-actions justify-end mt-4">
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    View Demo
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;