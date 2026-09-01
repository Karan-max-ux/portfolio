import React from 'react';
import { skillsData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import GlowCard from './GlowCard';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-transparent border-t border-white/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="mb-14"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#00D6A3] mb-2 block">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            {skillsData.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1A1] max-w-xl mt-2 font-sans">
            {skillsData.subheading}
          </p>
        </motion.div>

        {/* Grouped Typography Layout with Cursor-Glowing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.groups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={{ y: -4 }}
            >
              <GlowCard 
                className="rounded-xl bg-[#0D0D0D] border border-white/10 p-6 space-y-3 shadow-xl glow-on-hover"
                glowColor="rgba(0, 214, 163, 0.2)"
                borderGlowColor="rgba(0, 214, 163, 0.5)"
              >
                {/* Category Title */}
                <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D6A3]" />
                  <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                    {group.name}
                  </h3>
                </div>

                {/* Naturally Formatted Skills List with Middle Dot Separators */}
                <div className="text-sm font-sans text-[#A1A1A1] leading-relaxed pt-1">
                  {group.skills.map((skill, sIdx) => (
                    <span key={sIdx}>
                      <span className="hover:text-white transition-colors cursor-default">
                        {skill}
                      </span>
                      {sIdx < group.skills.length - 1 && (
                        <span className="text-[#666666] mx-2 select-none">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
