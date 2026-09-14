import React from 'react';
import { skillsGrouped } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 border-b border-hairline">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-burnt">05</span>
          <span className="h-[1px] w-8 bg-hairline" />
          <span className="text-xs font-mono uppercase tracking-wider text-ink-soft">Technical Competencies</span>
        </div>

        {/* Asymmetric Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl text-ink font-normal tracking-tight mb-4">
            Tools of the craft.
          </h2>
          <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-normal">
            A focused stack centered on the JavaScript/TypeScript ecosystem for scalable web products, supported by strong fundamentals in C/C++ and Java.
          </p>
        </div>

        {/* Plain Grouped Text Rows (Full Width, No Cards, No Icons) */}
        <div className="divide-y divide-hairline border-t border-b border-hairline">
          {skillsGrouped.map((group, index) => (
            <div 
              key={index}
              className="py-7 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 items-baseline"
            >
              <div className="sm:col-span-3">
                <span className="text-xs font-mono uppercase tracking-wider text-ink-soft">
                  {group.category}
                </span>
              </div>
              <div className="sm:col-span-9">
                <p className="font-serif text-lg sm:text-xl text-ink font-normal tracking-tight leading-relaxed">
                  {group.skills.map((skill, sIdx) => (
                    <span key={sIdx}>
                      <span className="hover:text-burnt transition-colors cursor-default">{skill}</span>
                      {sIdx < group.skills.length - 1 && (
                        <span className="text-hairline mx-3 select-none">·</span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
