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
    <footer className="border-t border-[#1D2A33] bg-[#080C10] py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Personal Sign-off Message */}
        <div className="space-y-1.5">
          <h3 className="text-xl sm:text-2xl font-bold text-[#F1F5F3] font-sans">
            {footerData.heading}
          </h3>
          <p className="text-sm text-[#A6B3BA] font-sans">
            {footerData.subtext}
          </p>
        </div>

        {/* Quick Personal Links */}
        <div className="flex items-center justify-center gap-4 text-xs font-sans text-[#A6B3BA]">
          <a
            href={`mailto:${contactData.email}`}
            className="hover:text-[#00D6A3] transition-colors"
          >
            Email
          </a>
          <span className="text-[#1D2A33]">·</span>
          <a
            href={contactData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F1F5F3] transition-colors"
          >
            GitHub
          </a>
          <span className="text-[#1D2A33]">·</span>
          <a
            href={contactData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#22C7D8] transition-colors"
          >
            LinkedIn
          </a>
        </div>

        {/* Back to Top */}
        <div className="pt-2">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#121A22] border border-[#1D2A33] text-xs font-mono text-[#62717B] hover:text-[#F1F5F3] hover:border-[#263640] transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#00D6A3]" />
            <span>Back to top</span>
          </button>
        </div>

        {/* Subtext Tagline & Copyright */}
        <div className="pt-6 border-t border-[#1D2A33] text-xs text-[#62717B] font-sans space-y-1">
          <p>{footerData.tagline}</p>
          <p className="font-mono text-[11px] text-[#62717B]/80">{footerData.copyright}</p>
        </div>

      </div>
    </footer>
  );
}
