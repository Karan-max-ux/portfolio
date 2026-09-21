import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="pt-32 sm:pt-38 pb-16 sm:pb-20 border-b border-hairline">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Two-Column Responsive Layout: Left Hero Content + Right Developer Status Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-start">
          
          {/* Left-Aligned Asymmetric Hero Container */}
          <div className="lg:col-span-8 max-w-3xl">
            
            {/* Metadata Mono Tag */}
            <p className="text-xs font-mono uppercase tracking-wider text-ink-soft mb-6">
              {personalInfo.metadataLine}
            </p>

            {/* Large Serif Headline */}
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal text-ink tracking-tight leading-[1.05] mb-8">
              {personalInfo.heroHeadline}
            </h1>

            {/* Body Sans Subtitle */}
            <p className="text-lg sm:text-xl text-ink-muted leading-relaxed font-normal mb-8 max-w-2xl">
              {personalInfo.heroSubheadline}
            </p>

            {/* Status Line */}
            <div className="flex items-center gap-2.5 text-xs font-mono text-ink-muted mb-10">
              <span className="w-2 h-2 rounded-full bg-burnt inline-block" />
              <span>{personalInfo.statusLine}</span>
            </div>

            {/* Actions: Primary Solid Button + Plain Text Link */}
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#projects"
                onClick={(e) => handleScroll(e, '#projects')}
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-ink hover:bg-burnt text-bone text-xs font-medium uppercase tracking-wider transition-colors"
              >
                <span>See My Work</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-burnt transition-colors"
              >
                <span className="border-b border-transparent group-hover:border-burnt">Let's Talk</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Subtle Hero Footer Connect Line */}
            <div className="pt-8 mt-10 border-t border-hairline/70 flex flex-wrap items-center gap-6 text-xs font-mono text-ink-soft">
              <span className="text-ink-muted">Connect:</span>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-burnt transition-colors flex items-center gap-1"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <span className="text-hairline">/</span>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-burnt transition-colors flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <span className="text-hairline">/</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-burnt transition-colors flex items-center gap-1"
              >
                <span>Email</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

          </div>

          {/* Right-Side Subtle Developer Information Panel */}
          <div className="lg:col-span-4 lg:pt-8 xl:pt-10 lg:flex lg:justify-end">
            <div className="w-full max-w-xs space-y-6">
              
              {/* Developer Specimen Card */}
              <div className="bg-bone border border-hairline p-6 transition-all duration-300 hover:-translate-y-1 hover:border-hairline-strong">
                <p className="text-[11px] font-mono uppercase tracking-widest text-ink-soft mb-5">
                  CURRENTLY
                </p>
                <div className="mb-5">
                  <span className="text-xs font-mono uppercase tracking-wider text-ink-muted block mb-1">
                    Building
                  </span>
                  <h3 className="font-serif text-2xl text-ink font-normal tracking-tight">
                    SkillSync
                  </h3>
                </div>
                <p className="text-xs font-mono text-ink-soft">
                  React · Node · MongoDB
                </p>
              </div>

              {/* Two Statistics */}
              <div className="grid grid-cols-2 gap-4 px-1">
                <div>
                  <div className="font-serif text-2xl sm:text-3xl text-ink font-normal tracking-tight">
                    03+
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-ink-soft mt-1">
                    Projects
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl text-ink font-normal tracking-tight">
                    10+
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-ink-soft mt-1">
                    Technologies
                  </div>
                </div>
              </div>

              {/* Status Line */}
              <div className="flex items-center gap-2.5 text-xs font-mono text-ink-muted px-1 pt-1">
                <span className="w-2 h-2 rounded-full bg-burnt inline-block" />
                <span>Open to internships</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
