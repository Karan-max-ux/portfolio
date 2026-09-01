import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { ArrowUpRight, Award } from 'lucide-react';

export default function Certifications({ onOpenPlaceholder }) {
  return (
    <section id="certifications" className="py-20 border-t border-border-subtle relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-green mb-2 block">
            Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-content-primary tracking-tight font-sans">
            Validated Knowledge
          </h2>
          <p className="text-sm sm:text-base text-content-secondary max-w-xl mt-2 font-sans">
            Assessments and technical certifications covering full-stack web and developer tooling.
          </p>
        </div>

        {/* Compact List (Not a repetitive card grid) */}
        <div className="rounded-xl bg-surface border border-border divide-y divide-border-subtle overflow-hidden">
          {certificationsData.map((cert, idx) => (
            <div 
              key={idx}
              className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-surface-elevated/40 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                  <h3 className="text-base font-semibold text-content-primary font-sans">
                    {cert.name}
                  </h3>
                </div>
                <p className="text-xs text-content-muted font-sans pl-4">
                  {cert.details} · <span className="text-content-secondary">{cert.issuer}</span>
                </p>
              </div>

              <div className="flex items-center gap-4 pl-4 sm:pl-0 shrink-0">
                <span className="text-xs font-mono text-content-muted">
                  {cert.date}
                </span>

                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-accent-cyan hover:underline"
                  >
                    <span>View</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    onClick={() => onOpenPlaceholder({
                      title: `${cert.name} Credential`,
                      fieldName: `cert.url`,
                      message: `Attach your official credential certificate or verification link in src/data/portfolioData.js.`
                    })}
                    className="inline-flex items-center gap-1 text-xs font-mono text-accent-cyan/80 hover:text-accent-cyan hover:underline cursor-pointer"
                  >
                    <span>Credential</span>
                    <ArrowUpRight className="w-3 h-3" />
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
