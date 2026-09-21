import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 border-b border-hairline">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10 sm:mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-burnt">04</span>
          <span className="h-[1px] w-8 bg-hairline" />
          <span className="text-xs font-mono uppercase tracking-wider text-ink-soft">Contact</span>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Direct Outreach */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-serif text-4xl sm:text-6xl text-ink font-normal tracking-tight leading-[1.1]">
              Let's build something together.
            </h2>

            <p className="text-lg sm:text-xl text-ink-muted leading-relaxed font-normal max-w-xl">
              Have a project, opportunity, or idea? I'd love to hear from you.
            </p>

            {/* Direct Email Action */}
            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-ink-soft block mb-3">
                Direct Email
              </span>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-serif text-2xl sm:text-3xl text-ink hover:text-burnt transition-colors border-b border-hairline hover:border-burnt pb-1"
                >
                  {personalInfo.email}
                </a>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-hairline hover:border-burnt text-xs font-mono text-ink-muted hover:text-burnt transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-burnt" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="pt-8 border-t border-hairline flex flex-wrap items-center gap-8 text-xs font-mono text-ink-soft">
              <span className="text-ink-subtle">Channels:</span>
              
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-ink hover:text-burnt transition-colors flex items-center gap-1.5 font-medium"
              >
                <span>Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <span className="text-hairline">/</span>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-burnt transition-colors flex items-center gap-1.5 font-medium"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <span className="text-hairline">/</span>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-burnt transition-colors flex items-center gap-1.5 font-medium"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Balanced Collaboration & Availability Card */}
          <div className="lg:col-span-5 lg:pt-4">
            <div className="bg-bone-dark/40 border border-hairline p-7 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-hairline/80 text-xs font-mono">
                <span className="text-ink-soft uppercase tracking-wider text-[11px]">COLLABORATION NOTE</span>
                <span className="w-2 h-2 rounded-full bg-burnt inline-block" />
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <span className="text-ink-soft block mb-1 uppercase tracking-wider text-[11px]">Primary Inquiries</span>
                  <p className="font-serif text-base text-ink font-normal leading-snug">Full-Stack Roles, Internships & Collaborative Sprints</p>
                </div>

                <div className="pt-3 border-t border-hairline/60">
                  <span className="text-ink-soft block mb-1 uppercase tracking-wider text-[11px]">Turnaround</span>
                  <p className="text-ink-muted">Replies sent directly to your inbox, usually within 24 hours.</p>
                </div>

                <div className="pt-3 border-t border-hairline/60">
                  <span className="text-ink-soft block mb-1 uppercase tracking-wider text-[11px]">Location</span>
                  <p className="text-ink-muted">India (Open to remote engineering worldwide)</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
