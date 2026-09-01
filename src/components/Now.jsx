import React from 'react';
import { nowData } from '../data/portfolioData';

export default function Now() {
  return (
    <section id="now" className="py-14 bg-[#080C10] border-t border-[#1D2A33] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Distinct Container */}
        <div className="rounded-2xl bg-[#121A22] border border-[#1D2A33] p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#1D2A33] mb-6">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded text-[11px] font-mono font-semibold bg-[#00D6A3]/10 border border-[#00D6A3]/30 text-[#00D6A3]">
                {nowData.sectionLabel}
              </span>
              <h2 className="text-base sm:text-lg font-sans font-semibold text-[#F1F5F3]">
                {nowData.headline}
              </h2>
            </div>
            <span className="text-xs font-mono text-[#62717B]">
              Active Developer State
            </span>
          </div>

          {/* 3 Columns: Building (Green), Learning (Cyan), Next (Purple) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {nowData.items.map((item, idx) => {
              const accentColor = 
                item.accent === 'green' 
                  ? '#00D6A3' 
                  : item.accent === 'cyan' 
                  ? '#22C7D8' 
                  : '#9B8AFB';

              return (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-2 h-2 rounded-full" 
                      style={{ backgroundColor: accentColor }}
                    />
                    <span 
                      className="text-xs font-mono uppercase tracking-wider font-semibold"
                      style={{ color: accentColor }}
                    >
                      {item.category}
                    </span>
                  </div>
                  <p className="text-sm font-sans font-medium text-[#A6B3BA] pl-4">
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
