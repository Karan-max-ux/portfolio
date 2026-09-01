import React from 'react';
import { projectsData } from '../data/portfolioData';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Sparkles,
  Layers,
  Image as ImageIcon
} from 'lucide-react';

export default function Projects({ onOpenPlaceholder }) {
  return (
    <section id="projects" className="py-20 relative bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>04. FEATURED_PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-emerald">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-3">
            Real-world full-stack and AI-assisted solutions engineered under high-intensity hackathon timelines.
          </p>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-3" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl border border-slate-800 flex flex-col justify-between overflow-hidden group shadow-xl"
            >
              <div>
                {/* Project Header Banner / Screenshot Placeholder */}
                <div className="p-6 bg-gradient-to-b from-dark-950 to-dark-900/90 border-b border-slate-800/80 relative">
                  
                  {/* Category & Hackathon Tag */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/30">
                      <Clock className="w-3.5 h-3.5" />
                      {project.hackathonTag}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs font-mono text-slate-400 mb-4">
                    {project.tagline}
                  </p>

                  {/* Screenshot Mockup Container */}
                  <div 
                    onClick={() => onOpenPlaceholder({
                      title: `${project.title} Screenshot Preview`,
                      fieldName: `project.screenshotPlaceholder`,
                      message: `A custom UI screenshot or preview image for ${project.title} can be placed here.`
                    })}
                    className="w-full h-36 rounded-xl bg-dark-950/80 border border-dashed border-slate-700/80 hover:border-emerald-500/50 flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors group/preview"
                  >
                    <div className="p-2.5 rounded-lg bg-slate-900 text-slate-400 group-hover/preview:text-emerald-400 group-hover/preview:bg-emerald-500/10 transition-all">
                      <ImageIcon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 group-hover/preview:text-slate-200">
                      {project.screenshotPlaceholder}
                    </span>
                  </div>

                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 space-y-5">
                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Achievement (if present) */}
                  {project.achievement && (
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-2.5">
                      <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-emerald-300 font-medium">
                        <strong className="font-semibold text-emerald-200">Key Outcome: </strong>
                        {project.achievement}
                      </p>
                    </div>
                  )}

                  {/* Key Features List */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.keyFeatures.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Confirmed Technologies */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-emerald-400" />
                      Confirmed Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-dark-950 text-slate-300 border border-slate-800 text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Card Footer: Action Buttons */}
              <div className="p-6 pt-0 flex flex-wrap items-center gap-3">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 text-xs font-mono font-medium transition-all"
                  >
                    <Github className="w-4 h-4 text-slate-300" />
                    <span>GitHub Repo</span>
                  </a>
                ) : (
                  <button
                    onClick={() => onOpenPlaceholder({
                      title: `${project.title} GitHub Repository`,
                      fieldName: `project.githubUrl`,
                      message: `Repository link placeholder for ${project.title}. You can attach your GitHub repository URL in src/data/portfolioData.js.`
                    })}
                    className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 text-xs font-mono font-medium transition-all"
                  >
                    <Github className="w-4 h-4 text-slate-300" />
                    <span>GitHub Repo</span>
                  </button>
                )}

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-dark-950 text-xs font-mono font-semibold shadow-md shadow-emerald-500/20 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <button
                    onClick={() => onOpenPlaceholder({
                      title: `${project.title} Live Demo`,
                      fieldName: `project.liveUrl`,
                      message: `Live deployment URL placeholder for ${project.title}. You can attach your live URL in src/data/portfolioData.js.`
                    })}
                    className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-dark-950 text-xs font-mono font-semibold shadow-md shadow-emerald-500/20 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
