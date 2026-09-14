import React, { useState } from 'react';
import { navLinks, personalInfo } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navOffset = 70;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F2EC]/95 backdrop-blur-sm border-b border-hairline transition-all">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo: Editorial Serif */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-baseline gap-2 text-ink hover:text-burnt transition-colors"
          >
            <span className="font-serif text-2xl sm:text-3xl tracking-tight font-medium">
              {personalInfo.name}
            </span>
            <span className="text-xs font-mono text-ink-soft hidden sm:inline">
              / portfolio
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm tracking-wide transition-colors relative py-1 ${
                    isActive 
                      ? 'text-burnt font-medium' 
                      : 'text-ink-muted hover:text-ink'
                  } group`}
                >
                  {link.name}
                  <span 
                    className={`absolute left-0 bottom-0 w-full h-[1px] bg-burnt transition-transform duration-200 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              );
            })}

            {/* Solid [Resume] Button (Rectangular, no pill) */}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-medium uppercase tracking-wider text-bone bg-ink hover:bg-burnt transition-colors"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-bone bg-ink hover:bg-burnt transition-colors"
            >
              Resume
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ink hover:text-burnt"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-bone-light border-b border-hairline px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base text-ink-muted hover:text-burnt transition-colors py-1 border-b border-hairline/60"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-xs font-mono text-burnt flex items-center gap-1"
            >
              <span>Get in touch directly</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
