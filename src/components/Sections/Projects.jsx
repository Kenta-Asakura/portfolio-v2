import { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { projects } from '../../data/projects';

function Projects() {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-20 bg-base-100">
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
            <Card
              key={project.id}
              title={project.title}
              image={project.image}
              imageAlt={project.title}
              actions={
                <>
                  <Button variant="primary" size="sm">
                    View Demo
                  </Button>
                  <Button variant="secondary" size="sm">
                    GitHub
                  </Button>
                </>
              }
            >
              <p>{project.description}</p>
              {/* Tech Stack as Text */}
              <p className="text-sm text-base-content/60 mt-4">
                {project.tags.join(' • ')}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;