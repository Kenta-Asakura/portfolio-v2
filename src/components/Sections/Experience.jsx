// Data lives in the component file
const experienceData = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Tech Company Inc.',
    period: '2024 - Present',
    description: 'Developing user-facing features using React and modern JavaScript. Collaborated with design team to implement responsive, accessible interfaces.',
  },
  {
    id: 2,
    title: 'Junior Developer',
    company: 'Startup XYZ',
    period: '2023 - 2024',
    description: 'Built and maintained web applications. Learned industry best practices and agile development methodologies.',
  },
  {
    id: 3,
    title: 'Freelance Developer',
    company: 'Self-Employed',
    period: '2022 - 2023',
    description: 'Created custom websites for small businesses and startups. Gained experience with client communication and project management.',
  },
];

function Experience() {
  return (
    <section id="experience" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        
        {/* Timeline */}
        <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact max-w-4xl mx-auto">
          {experienceData.map((job, index) => (
            <li key={job.id}>
              {index !== 0 && <hr />}
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-primary">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd" />
                </svg>
              </div>
              <div className={`${index % 2 === 0 ? 'timeline-start' : 'timeline-end'} mb-10`}>
                <time className="font-mono italic">{job.period}</time>
                <div className="text-lg font-black">{job.title}</div>
                <div className="text-base-content/70">{job.company}</div>
                <p className="mt-2">{job.description}</p>
              </div>
              {index !== experienceData.length - 1 && <hr />}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Experience;