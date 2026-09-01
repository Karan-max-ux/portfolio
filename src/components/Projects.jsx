import React from 'react';
import { projectsData } from '../data/portfolioData';
import { 
  ArrowUpRight, 
  Github, 
  Code2
} from 'lucide-react';

export default function Projects({ onOpenPlaceholder }) {
  return (
    <section id="projects" className="py-24 bg-[#0E141B] border-t border-[#1D2A33] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00D6A3] mb-2 block">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F5F3] tracking-tight font-sans">
            Projects I've Built & Shipped
          </h2>
          <p className="text-sm sm:text-base text-[#A6B3BA] max-w-xl mt-3 font-sans">
            Focused on solving practical problems, understanding system internals, and building maintainable full-stack software.
          </p>
        </div>

        {/* Alternating Showcases */}
        <div className="space-y-16">
          {projectsData.map((project, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div 
                key={project.id}
                className="rounded-2xl bg-[#121A22] border border-[#1D2A33] overflow-hidden transition-all duration-200 hover:border-[#263640] shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 items-center`}>
                  
                  {/* Content Column */}
                  <div className={`space-y-6 ${isEven ? 'lg:col-span-6 lg:order-2' : 'lg:col-span-6 lg:order-1'}`}>
                    
                    {/* Top Row: Number & Tech Stack */}
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-2xl font-bold text-[#00D6A3]">
                        {project.number}
                      </span>
                      <span className="text-[#1D2A33]">/</span>
                      <span className="text-xs font-mono text-[#62717B]">
                        Personal Project
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#F1F5F3] font-sans mb-1.5">
                        {project.name}
                      </h3>
                      <p className="text-xs font-mono text-[#62717B]">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Short Description */}
                    <p className="text-sm sm:text-base text-[#A6B3BA] leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {/* Why I Built It (Storytelling Requirement in signature green) */}
                    <div className="rounded-xl bg-[#080C10] border border-[#1D2A33] p-4 space-y-1.5">
                      <div className="text-xs font-mono font-medium text-[#00D6A3] flex items-center gap-1.5">
                        <span>Why I built it:</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#A6B3BA] font-sans leading-relaxed">
                        "{project.whyIBuiltIt}"
                      </p>
                    </div>

                    {/* What I Learned (in secondary cyan #22C7D8) */}
                    {project.whatILearned && (
                      <div className="rounded-xl bg-[#080C10]/60 border border-[#1D2A33] p-4 space-y-1.5">
                        <div className="text-xs font-mono font-medium text-[#22C7D8] flex items-center gap-1.5">
                          <span>What I learned:</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#A6B3BA] font-sans leading-relaxed">
                          {project.whatILearned}
                        </p>
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-[#0E141B] text-[#A6B3BA] border border-[#1D2A33] text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00D6A3] text-[#080C10] font-sans text-xs font-semibold shadow-sm hover:shadow-[0_0_20px_rgba(0,214,163,0.25)] transition-all active:scale-95"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <button
                          onClick={() => onOpenPlaceholder({
                            title: `${project.name} Live Demo`,
                            fieldName: `project.liveUrl`,
                            message: `Live deployment preview for ${project.name}. You can attach your hosted domain link in src/data/portfolioData.js.`
                          })}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00D6A3]/10 text-[#00D6A3] border border-[#00D6A3]/30 font-sans text-xs font-medium hover:bg-[#00D6A3]/20 transition-all cursor-pointer"
                        >
                          <span>Live Demo (Preview)</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      )}

                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#101820] text-[#F1F5F3] border border-[#263640] hover:border-[#1D2A33] text-xs font-sans font-medium transition-all"
                        >
                          <Github className="w-3.5 h-3.5 text-[#A6B3BA]" />
                          <span>Source Code</span>
                        </a>
                      ) : (
                        <button
                          onClick={() => onOpenPlaceholder({
                            title: `${project.name} Repository`,
                            fieldName: `project.githubUrl`,
                            message: `Source code link for ${project.name}. Configure repository URL in src/data/portfolioData.js.`
                          })}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#101820] text-[#A6B3BA] border border-[#263640] text-xs font-sans font-medium hover:text-[#F1F5F3] transition-all cursor-pointer"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Source Code</span>
                        </button>
                      )}
                    </div>

                  </div>

                  {/* Visual Showcase Card */}
                  <div className={`${isEven ? 'lg:col-span-6 lg:order-1' : 'lg:col-span-6 lg:order-2'}`}>
                    <div 
                      onClick={() => onOpenPlaceholder({
                        title: `${project.name} Visual Preview`,
                        fieldName: `project.previewLabel`,
                        message: `High-resolution screenshots or custom UI graphics for ${project.name} can be linked directly.`
                      })}
                      className="group/mockup relative rounded-xl bg-[#080C10] border border-[#1D2A33] p-5 sm:p-7 min-h-[290px] flex flex-col justify-between cursor-pointer hover:border-[#263640] transition-all duration-200 overflow-hidden"
                    >
                      {/* Window Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-[#1D2A33]">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#1D2A33]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#1D2A33]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#1D2A33]" />
                        </div>
                        <span className="text-[10px] font-mono text-[#62717B]">
                          {project.name.toLowerCase()}.app
                        </span>
                      </div>

                      {/* Mockup Center Graphic / Information State */}
                      <div className="py-6 space-y-3">
                        <div className="flex items-center justify-between p-3.5 rounded-lg bg-[#121A22] border border-[#1D2A33]">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-md bg-[#080C10] flex items-center justify-center text-[#00D6A3]">
                              <Code2 className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-sans font-semibold text-[#F1F5F3]">
                                {project.name}
                              </div>
                              <div className="text-[10px] font-mono text-[#62717B]">
                                Full-Stack MERN Architecture
                              </div>
                            </div>
                          </div>
                          <span className="text-[10px] font-mono text-[#00D6A3] px-2 py-0.5 rounded bg-[#00D6A3]/10 border border-[#00D6A3]/20">
                            Active
                          </span>
                        </div>

                        <div className="p-3.5 rounded-lg bg-[#121A22]/50 border border-[#1D2A33] text-xs text-[#62717B] font-mono leading-relaxed">
                          // Architecture Highlights<br />
                          → Modular REST routing & JWT middleware<br />
                          → Responsive data flows & state sync<br />
                          → Validated schema structure
                        </div>
                      </div>

                      {/* Mockup Footer Caption */}
                      <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#62717B] group-hover/mockup:text-[#00D6A3] transition-colors">
                        <span>{project.previewLabel}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
