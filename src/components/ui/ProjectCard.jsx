function ProjectCard({ project, onSelect }) {
  // Handle keyboard navigation for cards
  const handleCardKeyDown = (e, project) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(project);
    }
  };

  return (
    <div
      className="d-card bg-base-100 border-base-300 cursor-pointer border transition-transform hover:scale-105 hover:shadow-xl"
      onClick={() => onSelect(project)}
      onKeyDown={(e) => handleCardKeyDown(e, project)}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
    >
      <figure>
        <img src={project.images.desktop} alt={project.title} className="w-full object-cover" />
      </figure>

      <div className="d-card-body">
        <h2 className="d-card-title">{project.title}</h2>
        <p className="mb-auto">{project.description}</p>

        {/* Tech Stack as Text */}
        <p className="text-base-content/60 mt-4 grow-0 text-sm">{project.tags.join(' • ')}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
