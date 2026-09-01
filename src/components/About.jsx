import React from 'react';
import { aboutData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-border-subtle relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-green mb-2 block">
            About
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-content-primary tracking-tight font-sans">
            {aboutData.heading}
          </h2>
        </div>

        {/* Editorial Layout: Narrative on Left, Learning/Interests on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Main Conversational Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-content-secondary font-sans text-base sm:text-lg leading-relaxed">
            {aboutData.paragraphs.map((para, idx) => (
              <p key={idx}>
                {para}
              </p>
            ))}
          </div>

          {/* Secondary Editorial Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Currently Learning Block */}
            <div className="rounded-xl bg-surface border border-border p-5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-content-muted mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green" />
                Currently learning
              </h3>
              <ul className="space-y-2 text-sm font-sans text-content-secondary">
                {aboutData.currentlyLearning.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-accent-green font-mono">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outside Code Block */}
            <div className="rounded-xl bg-surface border border-border p-5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-content-muted mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                Outside code
              </h3>
              <ul className="space-y-2 text-sm font-sans text-content-secondary">
                {aboutData.outsideCode.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-accent-cyan font-mono">→</span>
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
