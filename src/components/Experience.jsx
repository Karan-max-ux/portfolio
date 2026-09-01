import React from 'react';
import { experienceData } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  Cpu, 
  Code2, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>03. WORK_EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient-emerald">Experience</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-3">
            Industry internship experience building responsive web features, microservices, and high-performance full-stack applications.
          </p>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-3" />
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-emerald-500/30 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-12">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-dark-950 border-2 border-emerald-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Experience Card */}
              <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl border border-slate-800 relative shadow-xl">
                
                {/* Header Information */}
                <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-slate-800/80 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {exp.role}
                      </h3>
                      {exp.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                          {exp.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 font-mono">
                      <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <Calendar className="w-4 h-4 text-slate-500" />
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-lg bg-dark-950 border border-slate-800 text-xs font-mono text-slate-400">
                    {exp.type}
                  </span>
                </div>

                {/* Bullet Points / Responsibilities */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    Key Responsibilities & Deliverables
                  </h4>
                  
                  <ul className="space-y-2.5">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applied Technologies Tags */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 mr-2 flex items-center gap-1">
                    <Code2 className="w-3.5 h-3.5 text-emerald-500" />
                    Tech Stack:
                  </span>
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-dark-950 text-emerald-400 border border-emerald-500/20 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
