import React from 'react';
import { nowData } from '../data/portfolioData';

export default function Now() {
  return (
    <section id="now" className="py-24 sm:py-32 border-b border-hairline">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-burnt">02</span>
          <span className="h-[1px] w-8 bg-hairline" />
          <span className="text-xs font-mono uppercase tracking-wider text-ink-soft">Now</span>
        </div>

        {/* Asymmetric Split: Title & Date on Left, Journal Entries on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          <div className="lg:col-span-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal mb-3">
              What I'm doing now.
            </h2>
            <p className="text-xs font-mono text-burnt tracking-wide">
              {nowData.lastUpdated}
            </p>
          </div>

          <div className="lg:col-span-8">
            <ul className="space-y-6">
              {nowData.statusItems.map((item, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-4 text-base sm:text-lg text-ink font-normal leading-relaxed pb-6 border-b border-hairline/60 last:border-b-0"
                >
                  <span className="text-burnt font-mono text-sm mt-1 select-none">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
