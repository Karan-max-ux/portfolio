import React from 'react';
import { aboutData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0E141B] border-t border-[#1D2A33] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00D6A3] mb-2 block">
            About
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F5F3] tracking-tight font-sans">
            {aboutData.heading}
          </h2>
        </div>

        {/* Editorial Layout: Narrative on Left, Learning/Interests on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Main Conversational Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-[#A6B3BA] font-sans text-base sm:text-lg leading-relaxed">
            {aboutData.paragraphs.map((para, idx) => (
              <p key={idx}>
                {para}
              </p>
            ))}
          </div>

          {/* Secondary Editorial Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Currently Learning Block */}
            <div className="rounded-xl bg-[#121A22] border border-[#1D2A33] p-5 shadow-sm">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#62717B] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D6A3]" />
                Currently learning
              </h3>
              <ul className="space-y-2 text-sm font-sans text-[#F1F5F3]">
                {aboutData.currentlyLearning.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-[#00D6A3] font-mono">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outside Code Block */}
            <div className="rounded-xl bg-[#121A22] border border-[#1D2A33] p-5 shadow-sm">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#62717B] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C7D8]" />
                Outside code
              </h3>
              <ul className="space-y-2 text-sm font-sans text-[#F1F5F3]">
                {aboutData.outsideCode.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-[#22C7D8] font-mono">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
