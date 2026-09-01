import React from 'react';
import { projectsData } from '../data/portfolioData';
import { 
  ArrowUpRight, 
  Github, 
  Layers, 
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Code2
} from 'lucide-react';

export default function Projects({ onOpenPlaceholder }) {
  return (
    <section id="projects" className="py-24 border-t border-border-subtle relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-green mb-2 block">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-content-primary tracking-tight font-sans">
            Projects I've Built & Shipped
          </h2>
          <p className="text-sm sm:text-base text-content-secondary max-w-xl mt-3 font-sans">
            Focused on solving practical problems, understanding system internals, and building maintainable full-stack software.
          </p>
        </div>

        {/* Alternating Showcases */}
        <div className="space-y-20">
          {projectsData.map((project, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div 
                key={project.id}
                className="rounded-2xl bg-surface border border-border overflow-hidden transition-all duration-300 hover:border-border-button shadow-card-subtle"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 items-center`}>
                  
                  {/* Content Column */}
                  <div className={`space-y-6 ${isEven ? 'lg:col-span-6 lg:order-2' : 'lg:col-span-6 lg:order-1'}`}>
                    
                    {/* Top Row: Number & Tech Stack */}
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-2xl font-bold text-accent-green/80">
                        {project.number}
                      </span>
                      <span className="text-border">/</span>
                      <span className="text-xs font-mono text-content-muted">
                        Personal Project
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-content-primary font-sans mb-1.5">
                        {project.name}
                      </h3>
                      <p className="text-xs font-mono text-content-muted">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Short Description */}
                    <p className="text-sm sm:text-base text-content-secondary leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {/* Why I Built It (Crucial Storytelling Requirement) */}
                    <div className="rounded-xl bg-bg-subtle/80 border border-border-subtle p-4 space-y-1.5">
                      <div className="text-xs font-mono font-medium text-accent-green flex items-center gap-1.5">
                        <span>Why I built it:</span>
                      </div>
                      <p className="text-xs sm:text-sm text-content-secondary font-sans leading-relaxed">
                        "{project.whyIBuiltIt}"
                      </p>
                    </div>

                    {/* What I Learned */}
                    {project.whatILearned && (
                      <div className="rounded-xl bg-bg-subtle/40 border border-border-subtle p-4 space-y-1.5">
                        <div className="text-xs font-mono font-medium text-accent-cyan flex items-center gap-1.5">
                          <span>What I learned:</span>
                        </div>
                        <p className="text-xs sm:text-sm text-content-secondary font-sans leading-relaxed">
                          {project.whatILearned}
                        </p>
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-bg text-content-secondary border border-border-subtle text-xs font-mono"
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
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent-green text-bg font-sans text-xs font-semibold hover:shadow-green-subtle transition-all active:scale-95"
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
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent-green/10 text-accent-green border border-accent-green/25 font-sans text-xs font-medium hover:bg-accent-green/20 transition-all"
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
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-button text-content-primary border border-border-button hover:border-border text-xs font-sans font-medium transition-all"
                        >
                          <Github className="w-3.5 h-3.5 text-content-secondary" />
                          <span>Source Code</span>
                        </a>
                      ) : (
                        <button
                          onClick={() => onOpenPlaceholder({
                            title: `${project.name} Repository`,
                            fieldName: `project.githubUrl`,
                            message: `Source code link for ${project.name}. Configure repository URL in src/data/portfolioData.js.`
                          })}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-button text-content-secondary border border-border-button text-xs font-sans font-medium hover:text-content-primary transition-all"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Source Code</span>
                        </button>
                      )}
                    </div>

                  </div>

                  {/* Visual Showcase Card (Mockup / Preview representation) */}
                  <div className={`${isEven ? 'lg:col-span-6 lg:order-1' : 'lg:col-span-6 lg:order-2'}`}>
                    <div 
                      onClick={() => onOpenPlaceholder({
                        title: `${project.name} Visual Preview`,
                        fieldName: `project.previewLabel`,
                        message: `High-resolution screenshots or custom UI graphics for ${project.name} can be linked directly.`
                      })}
                      className="group/mockup relative rounded-xl bg-bg border border-border p-5 sm:p-7 min-h-[300px] flex flex-col justify-between cursor-pointer hover:border-border-button transition-all duration-300 overflow-hidden"
                    >
                      {/* Window Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#1D2A33]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#1D2A33]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#1D2A33]" />
                        </div>
                        <span className="text-[10px] font-mono text-content-muted">
                          {project.name.toLowerCase()}.app
                        </span>
                      </div>

                      {/* Mockup Center Graphic / Information State */}
                      <div className="py-8 space-y-4">
                        <div className="flex items-center justify-between p-3.5 rounded-lg bg-surface border border-border-subtle">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-md bg-bg flex items-center justify-center text-accent-green">
                              <Code2 className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-sans font-semibold text-content-primary">
                                {project.name}
                              </div>
                              <div className="text-[10px] font-mono text-content-muted">
                                Full-Stack MERN Architecture
                              </div>
                            </div>
                          </div>
                          <span className="text-[10px] font-mono text-accent-green px-2 py-0.5 rounded bg-accent-green/10">
                            Active
                          </span>
                        </div>

                        <div className="p-3.5 rounded-lg bg-surface/50 border border-border-subtle text-xs text-content-muted font-mono leading-relaxed">
                          // Architecture Highlights<br />
                          → Modular REST routing & JWT middleware<br />
                          → Responsive data flows & state sync<br />
                          → Validated schema structure
                        </div>
                      </div>

                      {/* Mockup Footer Caption */}
                      <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-content-muted group-hover/mockup:text-accent-green transition-colors">
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
