import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowUpRight, 
  MapPin, 
  Linkedin, 
  Github,
  Circle
} from 'lucide-react';

export default function Hero({ onOpenPlaceholder }) {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const widget = personalInfo.terminalWidget;

  return (
    <section 
      id="home" 
      className="relative min-h-[88vh] flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* Extremely subtle radial green glow (rgba(0, 214, 163, 0.06)) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-accent-green/[0.06] blur-[140px] rounded-full pointer-events-none" />
      
      {/* Subtle, almost invisible grid texture */}
      <div className="absolute inset-0 bg-subtle-grid bg-[length:28px_28px] opacity-25 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Asymmetrical 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Main Introduction (7 columns) */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Availability & Location Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface border border-border text-xs font-sans text-content-secondary shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
              </span>
              <span>{personalInfo.availability}</span>
              <span className="text-content-muted">·</span>
              <span className="text-content-secondary flex items-center gap-1">
                <MapPin className="w-3 h-3 text-accent-green/80" />
                {personalInfo.location}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-content-primary leading-[1.1]">
              Hey, I'm <span className="text-accent-green">{personalInfo.firstName}</span>.
            </h1>

            {/* Subtitle / Personal Pitch */}
            <p className="text-lg sm:text-xl text-content-secondary max-w-xl leading-relaxed font-sans">
              {personalInfo.bio}
            </p>

            {/* Role & Student Meta */}
            <div className="pt-1">
              <p className="text-sm font-sans font-medium text-content-muted tracking-wide">
                {personalInfo.roleTitle}
              </p>
            </div>

            {/* Hero Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              {/* Primary Button */}
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-sans font-semibold text-sm bg-accent-green text-bg shadow-sm hover:shadow-green-subtle transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>See My Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Secondary Button */}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-sans font-medium text-sm bg-surface-button text-content-primary border border-border-button hover:border-accent-green/60 hover:text-white transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>Let's Talk</span>
              </a>
            </div>

            {/* Social Profile Links */}
            <div className="flex items-center gap-5 pt-4 text-content-muted text-xs font-sans">
              <a 
                href={personalInfo.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-content-primary transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-border">/</span>
              <a 
                href={personalInfo.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-accent-cyan transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Side: Subtle Developer Visual Card (5 columns) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-xl bg-surface border border-border p-6 shadow-card-subtle relative transition-all duration-200 hover:border-border-button">
              
              {/* Top card header with minimal dots */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-border-subtle">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1D2A33]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1D2A33]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1D2A33]" />
                </div>
                <span className="text-[11px] font-mono text-content-muted">
                  {widget.directory}
                </span>
              </div>

              {/* Developer Metadata Content */}
              <div className="font-mono text-xs space-y-4">
                
                <div>
                  <div className="text-content-muted">$ whoami</div>
                  <div className="text-accent-green font-medium mt-1 pl-3">
                    {widget.whoami}
                  </div>
                </div>

                <div>
                  <div className="text-content-muted">$ stack</div>
                  <div className="text-content-secondary mt-1 pl-3 space-y-0.5">
                    {widget.stack.map((tech, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-border">·</span>
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-1">
                  <div className="text-content-muted">$ status</div>
                  <div className="mt-1 pl-3 flex items-center gap-2 text-content-secondary">
                    <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                    <span className="capitalize">{widget.status}</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
