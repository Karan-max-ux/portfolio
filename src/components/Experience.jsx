import React from 'react';
import { timelineData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import GlowCard from './GlowCard';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-transparent border-t border-white/10 relative overflow-hidden">
      <div id="education" className="sr-only" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#00D6A3] mb-2 block">
            Experience & Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Where I've Worked & Learned
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1A1] max-w-xl mt-3 font-sans">
            A chronological timeline of hands-on internship engineering and computer science foundations.
          </p>
        </motion.div>

        {/* Clean Editorial Timeline with Scroll Reveal */}
        <div className="relative border-l border-white/15 ml-3 sm:ml-4 pl-6 sm:pl-10 space-y-14">
          {timelineData.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative group"
            >
              
              {/* Glowing Green Timeline Indicator Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-black border-2 border-[#00D6A3] flex items-center justify-center group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(0,214,163,0.8)] transition-all duration-200">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D6A3]" />
              </div>

              {/* Editorial Item Content inside GlowCard */}
              <GlowCard 
                className="rounded-xl bg-[#0D0D0D] border border-white/10 p-6 space-y-4 shadow-xl glow-on-hover"
                glowColor="rgba(0, 214, 163, 0.2)"
                borderGlowColor="rgba(0, 214, 163, 0.5)"
              >
                {/* Meta Row: Period & Location */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono text-[#666666]">
                    {item.period}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#141414] border border-white/10 text-[#A1A1A1]">
                    {item.badge}
                  </span>
                </div>

                {/* Role & Organization */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-sans group-hover:text-[#00D6A3] transition-colors">
                    {item.role}
                  </h3>
                  <div className="text-sm font-sans font-medium text-[#00D6A3] mt-0.5 flex items-center gap-1.5">
                    <span>{item.organization}</span>
                    <span className="text-white/20">·</span>
                    <span className="text-[#888888] text-xs font-normal">{item.location}</span>
                  </div>
                </div>

                {/* Brief Summary */}
                <p className="text-sm text-[#A1A1A1] font-sans leading-relaxed">
                  {item.summary}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 text-xs sm:text-sm text-[#A1A1A1] font-sans">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="text-[#00D6A3] mt-1 text-xs">▪</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies Tagline */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.technologies.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#141414] border border-white/10 text-[#888888]"
                    >
                      {tech}
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
