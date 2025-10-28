import { useState } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with cart functionality and payment integration',
    image: '/images/project1.jpg',
    tags: ['React', 'Tailwind', 'Stripe API'],
    github: 'https://github.com/yourusername/project1',
    demo: 'https://project1-demo.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates',
    image: '/images/project2.jpg',
    tags: ['React', 'Firebase', 'DaisyUI'],
    github: 'https://github.com/yourusername/project2',
    demo: 'https://project2-demo.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather information with interactive maps',
    image: '/images/project3.jpg',
    tags: ['React', 'OpenWeather API', 'Chart.js'],
    github: 'https://github.com/yourusername/project3',
    demo: 'https://project3-demo.com',
    featured: false,
  },
];

function Projects() {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.featured);

  return (
    <section id="projects" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        
        {/* Filter Tabs */}
        <div role="tablist" className="tabs tabs-boxed max-w-sm mx-auto mb-12">
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
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
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