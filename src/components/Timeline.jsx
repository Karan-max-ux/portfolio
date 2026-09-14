import React from 'react';
import { timelineData } from '../data/portfolioData';

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 sm:py-32 border-b border-hairline">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-burnt">03</span>
          <span className="h-[1px] w-8 bg-hairline" />
          <span className="text-xs font-mono uppercase tracking-wider text-ink-soft">Timeline & Experience</span>
        </div>

        {/* Asymmetric Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl text-ink font-normal tracking-tight mb-4">
            Chronology of work & study.
          </h2>
          <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-normal">
            A linear progression from university studies and competitive sprints to enterprise virtual internships and full-stack production delivery.
          </p>
        </div>

        {/* Single Line Timeline */}
        <div className="relative border-l border-hairline ml-2 sm:ml-4 pl-8 sm:pl-12 space-y-14">
          {timelineData.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Hairline Tick Mark (Not glowing dot) */}
              <div 
                className={`absolute -left-[33px] sm:-left-[49px] top-1.5 w-2 h-2 rounded-none ${
                  item.isCurrent ? 'bg-burnt' : 'bg-hairline group-hover:bg-burnt transition-colors'
                }`} 
              />

              {/* Year/Duration Meta */}
              <div className="text-xs font-mono text-burnt uppercase tracking-wider mb-1.5">
                {item.year}
              </div>

              {/* Role & Title */}
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <h3 className="font-serif text-xl sm:text-2xl text-ink font-normal">
                  {item.title}
                </h3>
                <span className="text-xs font-mono text-ink-soft">
                  — {item.role}
                </span>
              </div>

              {/* Brief Description */}
              <p className="text-sm sm:text-base text-ink-muted leading-relaxed max-w-2xl mb-4 font-normal">
                {item.description}
              </p>

              {/* Expanded Experience Block (InternsVeda) */}
              {item.expandedDetails && (
                <div className="mt-5 p-6 bg-bone-dark/50 border border-hairline max-w-2xl space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-ink-soft block mb-2">
                    Key Deliverables & Responsibilities:
                  </span>
                  <ul className="space-y-2.5">
                    {item.expandedDetails.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                        <span className="text-burnt font-mono select-none">—</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
