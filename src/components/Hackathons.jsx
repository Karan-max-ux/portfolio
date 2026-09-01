import React from 'react';
import { hackathonsData } from '../data/portfolioData';
import { 
  Trophy, 
  Flame, 
  Clock, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Cpu, 
  Sparkles,
  Zap,
  Github,
  ExternalLink
} from 'lucide-react';

export default function Hackathons({ onOpenPlaceholder }) {
  return (
    <section id="hackathons" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>05. HACKATHON_BUILDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hackathons & <span className="text-gradient-emerald">Sprint Engineering</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-3">
            Rapid prototyping, high-intensity teamwork, and solving complex problems under strict 36–48 hour time constraints.
          </p>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-3" />
        </div>

        {/* Hackathons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {hackathonsData.map((hackathon, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-6 sm:p-8 border transition-all duration-300 ${
                hackathon.accentColor === 'emerald'
                  ? 'bg-gradient-to-br from-dark-900 via-dark-950 to-emerald-950/20 border-emerald-500/30 hover:border-emerald-500/60 shadow-lg shadow-emerald-500/5'
                  : 'bg-gradient-to-br from-dark-900 via-dark-950 to-cyan-950/20 border-cyan-500/30 hover:border-cyan-500/60 shadow-lg shadow-cyan-500/5'
              }`}
            >
              {/* Background ambient accent */}
              <div 
                className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none ${
                  hackathon.accentColor === 'emerald' ? 'bg-emerald-500' : 'bg-cyan-500'
                }`} 
              />

              {/* Card Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-800/80 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Sprint Project
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {hackathon.projectTitle}
                  </h3>
                </div>

                {/* Duration Badge */}
                <div className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold ${
                  hackathon.accentColor === 'emerald'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                }`}>
                  <Flame className="w-3.5 h-3.5 animate-pulse" />
                  <span>{hackathon.durationBadge}</span>
                </div>
              </div>

              {/* Sub-headline */}
              <p className="text-sm font-semibold text-slate-200 mb-4">
                {hackathon.headline}
              </p>

              {/* Role / Contribution */}
              <div className="p-4 rounded-xl bg-dark-950/80 border border-slate-800 mb-5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  Role & Key Contribution
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {hackathon.roleContribution}
                </p>
              </div>

              {/* Achievement Callout (SwiftService Now) */}
              {hackathon.achievementHighlight && (
                <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/15 to-emerald-500/15 border border-cyan-500/40 mb-5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300 shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-300">
                      Measurable Hackathon Impact
                    </span>
                    <p className="text-sm font-bold text-white">
                      {hackathon.achievementHighlight} in local service provider matching!
                    </p>
                  </div>
                </div>
              )}

              {/* Key Outcomes */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  Sprint Highlights
                </h4>
                <ul className="space-y-2">
                  {hackathon.keyOutcomes.map((outcome, oIdx) => (
                    <li key={oIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Action Links */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
                {hackathon.githubUrl ? (
                  <a
                    href={hackathon.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 text-xs font-mono font-medium transition-all"
                  >
                    <Github className="w-4 h-4 text-slate-300" />
                    <span>GitHub Repo</span>
                  </a>
                ) : (
                  <button
                    onClick={() => onOpenPlaceholder({
                      title: `${hackathon.projectTitle} GitHub Repository`,
                      fieldName: `hackathons[${idx}].githubUrl`,
                      message: `Repository link placeholder for ${hackathon.projectTitle}. You can configure your repository URL in src/data/portfolioData.js.`
                    })}
                    className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 text-xs font-mono font-medium transition-all"
                  >
                    <Github className="w-4 h-4 text-slate-300" />
                    <span>GitHub Repo</span>
                  </button>
                )}

                {hackathon.liveUrl ? (
                  <a
                    href={hackathon.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-dark-950 text-xs font-mono font-semibold shadow-md shadow-emerald-500/20 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <button
                    onClick={() => onOpenPlaceholder({
                      title: `${hackathon.projectTitle} Live Demo`,
                      fieldName: `hackathons[${idx}].liveUrl`,
                      message: `Live deployment URL placeholder for ${hackathon.projectTitle}. You can configure your live URL in src/data/portfolioData.js.`
                    })}
                    className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-dark-950 text-xs font-mono font-semibold shadow-md shadow-emerald-500/20 transition-all"
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
