import React from 'react';
import { projectsData } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 border-b border-hairline">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-burnt">04</span>
          <span className="h-[1px] w-8 bg-hairline" />
          <span className="text-xs font-mono uppercase tracking-wider text-ink-soft">Selected Projects</span>
        </div>

        <div className="max-w-2xl mb-20">
          <h2 className="font-serif text-3xl sm:text-5xl text-ink font-normal tracking-tight mb-4">
            Proof of work.
          </h2>
          <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-normal">
            Full-stack web applications engineered under tight hackathon sprints, focusing on institutional access control, data visualization, and AI matching algorithms.
          </p>
        </div>

        {/* Asymmetric Alternating Project Rows */}
        <div className="space-y-28">
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pt-10 border-t border-hairline first:border-t-0 first:pt-0"
              >
                {/* Content Block */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  
                  {/* Meta tag */}
                  <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-burnt">
                    <span>{project.context}</span>
                    <span className="text-hairline">/</span>
                    <span className="text-ink-soft">{project.metrics}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink font-normal tracking-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-ink-soft">
                    <span className="text-ink-muted">Tech:</span>
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="after:content-['·'] after:ml-2 last:after:content-none text-ink">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Plain text action links */}
                  <div className="pt-4 flex items-center gap-6 text-sm font-medium">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ink hover:text-burnt transition-colors flex items-center gap-1 border-b border-ink/40 hover:border-burnt pb-0.5"
                      >
                        <span>GitHub</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-burnt hover:text-burnt-hover transition-colors flex items-center gap-1 border-b border-burnt/40 hover:border-burnt pb-0.5"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                </div>

                {/* Editorial Specimen Panel (Flat, Hairline, Editorial) */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="bg-bone-dark border border-hairline p-8 sm:p-12 relative">
                    
                    {/* Header bar */}
                    <div className="flex items-center justify-between pb-4 mb-8 border-b border-hairline/80 text-xs font-mono text-ink-soft">
                      <span>PROJECT SPECIMEN // 0{index + 1}</span>
                      <span className="text-burnt font-medium">{project.specimenType}</span>
                    </div>

                    {/* Architectural snapshot specimen */}
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-ink-soft block">
                          Core Architecture
                        </span>
                        <p className="font-serif text-xl sm:text-2xl text-ink leading-snug">
                          {project.title === 'BudgetWise' 
                            ? 'Role-based access hierarchy with real-time financial tracking and Chart.js reporting.'
                            : 'Intelligent heuristic algorithm matching service requests with verified local contractors in real-time.'}
                        </p>
                      </div>

                      <div className="pt-6 border-t border-hairline/80 grid grid-cols-2 gap-4 text-xs font-mono">
                        <div>
                          <span className="text-ink-soft block">{project.constraintLabel || 'SPRINT CONSTRAINT'}</span>
                          <span className="text-ink font-medium mt-0.5 block">{project.context}</span>
                        </div>
                        <div>
                          <span className="text-ink-soft block">IMPACT / STATUS</span>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-burnt hover:underline font-medium mt-0.5 inline-flex items-center gap-1"
                          >
                            <span>{project.title === 'BudgetWise' ? 'Deployed & Verified' : '20% Latency Reduction'}</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
