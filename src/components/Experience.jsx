import React from 'react';
import { timelineData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-border-subtle relative">
      <div id="education" className="sr-only" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-green mb-2 block">
            Experience & Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-content-primary tracking-tight font-sans">
            Where I've Worked & Learned
          </h2>
          <p className="text-sm sm:text-base text-content-secondary max-w-xl mt-3 font-sans">
            A chronological timeline of hands-on internship engineering and computer science foundations.
          </p>
        </div>

        {/* Clean Editorial Timeline */}
        <div className="relative border-l border-border ml-3 sm:ml-4 pl-6 sm:pl-10 space-y-14">
          {timelineData.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Small Green Timeline Indicator Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-bg border-2 border-accent-green flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green" />
              </div>

              {/* Editorial Item Content */}
              <div className="space-y-4">
                
                {/* Meta Row: Period & Location */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono text-content-muted">
                    {item.period}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-surface border border-border text-content-secondary">
                    {item.badge}
                  </span>
                </div>

                {/* Role & Organization */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-content-primary font-sans">
                    {item.role}
                  </h3>
                  <div className="text-sm font-sans font-medium text-accent-green mt-0.5 flex items-center gap-1.5">
                    <span>{item.organization}</span>
                    <span className="text-border">·</span>
                    <span className="text-content-muted text-xs font-normal">{item.location}</span>
                  </div>
                </div>

                {/* Brief Summary */}
                <p className="text-sm text-content-secondary font-sans leading-relaxed">
                  {item.summary}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 text-xs sm:text-sm text-content-secondary font-sans">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="text-accent-green mt-1 text-xs">▪</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies Tagline */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.technologies.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface border border-border text-content-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
