import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowUpRight, 
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
      className="relative min-h-[88vh] flex items-center pt-28 pb-20 overflow-hidden bg-black"
    >
      {/* Extremely subtle ambient green glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#00D6A3]/[0.05] blur-[150px] rounded-full pointer-events-none" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:28px_28px] opacity-25 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Asymmetrical 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Main Introduction (7 columns) */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111111] border border-white/15 text-xs font-sans text-[#A1A1A1] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D6A3] opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D6A3]"></span>
              </span>
              <span>{personalInfo.availability}</span>
            </div>

            {/* Headline with Signature Green Accent */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-sans">
              Hey, I'm <span className="text-[#00D6A3]">{personalInfo.firstName}</span>.
            </h1>

            {/* Subtitle / Personal Pitch */}
            <p className="text-lg sm:text-xl text-[#A1A1A1] max-w-xl leading-relaxed font-sans">
              {personalInfo.bio}
            </p>

            {/* Role & Rare Highlight Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="text-sm font-sans font-medium text-white flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D6A3]" />
                MERN Stack Developer
              </span>
              <span className="text-white/20">·</span>
              {/* Rare Highlight Purple (1%) */}
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono text-[#9B8AFB] bg-[#9B8AFB]/10 border border-[#9B8AFB]/30">
                CSE Student
              </span>
            </div>

            {/* Hero Buttons with crisp borders */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              {/* Primary Button */}
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-sans font-semibold text-sm bg-[#00D6A3] text-black shadow-[0_0_20px_rgba(0,214,163,0.3)] hover:shadow-[0_0_28px_rgba(0,214,163,0.45)] transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>See My Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Secondary Button with crisp white border */}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-sans font-medium text-sm bg-[#141414] text-white border border-white/15 hover:border-white/35 hover:bg-[#1A1A1A] transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>Let's Talk</span>
              </a>
            </div>

            {/* Social Profile Links */}
            <div className="flex items-center gap-5 pt-4 text-[#888888] text-xs font-sans">
              <a 
                href={personalInfo.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-white/15">/</span>
              <a 
                href={personalInfo.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#A1A1A1] hover:text-[#22C7D8] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#22C7D8]" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Side: Developer Card with Crisp White Border */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-xl bg-[#0D0D0D] border border-white/15 p-6 shadow-2xl relative transition-all duration-200 hover:border-white/30">
              
              {/* Top card header with minimal dots */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <span className="text-[11px] font-mono text-[#666666]">
                  {widget.directory}
                </span>
              </div>

              {/* Developer Metadata Content */}
              <div className="font-mono text-xs space-y-4">
                
                <div>
                  <div className="text-[#666666]">$ whoami</div>
                  <div className="text-[#00D6A3] font-medium mt-1 pl-3">
                    {widget.whoami}
                  </div>
                </div>

                <div>
                  <div className="text-[#666666]">$ stack</div>
                  <div className="text-[#A1A1A1] mt-1 pl-3 space-y-1">
                    {widget.stack.map((tech, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22C7D8]" />
                        <span className="text-white">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-1">
                  <div className="text-[#666666]">$ status</div>
                  <div className="mt-1 pl-3 flex items-center gap-2 text-[#A1A1A1]">
                    <span className="w-2 h-2 rounded-full bg-[#00D6A3] animate-pulse" />
                    <span className="capitalize text-white">{widget.status}</span>
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
