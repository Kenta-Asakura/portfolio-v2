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
    demo: '',
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