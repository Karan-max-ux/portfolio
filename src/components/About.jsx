import React from 'react';
import { aboutData, personalInfo } from '../data/portfolioData';
import { 
  Terminal, 
  Sparkles, 
  Layers, 
  Zap, 
  Code2, 
  CheckCircle2, 
  Cpu, 
  GraduationCap 
} from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>01. ABOUT_ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Background & <span className="text-gradient-emerald">Philosophy</span>
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Narrative Card */}
          <div className="lg:col-span-7 space-y-5">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 relative overflow-hidden shadow-xl">
              
              {/* Top Terminal Bar Decoration */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-xs font-mono text-slate-400">karan_singh_profile.md</span>
                </div>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5" /> MERN Focus
                </span>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {aboutData.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Education / University Tag */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <GraduationCap className="w-4 h-4 text-emerald-400" />
                  <span>Lovely Professional University (LPU)</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-emerald-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Open to Internships & Roles</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Key Metric Statistics Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-emerald-400 font-mono transition-colors">
                    {stat.value}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all">
                    {idx === 0 && <Code2 className="w-4 h-4" />}
                    {idx === 1 && <Layers className="w-4 h-4" />}
                    {idx === 2 && <Zap className="w-4 h-4" />}
                    {idx === 3 && <Sparkles className="w-4 h-4" />}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-200 mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {stat.subtext}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
