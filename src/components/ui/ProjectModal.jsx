function ProjectModal({ project, onClose }) {
    return (
        <dialog 
            className="d-modal d-modal-open"
            aria-labelledby="modal-title"
            role="dialog"
        >
            <div className="d-modal-box max-w-4xl max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="d-btn d-btn-lg d-btn-circle d-btn-ghost absolute right-2 top-2"
                    aria-label="Close modal"
                >
                    ✕
                </button>

                {/* Project Image */}
                <figure className="mb-6">
                    {project.images.desktop ? (
                        <picture>
                            <source
                            media="(min-width: 1024px)"
                            srcSet={project.images.desktop}
                            />

                            <img
                            src={project.images.mobile || project.images.desktop}
                            alt={project.images.alt}
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
                    {project.title}
                </h3>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                        <span 
                            key={tag}
                            className="d-d-badge d-d-badge-ghost d-d-badge-md"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Long Description */}
                <div className="prose prose-sm max-w-none mb-6">
                    <h4 className="text-xl font-semibold mb-2">About</h4>

                    <p className="text-base-content/80">
                        {project.longDescription}
                    </p>
                </div>

                {/* Key Features */}
                {project.features && (
                    <div className="mb-6">
                        <h4 className="text-xl font-semibold mb-3">Key Features</h4>

                        <ul className="space-y-2">
                            {project.features.map((feature, index) => (
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
                {project.challenges && (
                    <div className="mb-6">
                        <h4 className="text-xl font-semibold mb-2">Technical Challenges</h4>

                        <p className="text-base-content/80">
                            {project.challenges}
                        </p>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="d-modal-action">
                    <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-btn d-btn-outline d-btn-primary"
                    >
                        View Live Demo
                    </a>
                    
                    <a 
                        href={project.github}
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
    )
}

export default ProjectModal;