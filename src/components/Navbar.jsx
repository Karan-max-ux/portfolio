import React, { useState, useEffect } from 'react';
import { navLinks, personalInfo } from '../data/portfolioData';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled 
          ? 'bg-[#080C10]/90 backdrop-blur-md border-b border-border py-3 shadow-card-subtle' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="Karan Singh - Home"
          >
            <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center text-accent-green group-hover:border-accent-green/40 transition-colors">
              <span className="font-mono text-sm font-semibold">&gt;_</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-sm tracking-tight text-content-primary group-hover:text-accent-green transition-colors">
                karan<span className="text-accent-green">.dev</span>
              </span>
              <span className="text-[10px] text-content-muted font-sans font-medium">
                Full-Stack
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-sans font-medium transition-colors duration-150 ${
                    isActive
                      ? 'text-[#00D6A3] bg-[#00D6A3]/[0.08] border border-[#00D6A3]/[0.25]'
                      : 'text-content-secondary hover:text-content-primary hover:bg-surface/60 border border-transparent'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-sans font-semibold bg-surface-button hover:bg-surface text-content-primary border border-border-button hover:border-accent-green/50 transition-all active:scale-95"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent-green" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-surface border border-border text-content-secondary hover:text-content-primary focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-border bg-surface/95 backdrop-blur-lg rounded-xl p-4 shadow-xl">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3.5 py-2 rounded-lg text-sm font-sans font-medium transition-colors ${
                      isActive
                        ? 'text-[#00D6A3] bg-[#00D6A3]/[0.08] border border-[#00D6A3]/[0.25]'
                        : 'text-content-secondary hover:text-content-primary hover:bg-bg-subtle'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="mt-2 text-center py-2.5 rounded-lg text-xs font-sans font-semibold bg-accent-green text-bg shadow-sm"
              >
                Let's Talk ↗
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
