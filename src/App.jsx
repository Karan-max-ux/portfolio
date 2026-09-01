import React, { useState, useEffect } from 'react';
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

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    title: '',
    fieldName: '',
    message: ''
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
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-[#00D6A3]/20 selection:text-[#00D6A3] antialiased">
      
      {/* Top Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections with Visual Variety */}
      <main className="flex-grow">
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
