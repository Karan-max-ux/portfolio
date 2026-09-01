import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export default function Certifications({ onOpenPlaceholder }) {
  return (
    <section id="certifications" className="py-20 bg-[#080C10] border-t border-[#1D2A33] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00D6A3] mb-2 block">
            Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F5F3] tracking-tight font-sans">
            Validated Knowledge
          </h2>
          <p className="text-sm sm:text-base text-[#A6B3BA] max-w-xl mt-2 font-sans">
            Assessments and technical certifications covering full-stack web and developer tooling.
          </p>
        </div>

        {/* Compact List */}
        <div className="rounded-xl bg-[#121A22] border border-[#1D2A33] divide-y divide-[#1D2A33] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
          {certificationsData.map((cert, idx) => (
            <div 
              key={idx}
              className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#16222C]/40 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C7D8]" />
                  <h3 className="text-base font-semibold text-[#F1F5F3] font-sans">
                    {cert.name}
                  </h3>
                </div>
                <p className="text-xs text-[#62717B] font-sans pl-4">
                  {cert.details} · <span className="text-[#A6B3BA]">{cert.issuer}</span>
                </p>
              </div>

              <div className="flex items-center gap-4 pl-4 sm:pl-0 shrink-0">
                <span className="text-xs font-mono text-[#62717B]">
                  {cert.date}
                </span>

                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#22C7D8] hover:underline"
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
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#22C7D8] hover:underline cursor-pointer"
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
