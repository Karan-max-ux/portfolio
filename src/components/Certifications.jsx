import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { 
  Award, 
  BadgeCheck, 
  Terminal, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles,
  FileCheck
} from 'lucide-react';

const certIcons = {
  Award: Award,
  BadgeCheck: BadgeCheck,
  Terminal: Terminal
};

export default function Certifications({ onOpenPlaceholder }) {
  return (
    <section id="certifications" className="py-20 relative bg-dark-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>05. VERIFIED_CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & <span className="text-gradient-emerald">Assessments</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-3">
            Validated technical knowledge in full-stack architecture, Linux systems, and competitive hackathon assessments.
          </p>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-3" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert) => {
            const Icon = certIcons[cert.icon] || Award;
            return (
              <div
                key={cert.id}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-dark-950 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400">
                      {cert.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-emerald-300 transition-colors">
                    {cert.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {cert.subTitle}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => onOpenPlaceholder({
                      title: cert.title,
                      fieldName: `certifications[${cert.id - 1}].credentialUrl`,
                      message: `Placeholder for "${cert.title}". You can configure your verification link or PDF in src/data/portfolioData.js.`
                    })}
                    className="w-full inline-flex items-center justify-between px-3 py-2 rounded-xl bg-dark-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono transition-all"
                  >
                    <span className="flex items-center gap-1.5">
                      <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>[Add Certificate Link]</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
