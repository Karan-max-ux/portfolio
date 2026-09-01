import React from 'react';
import { personalInfo, navLinks } from '../data/portfolioData';
import { Terminal, Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenPlaceholder }) {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark-950 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-mono font-bold text-lg text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-sm text-emerald-400 font-mono">
              MERN Stack Developer | Aspiring Software Engineer
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Computer Science & Engineering student at LPU passionate about building scalable, responsive, and real-world full-stack web applications.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/30 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
              </a>

              {personalInfo.githubUrl ? (
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-purple-500/30 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                  aria-label="Karan Singh GitHub Profile"
                >
                  <Github className="w-4 h-4 text-purple-400" />
                </a>
              ) : (
                <button
                  onClick={() => onOpenPlaceholder({
                    title: "GitHub Repository",
                    fieldName: "personalInfo.githubUrl",
                    message: "Configure your GitHub link in src/data/portfolioData.js."
                  })}
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-purple-500/30 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="GitHub Placeholder"
                >
                  <Github className="w-4 h-4" />
                </button>
              )}

              <a
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/30 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Email Karan Singh"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs text-slate-400 hover:text-emerald-400 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Location & Contact Info */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            <p className="text-xs text-slate-400">
              <strong className="text-slate-300">Email:</strong> {personalInfo.email}
            </p>
            <p className="text-xs text-slate-400">
              <strong className="text-slate-300">Location:</strong> {personalInfo.location}
            </p>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-900 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© 2026 Karan Singh. All rights reserved.</p>
          <p className="flex items-center gap-1 text-slate-400">
            Crafted for Software Engineering & Full-Stack Opportunities
          </p>
        </div>

      </div>
    </footer>
  );
}
