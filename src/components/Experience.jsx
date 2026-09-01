import React from 'react';
import { timelineData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#080808] border-t border-white/10 relative">
      <div id="education" className="sr-only" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00D6A3] mb-2 block">
            Experience & Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Where I've Worked & Learned
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1A1] max-w-xl mt-3 font-sans">
            A chronological timeline of hands-on internship engineering and computer science foundations.
          </p>
        </div>

        {/* Clean Editorial Timeline with Crisp White Border Track */}
        <div className="relative border-l border-white/15 ml-3 sm:ml-4 pl-6 sm:pl-10 space-y-14">
          {timelineData.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Small Green Timeline Indicator Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-black border-2 border-[#00D6A3] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D6A3]" />
              </div>

              {/* Editorial Item Content */}
              <div className="space-y-4">
                
                {/* Meta Row: Period & Location */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono text-[#666666]">
                    {item.period}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#111111] border border-white/10 text-[#A1A1A1]">
                    {item.badge}
                  </span>
                </div>

                {/* Role & Organization */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                    {item.role}
                  </h3>
                  <div className="text-sm font-sans font-medium text-[#00D6A3] mt-0.5 flex items-center gap-1.5">
                    <span>{item.organization}</span>
                    <span className="text-white/20">·</span>
                    <span className="text-[#888888] text-xs font-normal">{item.location}</span>
                  </div>
                </div>

                {/* Brief Summary */}
                <p className="text-sm text-[#A1A1A1] font-sans leading-relaxed">
                  {item.summary}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 text-xs sm:text-sm text-[#A1A1A1] font-sans">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="text-[#00D6A3] mt-1 text-xs">▪</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies Tagline */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.technologies.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#111111] border border-white/10 text-[#888888]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
