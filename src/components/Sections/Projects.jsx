import { useState } from 'react';
import { projectsData } from '../../data/projects';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from '../ui/ProjectCard';
import ProjectModal from '../ui/ProjectModal';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="bg-base-100 min-h-[60vh] py-20">
      <div className="container mx-auto px-4">
        <SectionHeader headerNumber="03." headerTitle="My Projects" />

        {/* Projects Card Grid */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Project Card */}
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}

export default Projects;
