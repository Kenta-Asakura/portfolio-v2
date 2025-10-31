import { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';

const experienceData = [
  {
    id: 'hcl-tech-japan',
    company: 'HCL Tech Japan',
    title: 'Software Engineer',
    period: 'April 2025 - Present',
    responsibilities: [
      'Built and shipped web applications for a range of clients across different industries',
      'Interfaced with designers and back-end developers to create responsive, user-friendly interfaces',
      'Contributed to team code reviews and helped establish frontend development standards'
    ]
  },
  {
    id: 'cendyn',
    company: 'Cendyn',
    title: 'Web Developer',
    period: 'Jan 2024 - December 2024',
    responsibilities: [
      'Developed new features and maintained existing codebase for the company website',
      'Worked with design team to implement pixel-perfect UI components',
      'Participated in agile development process and daily standups'
    ]
  },
  {
    id: 'Dicoo',
    company: 'Dicoo',
    title: 'Junior Frontend Developer',
    period: 'August 2023 - Dec 2023',
    responsibilities: [
      'Assisted in the development of advertising campaign microsites',
      'Learned industry best practices for frontend development',
      'Collaborated with senior developers on client projects'
    ]
  }
];

function Experience() {
  // State management for active tab
  const [activeTab, setActiveTab] = useState(experienceData[0].id);
  
  // Get current job details
  const currentJob = experienceData.find(job => job.id === activeTab);

  return (
    <section id="experience" className="py-20 bg-neutral">
      <div className="container mx-auto px-4">
        {/* Section Header with Numbering */}
        {/* <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-content">
            <span className="text-primary font-mono text-xl mr-2">02.</span>
            Where I've Worked
          </h2>
          <div className="h-px bg-base-300 mt-4 ml-24"></div>
        </div> */}
        <SectionHeader 
          headerNumber="02."
          headerTitle="Where I've Worked" 
        />

        {/* Tabbed Experience Layout */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Tab List - Company Names */}
            <div 
              role="tablist" 
              className="flex md:flex-col overflow-x-auto md:overflow-visible border-b-2 md:border-b-0 md:border-l-2 border-base-300"
              aria-label="Company tabs"
            >
              {experienceData.map((job) => (
                <button
                  key={job.id}
                  role="tab"
                  aria-selected={activeTab === job.id}
                  aria-controls={`panel-${job.id}`}
                  id={`tab-${job.id}`}
                  onClick={() => setActiveTab(job.id)}
                  className={`
                    px-5 py-3 text-left font-mono text-sm whitespace-nowrap
                    transition-all duration-200 
                    border-l-0 md:border-l-2 border-b-2 md:border-b-0
                    focus:outline-none focus:bg-primary/10
                    ${activeTab === job.id 
                      ? 'text-primary border-primary bg-primary/5' 
                      : 'text-neutral-content/60 border-transparent hover:text-primary hover:bg-primary/5'
                    }
                  `}
                >
                  {job.company}
                </button>
              ))}
            </div>

            {/* Tab Panel - Job Details */}
            <div 
              role="tabpanel"
              id={`panel-${activeTab}`}
              aria-labelledby={`tab-${activeTab}`}
              className="flex-1 min-h-[400px]"
            >
              {currentJob && (
                <div className="space-y-4">
                  {/* Job Title & Company */}
                  <h3 className="text-2xl font-bold text-neutral-content">
                    {currentJob.title}{' '}
                    <span className="text-primary">@ {currentJob.company}</span>
                  </h3>

                  {/* Date Range */}
                  <p className="text-sm font-mono text-neutral-content/60">
                    {currentJob.period}
                  </p>

                  {/* Responsibilities List */}
                  <ul className="space-y-4 mt-6">
                    {currentJob.responsibilities.map((item, index) => (
                      <li 
                        key={index}
                        className="flex gap-3 text-neutral-content/80 leading-relaxed"
                      >
                        {/* Chevron Icon */}
                        <svg 
                          className="w-4 h-4 text-primary flex-shrink-0 mt-1.5"
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 5l7 7-7 7" 
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;