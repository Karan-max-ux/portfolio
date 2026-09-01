import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowRight, 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Code2, 
  Sparkles,
  Terminal as TerminalIcon,
  CheckCircle2
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

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[250px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Developer Grid Texture */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:32px_32px] opacity-40 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Available / Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-6 shadow-sm shadow-emerald-500/10 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{personalInfo.statusBadge}</span>
          <span className="text-slate-600">|</span>
          <span className="flex items-center gap-1 text-slate-300">
            <MapPin className="w-3 h-3 text-emerald-400" />
            {personalInfo.location}
          </span>
        </div>

        {/* Primary Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
          Hi, I'm <span className="text-gradient-emerald">{personalInfo.name}</span>
        </h1>

        {/* Professional Subtitle */}
        <p className="text-lg sm:text-2xl font-medium text-slate-300 mb-6 max-w-3xl mx-auto">
          {personalInfo.heroSubtitle}
        </p>

        {/* Introduction */}
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {personalInfo.heroIntro}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, '#projects')}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-emerald-500 hover:bg-emerald-400 text-dark-950 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/40 transition-all active:scale-95 cursor-pointer"
          >
            <span>View My Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 hover:border-slate-600 shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Social Links & Placeholders */}
        <div className="flex items-center justify-center gap-4 pt-4 border-t border-slate-800/80 max-w-md mx-auto">
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-emerald-500/30 text-xs font-mono transition-all"
            aria-label="Karan Singh LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4 text-sky-400" />
            <span>LinkedIn</span>
          </a>

          {personalInfo.githubUrl ? (
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-purple-500/30 text-xs font-mono transition-all"
              aria-label="Karan Singh GitHub Profile"
            >
              <Github className="w-4 h-4 text-purple-400" />
              <span>GitHub</span>
            </a>
          ) : (
            <button
              onClick={() => onOpenPlaceholder({
                title: "GitHub Repository Profile",
                fieldName: "personalInfo.githubUrl",
                message: "Karan's GitHub profile link can be configured directly in src/data/portfolioData.js."
              })}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 text-xs font-mono transition-all"
              aria-label="GitHub Profile Placeholder"
            >
              <Github className="w-4 h-4 text-slate-300" />
              <span>GitHub</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-sans">
                Configurable
              </span>
            </button>
          )}
        </div>

        {/* Tech Stack Floating Strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500 mr-2 flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-emerald-500" />
            Primary Stack:
          </span>
          {personalInfo.primaryTech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-lg bg-dark-900/80 border border-slate-800 text-slate-300 text-xs font-mono hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
