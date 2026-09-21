import React from 'react';
import { skillsGrouped } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-14 sm:py-20 border-b border-hairline">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10 sm:mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-burnt">03</span>
          <span className="h-[1px] w-8 bg-hairline" />
          <span className="text-xs font-mono uppercase tracking-wider text-ink-soft">Skills</span>
        </div>

        {/* Asymmetric Header */}
        <div className="max-w-2xl mb-12 sm:mb-14">
          <h2 className="font-serif text-3xl sm:text-5xl text-ink font-normal tracking-tight mb-4">
            Technical skills.
          </h2>
          <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-normal">
            Core technologies and developer tools used across production applications.
          </p>
        </div>

        {/* 4-Column Balanced Category Grid (Compact, No Fluff) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsGrouped.map((group, index) => (
            <div 
              key={index}
              className="bg-bone-dark/40 border border-hairline p-6 hover:border-hairline-strong transition-all duration-200"
            >
              <div className="pb-3 mb-4 border-b border-hairline/80 flex items-center justify-between text-xs font-mono">
                <span className="uppercase tracking-wider text-ink-soft">{group.category}</span>
                <span className="text-burnt font-mono text-[11px]">0{index + 1}</span>
              </div>
              <ul className="space-y-2">
                {group.skills.map((skill, sIdx) => (
                  <li 
                    key={sIdx} 
                    className="font-serif text-lg text-ink font-normal tracking-tight flex items-center gap-2 hover:text-burnt transition-colors cursor-default"
                  >
                    <span className="w-1 h-1 rounded-full bg-burnt inline-block" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
