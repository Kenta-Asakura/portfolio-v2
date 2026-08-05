import ChevronIcon from './ChevronIcon';

function ProjectModal({ project, onClose }) {
  return (
    <dialog open className="d-modal d-modal-open" aria-labelledby="modal-title" role="dialog">
      <div className="d-modal-box max-h-[90vh] max-w-4xl overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="d-btn d-btn-lg d-btn-circle d-btn-ghost absolute top-2 right-2"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Project Image */}
        <figure className="mb-6">
          {project.images.desktop ? (
            <picture>
              <source media="(min-width: 1024px)" srcSet={project.images.desktop} />

              <img
                src={project.images.mobile || project.images.desktop}
                alt={project.images.alt}
                className="h-64 w-full rounded-lg object-cover"
              />
            </picture>
          ) : (
            <div className="bg-base-300 text-base-content/40 flex h-64 w-full items-center justify-center rounded-lg">
              <span>Image Coming Soon</span>
            </div>
          )}
        </figure>

        {/* Project Title */}
        <h3 id="modal-title" className="mb-4 text-3xl font-bold">
          {project.title}
        </h3>

        {/* Tech Stack Badges */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="d-d-badge d-d-badge-ghost d-d-badge-md">
              {tag}
            </span>
          ))}
        </div>

        {/* Long Description */}
        <div className="prose prose-sm mb-6 max-w-none">
          <h4 className="mb-2 text-xl font-semibold">About</h4>

          <p className="text-base-content/80">{project.longDescription}</p>
        </div>

        {/* Key Features */}
        {project.features && (
          <div className="mb-6">
            <h4 className="mb-3 text-xl font-semibold">Key Features</h4>

            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <ChevronIcon className="text-primary mt-1" />
                  <span className="text-base-content/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Challenges */}
        {project.challenges && (
          <div className="mb-6">
            <h4 className="mb-2 text-xl font-semibold">Technical Challenges</h4>

            <p className="text-base-content/80">{project.challenges}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="d-modal-action">
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="d-btn d-btn-outline d-btn-primary"
          >
            View Live Demo
          </a>

          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="d-btn d-btn-outline d-btn-secondary"
          >
            View Source Code
          </a>
        </div>
      </div>

      {/* Modal Backdrop */}
      <form method="dialog" className="d-modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  );
}

export default ProjectModal;
