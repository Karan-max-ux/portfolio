import React from 'react';
import { aboutData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-b border-hairline">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-burnt">01</span>
          <span className="h-[1px] w-8 bg-hairline" />
          <span className="text-xs font-mono uppercase tracking-wider text-ink-soft">About Karan</span>
        </div>

        {/* Asymmetric Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Pull-Quote & Stat Highlight (4 cols) */}
          <div className="lg:col-span-5 space-y-10">
            <blockquote className="font-serif text-2xl sm:text-3xl text-ink leading-snug italic font-normal">
              &ldquo;{aboutData.pullQuote}&rdquo;
            </blockquote>

            <div className="pt-8 border-t border-hairline">
              <div className="font-serif text-4xl sm:text-5xl text-burnt font-normal mb-2">
                {aboutData.statHighlight.number}
              </div>
              <p className="text-xs font-mono uppercase tracking-wider text-ink-soft">
                {aboutData.statHighlight.label}
              </p>
            </div>
          </div>

          {/* Right Column: Flowing Narrative Prose (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
            {aboutData.narrative.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
