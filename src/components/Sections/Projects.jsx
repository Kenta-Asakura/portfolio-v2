import { useState } from 'react';
import { projectsData } from '../../data/projects';
import SectionHeader from '../ui/SectionHeader';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    // !TEST - Log the clicked project title
    // console.log('Clicked:', project.title)
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <SectionHeader 
          headerNumber="03."
          headerTitle="My Projects" 
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="card bg-base-100 border border-base-300 cursor-pointer transition-transform hover:scale-105 hover:shadow-xl"
              onClick={() => openModal(project)}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${project.title}`}
            >
              <figure>
                <img 
                  // src={project.image} 
                  alt={project.title} 
                  className="w-full object-cover" 
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p className="mb-auto">{project.description}</p>
                
                {/* Tech Stack as Text */}
                <p className="text-sm text-base-content/60 grow-0">
                  {project.tags.join(' • ')}
                </p>
                
                <div className="card-actions justify-end mt-4">
                  <span className="text-sm text-primary font-medium">
                    Click to learn more →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <dialog 
          className="modal modal-open"
          aria-labelledby="modal-title"
          role="dialog"
        >
          <div className="modal-box max-w-4xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="btn btn-lg btn-circle btn-ghost absolute right-2 top-2"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Project Image */}
            <figure className="mb-6">
              {selectedProject.images.desktop ? (
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet={selectedProject.images.desktop}
                  />

                  <img
                    src={selectedProject.images.mobile || selectedProject.images.desktop}
                    alt={selectedProject.images.alt}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </picture>
              ) : (
                <div className="w-full h-64 bg-base-300 rounded-lg flex items-center justify-center text-base-content/40">
                  <span>Image Coming Soon</span>
                </div>
              )}
            </figure>
            

            {/* Project Title */}
            <h3 id="modal-title" className="font-bold text-3xl mb-4">
              {selectedProject.title}
            </h3>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tags.map((tag) => (
                <span 
                  key={tag}
                  className="badge badge-ghost badge-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Long Description */}
            <div className="prose prose-sm max-w-none mb-6">
              <h4 className="text-xl font-semibold mb-2">About</h4>
              <p className="text-base-content/80">
                {selectedProject.longDescription}
              </p>
            </div>

            {/* Key Features */}
            {selectedProject.features && (
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-2"
                    >
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-base-content/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges */}
            {selectedProject.challenges && (
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2">Technical Challenges</h4>
                <p className="text-base-content/80">
                  {selectedProject.challenges}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="modal-action">
              <a 
                href={selectedProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Live Demo
              </a>
              <a 
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                View Source Code
              </a>
            </div>
          </div>

          {/* Modal Backdrop */}
          <form method="dialog" className="modal-backdrop">
            <button onClick={closeModal}>close</button>
          </form>
        </dialog>
      )}
    </section>
  );
}

export default Projects;