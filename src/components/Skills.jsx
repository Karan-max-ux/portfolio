import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-border-subtle relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-green mb-2 block">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-content-primary tracking-tight font-sans">
            {skillsData.heading}
          </h2>
          <p className="text-sm sm:text-base text-content-secondary max-w-xl mt-2 font-sans">
            {skillsData.subheading}
          </p>
        </div>

        {/* Grouped Typography Layout (Natural, not a repetitive badge grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.groups.map((group, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-surface border border-border p-6 space-y-3 transition-colors hover:border-border-button"
            >
              {/* Category Title */}
              <div className="flex items-center gap-2 pb-2 border-b border-border-subtle">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green" />
                <h3 className="text-xs font-mono uppercase tracking-wider text-content-primary font-semibold">
                  {group.name}
                </h3>
              </div>

              {/* Naturally Formatted Skills List with Middle Dot Separators */}
              <div className="text-sm font-sans text-content-secondary leading-relaxed pt-1">
                {group.skills.map((skill, sIdx) => (
                  <span key={sIdx}>
                    <span className="hover:text-content-primary transition-colors cursor-default">
                      {skill}
                    </span>
                    {sIdx < group.skills.length - 1 && (
                      <span className="text-content-muted mx-2 select-none">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
