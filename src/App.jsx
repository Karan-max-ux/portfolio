import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Now from './components/Now';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PlaceholderModal from './components/PlaceholderModal';
import CursorGlow from './components/CursorGlow';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    title: '',
    fieldName: '',
    message: ''
  });

  // Top Global Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const sections = [
      'home',
      'about',
      'now',
      'projects',
      'skills',
      'experience',
      'certifications',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openPlaceholderModal = (config) => {
    setModalConfig({
      isOpen: true,
      title: config.title || 'Configurable Placeholder',
      fieldName: config.fieldName || '',
      message: config.message || ''
    });
  };

  const closePlaceholderModal = () => {
    setModalConfig(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-[#00D6A3]/20 selection:text-[#00D6A3] antialiased relative">
      
      {/* Global Developer Background Pattern Overlay (Technical Grid & Dot Matrix) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Fine Technical Grid Lines */}
        <div 
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Subtle Micro Dot Matrix Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Smooth Center-Focused Vignette to keep text readable */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 30%, transparent 15%, rgba(0, 0, 0, 0.6) 80%, #000000 100%)',
          }}
        />
      </div>

      {/* Global Cursor Glow Effect that follows cursor across the entire page */}
      <CursorGlow />

      {/* Scroll Progress Bar at the Top */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#00D6A3] origin-left z-50 shadow-[0_0_12px_rgba(0,214,163,0.8)] pointer-events-none"
      />

      {/* Top Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-grow relative z-10">
        {/* 1. Hero: Asymmetric Introduction + Developer Card */}
        <Hero onOpenPlaceholder={openPlaceholderModal} />

        {/* 2. About: Conversational Narrative + Interests */}
        <About />

        {/* 3. Now: Currently Building / Active Developer Board */}
        <Now />

        {/* 4. Projects: Large Alternating Showcases with "Why I built it" */}
        <Projects onOpenPlaceholder={openPlaceholderModal} />

        {/* 5. Skills: Natural Grouped Typography */}
        <Skills />

        {/* 6. Timeline: Professional Experience & Education */}
        <Experience />

        {/* 7. Certifications: Compact Clean List */}
        <Certifications onOpenPlaceholder={openPlaceholderModal} />

        {/* 8. Contact: Conversational CTA */}
        <Contact onOpenPlaceholder={openPlaceholderModal} />
      </main>

      {/* Footer: Personal Sign-off */}
      <Footer onOpenPlaceholder={openPlaceholderModal} />

      {/* Floating Helpers & Modals */}
      <ScrollToTop />
      <PlaceholderModal
        isOpen={modalConfig.isOpen}
        onClose={closePlaceholderModal}
        title={modalConfig.title}
        fieldName={modalConfig.fieldName}
        message={modalConfig.message}
      />
    </div>
  );
}
