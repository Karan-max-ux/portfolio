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
    <section className="pt-36 sm:pt-44 pb-20 sm:pb-28 border-b border-hairline">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Left-Aligned Asymmetric Hero Container */}
        <div className="max-w-3xl">
          
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
          <div className="flex items-center gap-2.5 text-xs font-mono text-ink-muted mb-12">
            <span className="w-2 h-2 rounded-full bg-burnt inline-block" />
            <span>{personalInfo.statusLine}</span>
          </div>

          {/* Actions: Primary Solid Button + Plain Text Link */}
          <div className="flex flex-wrap items-center gap-6 mb-16">
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, '#projects')}
              className="px-6 py-3.5 bg-ink hover:bg-burnt text-bone text-xs font-medium uppercase tracking-wider transition-colors"
            >
              See My Work
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

          {/* Social Links as Plain Text at Bottom of Hero */}
          <div className="pt-8 border-t border-hairline/70 flex items-center gap-6 text-xs font-mono text-ink-soft">
            <span className="text-ink-subtle">Connect:</span>
            
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

      </div>
    </section>
  );
}
