import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = [
      'about',
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
        {/* 1. Hero: Left-aligned large serif introduction + right status card */}
        <Hero />

        {/* 2. About: Concise purpose statement */}
        <About />

        {/* 3. Projects: Strongest 3 showcase projects with specimen panels */}
        <Projects />

        {/* 4. Skills: Compact categorized technical competence */}
        <Skills />

        {/* 5. Contact: Immediate direct channels and direct email */}
        <Contact />
      </main>

      {/* Minimalist Footer */}
      <Footer />
    </div>
  );
}
