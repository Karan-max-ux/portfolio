import React from 'react';
import { aboutData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-20 border-b border-hairline">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10 sm:mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-burnt">01</span>
          <span className="h-[1px] w-8 bg-hairline" />
          <span className="text-xs font-mono uppercase tracking-wider text-ink-soft">About</span>
        </div>

        {/* 2-Column Balanced Layout: Prominent Photo Left + Bio & Meta Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Big Profile Photo with Distinct Border */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full border-2 border-ink/20 hover:border-burnt transition-colors p-2 bg-bone-dark/40 shadow-sm flex-shrink-0">
              <img
                src="/profile.png"
                alt="Karan Singh"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Right Column: Title, Bio & 3 Meta Tiles */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal tracking-tight mb-4">
                About me.
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
                {aboutData.narrative.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* 3 Profile Metadata Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-hairline/80 text-xs font-mono">
              <div>
                <span className="text-ink-soft block mb-1 uppercase tracking-wider text-[11px]">Education</span>
                <p className="font-serif text-lg text-ink font-normal leading-snug">B.Tech in CSE</p>
                <p className="text-ink-muted mt-0.5">Lovely Professional Univ.</p>
              </div>
              <div>
                <span className="text-ink-soft block mb-1 uppercase tracking-wider text-[11px]">Experience</span>
                <p className="font-serif text-lg text-ink font-normal leading-snug">Full Stack Intern</p>
                <p className="text-ink-muted mt-0.5">InternsVeda (2024 → Present)</p>
              </div>
              <div>
                <span className="text-ink-soft block mb-1 uppercase tracking-wider text-[11px]">Core Focus</span>
                <p className="font-serif text-lg text-ink font-normal leading-snug">MERN & Next.js</p>
                <p className="text-ink-muted mt-0.5">DSA in C++ · Web Apps</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
