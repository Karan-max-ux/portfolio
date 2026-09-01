import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Certifications from './components/Certifications';
import Education from './components/Education';
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
      'skills',
      'experience',
      'projects',
      'hackathons',
      'certifications',
      'education',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

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
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-400">
      
      {/* Top Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenPlaceholder={openPlaceholderModal} />
        <About />
        <Skills />
        <Experience />
        <Projects onOpenPlaceholder={openPlaceholderModal} />
        <Hackathons onOpenPlaceholder={openPlaceholderModal} />
        <Certifications onOpenPlaceholder={openPlaceholderModal} />
        <Education />
        <Contact onOpenPlaceholder={openPlaceholderModal} />
      </main>

      {/* Footer */}
      <Footer onOpenPlaceholder={openPlaceholderModal} />

      {/* Floating Helpers */}
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
