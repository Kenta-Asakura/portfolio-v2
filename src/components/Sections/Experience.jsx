import { useState } from 'react';
import { experienceData } from '../../data/experiences';

import SectionHeader from '../ui/SectionHeader';
import ChevronIcon from '../ui/ChevronIcon';

function Experience() {
  // State management for active tab and animations
  const [activeTab, setActiveTab] = useState(experienceData[0].id);
  const [isAnimating, setIsAnimating] = useState(false);

  // Get current job details
  const currentJob = experienceData.find((job) => job.id === activeTab);

  // Handle tab change with animation
  const handleTabChange = (jobId) => {
    if (jobId === activeTab || isAnimating) return;

    // Start exit animation
    setIsAnimating(true);

    // Wait for exit animation, then change tab
    setTimeout(() => {
      setActiveTab(jobId);
      // Brief pause before entrance animation
      setTimeout(() => {
        setIsAnimating(false);
      }, 30);
    }, 150);
  };

  return (
    <section id="experience" className="bg-base-100 py-20">
      <div className="container mx-auto px-4">
        <SectionHeader headerNumber="02." headerTitle="Where I've Worked" />

        {/* Tabbed Experience Layout */}
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-start gap-8 md:flex-row">
            {/* Tab List - Company Names */}
            <div
              role="tablist"
              className="border-base-300 flex overflow-x-auto border-b-4 md:flex-col md:overflow-visible md:border-b-0 md:border-l-4"
              aria-label="Company tabs"
            >
              {experienceData.map((job) => (
                <button
                  key={job.id}
                  role="tab"
                  aria-selected={activeTab === job.id}
                  aria-controls={`panel-${job.id}`}
                  id={`tab-${job.id}`}
                  onClick={() => handleTabChange(job.id)}
                  disabled={isAnimating}
                  className={`font-button focus:bg-primary/10 border-b-2 border-l-0 px-5 py-3 text-left text-sm whitespace-nowrap transition-all duration-200 focus:outline-none md:border-b-0 md:border-l-2 ${
                    activeTab === job.id
                      ? 'text-primary border-primary bg-primary/5'
                      : 'text-neutral-content/60 hover:text-primary hover:bg-primary/5 border-transparent'
                  } `}
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
              className="min-h-[400px] flex-1"
            >
              {currentJob && (
                <div
                  className={`space-y-4 transition-all duration-300 ease-in-out ${
                    isAnimating ? 'translate-x-4 opacity-0' : 'translate-x-0 opacity-100'
                  } `}
                >
                  {/* Job Title & Company */}
                  <h3 className="text-neutral-content text-2xl font-bold">
                    {currentJob.title} <span className="text-primary">@ {currentJob.company}</span>
                  </h3>

                  {/* Date Range */}
                  <p className="text-neutral-content/60 font-mono text-sm">{currentJob.period}</p>

                  {/* Responsibilities List */}
                  <ul className="mt-6 space-y-4">
                    {currentJob.responsibilities.map((item, index) => (
                      <li
                        key={index}
                        className={`text-neutral-content/80 flex gap-3 leading-relaxed transition-all duration-300 ease-in-out ${
                          isAnimating ? 'translate-x-4 opacity-0' : 'translate-x-0 opacity-100'
                        } `}
                        style={{
                          transitionDelay: isAnimating ? '0ms' : `${index * 75}ms`,
                        }}
                      >
                        <ChevronIcon className="text-primary mt-1.5" />
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
