import React from 'react';
import { educationData } from '../data/portfolioData';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  BookOpen, 
  Sparkles,
  Award
} from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>07. ACADEMIC_BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-emerald">Foundation</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-3">
            Academic grounding in Computer Science and Engineering principles, algorithmic problem solving, and software development.
          </p>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-3" />
        </div>

        {/* Education Card */}
        <div className="space-y-6">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl border border-slate-800 relative shadow-xl"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-slate-800/80 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-emerald-400">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-dark-950 border border-slate-800 text-xs font-mono text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Year: {edu.year}</span>
                </div>
              </div>

              {/* Coursework & Focus Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                  Academic Highlights & Coursework
                </h4>
                <ul className="space-y-2.5">
                  {edu.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
