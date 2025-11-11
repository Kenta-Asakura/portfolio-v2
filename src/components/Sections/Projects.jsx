import { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';

const projectsData = [
  {
    id: 1,
    title: 'Photosnap Website',
    description: 'A React-based multi-page marketing website for a fictional photo-sharing app. Building this project enhanced my understanding of React props for dynamic rendering and improved my skills in managing reusable and scalable component structures.',
    longDescription: 'Built a full-featured React-based multi-page marketing website for a fictional photo-sharing app. This project enhanced my understanding of React props for dynamic rendering and improved my skills in managing reusable and scalable component structures. The website features multiple pages with consistent navigation and responsive design.',
    image: '/images/projects/photosnap.png',
    tags: ['React', 'Sass', 'Figma'],
    features: [
      'Multi-page React architecture with routing',
      'Reusable component library',
      'Dynamic content rendering with props',
      'Fully responsive design from mobile to desktop',
      'Pixel-perfect implementation from Figma designs'
    ],
    challenges: 'Managing reusable component structures and implementing dynamic rendering with React props while maintaining scalability and clean code organization.',
    github: 'https://github.com/Kenta-Asakura/photosnap-react-website',
    demo: 'https://photosnap-react-website.netlify.app/',
  },
  {
    id: 2,
    title: 'Name Base',
    description: 'Collaborative task management with real-time updates',
    longDescription: 'Developed a collaborative task management application that enables teams to work together in real-time. Features include drag-and-drop task organization, team member assignments, and instant synchronization across all connected clients.',
    image: '/images/project2.jpg',
    tags: ['React', 'DaisyUI', 'Hono', "Docker"],
    features: [
      // 'Real-time collaboration with Firebase',
      // 'Drag-and-drop task organization',
      'Team member assignments',
      'Project boards and lists',
      'Activity tracking and notifications'
    ],
    challenges: 'Ensuring data consistency across multiple users while maintaining real-time updates required implementing optimistic UI updates and conflict resolution strategies.',
    github: 'https://github.com/yourusername/project2',
    demo: 'test.com',
  },
   {
    id: 3,
    title: 'WeatherVibez',
    description: 'A scalable and modular application featuring clean, maintainable code and real-time weather data integration through an external API for a seamless user experience.',
    longDescription: 'Developed a scalable and modular weather application featuring clean, maintainable code architecture. The application integrates real-time weather data through an external API to provide users with accurate and up-to-date weather information. Built with TypeScript for type safety and better developer experience.',
    image: '/images/projects/weather-vibez.png',
    tags: ['TypeScript', 'Sass', 'Webpack'],
    features: [
      'Real-time weather data from external API',
      'TypeScript for type safety and better DX',
      'Modular architecture with Webpack',
      'Clean and maintainable codebase',
      'Responsive UI with custom Sass styling'
    ],
    challenges: 'Implementing clean architecture with TypeScript while managing external API integration and ensuring real-time data synchronization for a seamless user experience.',
    github: 'https://github.com/Kenta-Asakura/weather-dashboard',
    demo: 'https://weather-vibez.netlify.app/',
  },

];

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
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Project Image */}
            <figure className="mb-6">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg"
              />
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
                  className="badge badge-primary badge-lg"
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
          </div>
        </dialog>
      )}
    </section>
  );
}

export default Projects;