import React from 'react';
import { nowData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import GlowCard from './GlowCard';

export default function Now() {
  return (
    <section id="now" className="py-14 bg-transparent border-t border-white/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Container with Glowing Border on Cursor Hover */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <GlowCard 
            className="rounded-2xl bg-[#0D0D0D] border border-white/10 p-6 sm:p-8 shadow-2xl glow-on-hover"
            glowColor="rgba(0, 214, 163, 0.25)"
            borderGlowColor="rgba(0, 214, 163, 0.6)"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded text-[11px] font-mono font-semibold bg-[#00D6A3]/10 border border-[#00D6A3]/30 text-[#00D6A3]">
                  {nowData.sectionLabel}
                </span>
                <h2 className="text-base sm:text-lg font-sans font-semibold text-white">
                  {nowData.headline}
                </h2>
              </div>
              <span className="text-xs font-mono text-[#666666]">
                Active Developer State
              </span>
            </div>

            {/* 3 Columns: Building (Green), Learning (Cyan), Next (Purple) with Stagger */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nowData.items.map((item, idx) => {
                const accentColor = 
                  item.accent === 'green' 
                    ? '#00D6A3' 
                    : item.accent === 'cyan' 
                    ? '#22C7D8' 
                    : '#9B8AFB';

                return (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ x: 3 }}
                    className="space-y-1.5 transition-transform"
                  >
                    <div className="flex items-center gap-2">
                      <span 
                        className="w-2 h-2 rounded-full" 
                        style={{ backgroundColor: accentColor }}
                      />
                      <span 
                        className="text-xs font-mono uppercase tracking-wider font-semibold"
                        style={{ color: accentColor }}
                      >
                        {item.category}
                      </span>
                    </div>
                    <p className="text-sm font-sans font-medium text-[#A1A1A1] pl-4">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </GlowCard>
        </motion.div>

      </div>
    </section>
  );
}
