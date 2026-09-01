import React from 'react';
import { footerData, contactData } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer({ onOpenPlaceholder }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-white/10 bg-transparent py-16 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6"
      >
        
        {/* Personal Sign-off Message */}
        <div className="space-y-1.5">
          <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
            {footerData.heading}
          </h3>
          <p className="text-sm text-[#A1A1A1] font-sans">
            {footerData.subtext}
          </p>
        </div>

        {/* Quick Personal Links */}
        <div className="flex items-center justify-center gap-4 text-xs font-sans text-[#A1A1A1]">
          <a
            href={`mailto:${contactData.email}`}
            className="hover:text-[#00D6A3] transition-colors"
          >
            Email
          </a>
          <span className="text-white/15">·</span>
          <a
            href={contactData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span className="text-white/15">·</span>
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
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#141414] border border-white/15 text-xs font-mono text-[#888888] hover:text-white hover:border-white/35 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#00D6A3]" />
            <span>Back to top</span>
          </motion.button>
        </div>

        {/* Subtext Tagline & Copyright */}
        <div className="pt-6 border-t border-white/10 text-xs text-[#666666] font-sans space-y-1">
          <p>{footerData.tagline}</p>
          <p className="font-mono text-[11px] text-[#555555]">{footerData.copyright}</p>
        </div>

      </motion.div>
    </footer>
  );
}
