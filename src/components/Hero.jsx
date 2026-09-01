import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowUpRight, 
  MapPin, 
  Linkedin, 
  Github
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
      className="relative min-h-[88vh] flex items-center pt-28 pb-20 overflow-hidden bg-[#080C10]"
    >
      {/* Extremely subtle radial green glow (rgba(0, 214, 163, 0.06)) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#00D6A3]/[0.06] blur-[140px] rounded-full pointer-events-none" />
      
      {/* Subtle almost invisible grid texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:28px_28px] opacity-30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Asymmetrical 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Main Introduction (7 columns) */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Availability & Location Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#121A22] border border-[#1D2A33] text-xs font-sans text-[#A6B3BA] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D6A3] opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D6A3]"></span>
              </span>
              <span>{personalInfo.availability}</span>
              <span className="text-[#62717B]">·</span>
              <span className="text-[#A6B3BA] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#22C7D8]" />
                <span className="text-[#F1F5F3]">{personalInfo.location}</span>
              </span>
            </div>

            {/* Headline with Signature Green Accent */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F1F5F3] leading-[1.1] font-sans">
              Hey, I'm <span className="text-[#00D6A3]">{personalInfo.firstName}</span>.
            </h1>

            {/* Subtitle / Personal Pitch */}
            <p className="text-lg sm:text-xl text-[#A6B3BA] max-w-xl leading-relaxed font-sans">
              {personalInfo.bio}
            </p>

            {/* Role & Rare Highlight Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="text-sm font-sans font-medium text-[#F1F5F3] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D6A3]" />
                MERN Stack Developer
              </span>
              <span className="text-[#62717B]">·</span>
              {/* Rare Highlight Purple (1%) */}
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono text-[#9B8AFB] bg-[#9B8AFB]/10 border border-[#9B8AFB]/25">
                CSE Student
              </span>
            </div>

            {/* Hero Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              {/* Primary Button */}
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-sans font-semibold text-sm bg-[#00D6A3] text-[#080C10] shadow-sm hover:shadow-[0_0_20px_rgba(0,214,163,0.25)] transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>See My Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Secondary Button */}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-sans font-medium text-sm bg-[#101820] text-[#F1F5F3] border border-[#263640] hover:border-[#00D6A3]/60 hover:text-white transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>Let's Talk</span>
              </a>
            </div>

            {/* Social Profile Links */}
            <div className="flex items-center gap-5 pt-4 text-[#62717B] text-xs font-sans">
              <a 
                href={personalInfo.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#F1F5F3] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-[#1D2A33]">/</span>
              <a 
                href={personalInfo.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#A6B3BA] hover:text-[#22C7D8] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#22C7D8]" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Side: Subtle Developer Visual Card (5 columns) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-xl bg-[#121A22] border border-[#1D2A33] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.6)] relative transition-all duration-200 hover:border-[#263640]">
              
              {/* Top card header with minimal dots */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1D2A33]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1D2A33]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1D2A33]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1D2A33]" />
                </div>
                <span className="text-[11px] font-mono text-[#62717B]">
                  {widget.directory}
                </span>
              </div>

              {/* Developer Metadata Content */}
              <div className="font-mono text-xs space-y-4">
                
                <div>
                  <div className="text-[#62717B]">$ whoami</div>
                  <div className="text-[#00D6A3] font-medium mt-1 pl-3">
                    {widget.whoami}
                  </div>
                </div>

                <div>
                  <div className="text-[#62717B]">$ stack</div>
                  <div className="text-[#A6B3BA] mt-1 pl-3 space-y-1">
                    {widget.stack.map((tech, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22C7D8]/60" />
                        <span className="text-[#F1F5F3]">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-1">
                  <div className="text-[#62717B]">$ status</div>
                  <div className="mt-1 pl-3 flex items-center gap-2 text-[#A6B3BA]">
                    <span className="w-2 h-2 rounded-full bg-[#00D6A3] animate-pulse" />
                    <span className="capitalize text-[#F1F5F3]">{widget.status}</span>
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
