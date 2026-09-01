import React from 'react';
import { nowData } from '../data/portfolioData';

export default function Now() {
  return (
    <section id="now" className="py-14 border-t border-border-subtle bg-bg-subtle/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Distinct Container */}
        <div className="rounded-2xl bg-surface/80 border border-border p-6 sm:p-8">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border-subtle mb-6">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded text-[11px] font-mono font-semibold bg-accent-green/10 border border-accent-green/30 text-accent-green">
                {nowData.sectionLabel}
              </span>
              <h2 className="text-base sm:text-lg font-sans font-semibold text-content-primary">
                {nowData.headline}
              </h2>
            </div>
            <span className="text-xs font-mono text-content-muted">
              Live updates
            </span>
          </div>

          {/* 3 Columns: Building, Learning, Next */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {nowData.items.map((item, idx) => {
              const accentColorClass = 
                item.accent === 'green' 
                  ? 'text-accent-green' 
                  : item.accent === 'cyan' 
                  ? 'text-accent-cyan' 
                  : 'text-accent-purple';
              
              const accentDotClass = 
                item.accent === 'green' 
                  ? 'bg-accent-green' 
                  : item.accent === 'cyan' 
                  ? 'bg-accent-cyan' 
                  : 'bg-accent-purple';

              return (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${accentDotClass}`} />
                    <span className={`text-xs font-mono uppercase tracking-wider font-medium ${accentColorClass}`}>
                      {item.category}
                    </span>
                  </div>
                  <p className="text-sm font-sans font-medium text-content-secondary pl-3.5">
                    {item.description}
                  </p>
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
