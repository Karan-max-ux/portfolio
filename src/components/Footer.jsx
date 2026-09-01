import React from 'react';
import { footerData, contactData } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export default function Footer({ onOpenPlaceholder }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-border-subtle bg-bg py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Personal Sign-off Message */}
        <div className="space-y-1.5">
          <h3 className="text-xl sm:text-2xl font-bold text-content-primary font-sans">
            {footerData.heading}
          </h3>
          <p className="text-sm text-content-secondary font-sans">
            {footerData.subtext}
          </p>
        </div>

        {/* Quick Personal Links */}
        <div className="flex items-center justify-center gap-4 text-xs font-sans text-content-secondary">
          <a
            href={`mailto:${contactData.email}`}
            className="hover:text-accent-green transition-colors"
          >
            Email
          </a>
          <span className="text-border">·</span>
          <a
            href={contactData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-content-primary transition-colors"
          >
            GitHub
          </a>
          <span className="text-border">·</span>
          <a
            href={contactData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-cyan transition-colors"
          >
            LinkedIn
          </a>
        </div>

        {/* Back to Top */}
        <div className="pt-2">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border text-xs font-mono text-content-muted hover:text-content-primary hover:border-border-button transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5 text-accent-green" />
            <span>Back to top</span>
          </button>
        </div>

        {/* Subtext Tagline & Copyright */}
        <div className="pt-6 border-t border-border-subtle text-xs text-content-muted font-sans space-y-1">
          <p>{footerData.tagline}</p>
          <p className="font-mono text-[11px] text-content-muted/80">{footerData.copyright}</p>
        </div>

      </div>
    </footer>
  );
}
