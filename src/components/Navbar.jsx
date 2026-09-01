import React, { useState, useEffect } from 'react';
import { navLinks } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

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
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with subtle motion */}
          <motion.a 
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="Karan Singh - Home"
          >
            <div className="w-8 h-8 rounded-lg bg-[#111111] border border-white/15 flex items-center justify-center text-[#00D6A3] group-hover:border-[#00D6A3]/50 transition-colors">
              <span className="font-mono text-sm font-semibold">&gt;_</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-sm tracking-tight text-white group-hover:text-[#00D6A3] transition-colors">
                karan<span className="text-[#00D6A3]">.dev</span>
              </span>
              <span className="text-[10px] text-[#666666] font-sans font-medium">
                Full-Stack
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation Links with Framer Motion Sliding Pill */}
          <nav 
            className="hidden md:flex items-center gap-1 relative"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              const isHovered = hoveredLink === link.href;

              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-sans font-medium transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#00D6A3]'
                      : 'text-[#A1A1A1] hover:text-white'
                  }`}
                >
                  {/* Sliding Active Indicator Pill (Motion Transition) */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 rounded-lg bg-[#00D6A3]/10 border border-[#00D6A3]/35 shadow-[0_0_15px_rgba(0,214,163,0.2)]"
                      transition={{
                        type: 'spring',
                        stiffness: 420,
                        damping: 32,
                      }}
                    />
                  )}

                  {/* Hover Pill Motion for Non-Active Items */}
                  {!isActive && isHovered && (
                    <motion.span
                      layoutId="hoverNavBackground"
                      className="absolute inset-0 rounded-lg bg-white/5 border border-white/10"
                      transition={{
                        type: 'spring',
                        stiffness: 450,
                        damping: 35,
                      }}
                    />
                  )}

                  <span className="relative z-10 select-none">{link.name}</span>
                </motion.a>
              );
            })}
          </nav>

          {/* Desktop Right CTA with Motion */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-sans font-semibold bg-[#141414] hover:bg-[#1C1C1C] text-white border border-white/15 hover:border-[#00D6A3]/60 transition-colors active:scale-95 cursor-pointer shadow-sm"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#00D6A3]" />
            </motion.a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#111111] border border-white/15 text-[#A1A1A1] hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-3 pt-3 pb-4 border-t border-white/10 bg-[#0D0D0D]/95 backdrop-blur-lg rounded-xl p-4 shadow-2xl border border-white/10"
            >
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
                          ? 'text-[#00D6A3] bg-[#00D6A3]/10 border border-[#00D6A3]/30'
                          : 'text-[#A1A1A1] hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="mt-2 text-center py-2.5 rounded-lg text-xs font-sans font-semibold bg-[#00D6A3] text-black shadow-sm"
                >
                  Let's Talk ↗
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}
