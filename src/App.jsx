import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Now from './components/Now';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = [
      'about',
      'now',
      'timeline',
      'projects',
      'skills',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

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

  return (
    <div className="min-h-screen bg-bone text-ink flex flex-col font-sans selection:bg-burnt/15 selection:text-burnt antialiased">
      {/* Editorial Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Editorial Flow */}
      <main className="flex-grow">
        {/* 1. Hero: Left-aligned large serif introduction */}
        <Hero />

        {/* 2. About: Asymmetric pull-quote + narrative prose */}
        <About />

        {/* 3. Now: Journal-like dated status list */}
        <Now />

        {/* 4. Timeline: Chronological linear record with embedded experience */}
        <Timeline />

        {/* 5. Projects: Asymmetric alternating showcases with specimen panels */}
        <Projects />

        {/* 6. Skills: Plain grouped typography rows (no cards or icons) */}
        <Skills />

        {/* 7. Certifications: Simple editorial bullet list */}
        <Certifications />

        {/* 8. Contact: Large serif headline, direct email & minimalist form */}
        <Contact />
      </main>

      {/* 9. Minimalist Footer */}
      <Footer />
    </div>
  );
}
