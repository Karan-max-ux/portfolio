import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#080C10] border-t border-[#1D2A33] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00D6A3] mb-2 block">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F5F3] tracking-tight font-sans">
            {skillsData.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#A6B3BA] max-w-xl mt-2 font-sans">
            {skillsData.subheading}
          </p>
        </div>

        {/* Grouped Typography Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.groups.map((group, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-[#121A22] border border-[#1D2A33] p-6 space-y-3 transition-colors hover:border-[#263640] shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
            >
              {/* Category Title */}
              <div className="flex items-center gap-2 pb-2 border-b border-[#1D2A33]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D6A3]" />
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#F1F5F3] font-semibold">
                  {group.name}
                </h3>
              </div>

              {/* Naturally Formatted Skills List with Middle Dot Separators */}
              <div className="text-sm font-sans text-[#A6B3BA] leading-relaxed pt-1">
                {group.skills.map((skill, sIdx) => (
                  <span key={sIdx}>
                    <span className="hover:text-[#F1F5F3] transition-colors cursor-default">
                      {skill}
                    </span>
                    {sIdx < group.skills.length - 1 && (
                      <span className="text-[#62717B] mx-2 select-none">·</span>
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
