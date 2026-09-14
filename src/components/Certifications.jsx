import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export default function Certifications() {
  return (
    <section className="py-24 sm:py-32 border-b border-hairline">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-burnt">06</span>
          <span className="h-[1px] w-8 bg-hairline" />
          <span className="text-xs font-mono uppercase tracking-wider text-ink-soft">Certifications</span>
        </div>

        {/* Asymmetric Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal tracking-tight mb-4">
            Credentials & assessments.
          </h2>
        </div>

        {/* Simple List (No Cards, Clickable Direct Links) */}
        <div className="divide-y divide-hairline border-t border-b border-hairline">
          {certificationsData.map((cert, index) => {
            const Content = (
              <>
                <div className="flex items-baseline gap-4 max-w-2xl">
                  <span className="text-burnt font-mono text-sm select-none">—</span>
                  <span className="font-serif text-lg sm:text-xl text-ink font-normal group-hover:text-burnt transition-colors flex items-center gap-1.5">
                    <span>{cert.name}</span>
                    {cert.url && (
                      <ArrowUpRight className="w-4 h-4 text-ink-soft group-hover:text-burnt transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                    )}
                  </span>
                </div>
                <span className="text-xs font-mono text-ink-soft tracking-wider sm:text-right shrink-0">
                  {cert.type}
                </span>
              </>
            );

            return cert.url ? (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 group transition-colors"
              >
                {Content}
              </a>
            ) : (
              <div 
                key={index}
                className="py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 group"
              >
                {Content}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
