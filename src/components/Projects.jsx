import React from 'react';
import { projectsData } from '../data/portfolioData';
import { 
  ArrowUpRight, 
  Github, 
  Code2
} from 'lucide-react';
import { motion } from 'framer-motion';
import GlowCard from './GlowCard';

export default function Projects({ onOpenPlaceholder }) {
  return (
    <section id="projects" className="py-24 bg-transparent border-t border-white/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#00D6A3] mb-2 block">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Projects I've Built & Shipped
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1A1] max-w-xl mt-3 font-sans">
            Focused on solving practical problems, understanding system internals, and building maintainable full-stack software.
          </p>
        </motion.div>

        {/* Alternating Showcases with Glowing Borders */}
        <div className="space-y-20">
          {projectsData.map((project, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <GlowCard 
                  className="rounded-2xl bg-[#0D0D0D] border border-white/10 overflow-hidden shadow-2xl glow-on-hover"
                  glowColor={idx === 0 ? "rgba(0, 214, 163, 0.22)" : "rgba(34, 199, 216, 0.22)"}
                  borderGlowColor={idx === 0 ? "rgba(0, 214, 163, 0.55)" : "rgba(34, 199, 216, 0.55)"}
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 items-center`}>
                    
                    {/* Content Column */}
                    <div className={`space-y-6 ${isEven ? 'lg:col-span-6 lg:order-2' : 'lg:col-span-6 lg:order-1'}`}>
                      
                      {/* Top Row: Number & Tech Stack */}
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-2xl font-bold text-[#00D6A3]">
                          {project.number}
                        </span>
                        <span className="text-white/20">/</span>
                        <span className="text-xs font-mono text-[#666666]">
                          Personal Project
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans mb-1.5">
                          {project.name}
                        </h3>
                        <p className="text-xs font-mono text-[#888888]">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Short Description */}
                      <p className="text-sm sm:text-base text-[#A1A1A1] leading-relaxed font-sans">
                        {project.description}
                      </p>

                      {/* Why I Built It */}
                      <div className="rounded-xl bg-black border border-white/10 p-4 space-y-1.5 glow-on-hover">
                        <div className="text-xs font-mono font-medium text-[#00D6A3] flex items-center gap-1.5">
                          <span>Why I built it:</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#A1A1A1] font-sans leading-relaxed">
                          "{project.whyIBuiltIt}"
                        </p>
                      </div>

                      {/* What I Learned */}
                      {project.whatILearned && (
                        <div className="rounded-xl bg-black/60 border border-white/10 p-4 space-y-1.5 glow-on-hover-cyan">
                          <div className="text-xs font-mono font-medium text-[#22C7D8] flex items-center gap-1.5">
                            <span>What I learned:</span>
                          </div>
                          <p className="text-xs sm:text-sm text-[#A1A1A1] font-sans leading-relaxed">
                            {project.whatILearned}
                          </p>
                        </div>
                      )}

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-[#141414] text-[#A1A1A1] border border-white/10 text-xs font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons with Micro-Motion */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        {project.liveUrl ? (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.04, boxShadow: "0 0 25px rgba(0, 214, 163, 0.45)" }}
                            whileTap={{ scale: 0.96 }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00D6A3] text-black font-sans text-xs font-semibold shadow-[0_0_20px_rgba(0,214,163,0.3)] transition-all active:scale-95"
                          >
                            <span>Live Demo</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </motion.a>
                        ) : (
                          <motion.button
                            onClick={() => onOpenPlaceholder({
                              title: `${project.name} Live Demo`,
                              fieldName: `project.liveUrl`,
                              message: `Live deployment preview for ${project.name}. You can attach your hosted domain link in src/data/portfolioData.js.`
                            })}
                            whileHover={{ scale: 1.03, borderColor: "rgba(0, 214, 163, 0.5)" }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00D6A3]/10 text-[#00D6A3] border border-[#00D6A3]/30 font-sans text-xs font-medium hover:bg-[#00D6A3]/20 transition-all cursor-pointer"
                          >
                            <span>Live Demo (Preview)</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </motion.button>
                        )}

                        {project.githubUrl ? (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03, borderColor: "rgba(255, 255, 255, 0.4)" }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#141414] text-white border border-white/15 text-xs font-sans font-medium transition-all"
                          >
                            <Github className="w-3.5 h-3.5 text-[#A1A1A1]" />
                            <span>Source Code</span>
                          </motion.a>
                        ) : (
                          <motion.button
                            onClick={() => onOpenPlaceholder({
                              title: `${project.name} Repository`,
                              fieldName: `project.githubUrl`,
                              message: `Source code link for ${project.name}. Configure repository URL in src/data/portfolioData.js.`
                            })}
                            whileHover={{ scale: 1.03, borderColor: "rgba(255, 255, 255, 0.4)" }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#141414] text-[#A1A1A1] border border-white/15 text-xs font-sans font-medium hover:text-white transition-all cursor-pointer"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>Source Code</span>
                          </motion.button>
                        )}
                      </div>

                    </div>

                    {/* Visual Showcase Card with Cursor Glow */}
                    <div className={`${isEven ? 'lg:col-span-6 lg:order-1' : 'lg:col-span-6 lg:order-2'}`}>
                      <GlowCard
                        onClick={() => onOpenPlaceholder({
                          title: `${project.name} Visual Preview`,
                          fieldName: `project.previewLabel`,
                          message: `High-resolution screenshots or custom UI graphics for ${project.name} can be linked directly.`
                        })}
                        glowColor="rgba(0, 214, 163, 0.3)"
                        borderGlowColor="rgba(0, 214, 163, 0.6)"
                        className="group/mockup rounded-xl bg-black border border-white/15 p-5 sm:p-7 min-h-[290px] flex flex-col justify-between cursor-pointer transition-all duration-200 overflow-hidden shadow-xl glow-on-hover"
                      >
                        {/* Window Header */}
                        <div className="flex items-center justify-between pb-3 border-b border-white/10">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                          </div>
                          <span className="text-[10px] font-mono text-[#666666]">
                            {project.name.toLowerCase()}.app
                          </span>
                        </div>

                        {/* Mockup Center Graphic */}
                        <div className="py-6 space-y-3">
                          <div className="flex items-center justify-between p-3.5 rounded-lg bg-[#0D0D0D] border border-white/10">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-md bg-black border border-white/10 flex items-center justify-center text-[#00D6A3]">
                                <Code2 className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-xs font-sans font-semibold text-white">
                                  {project.name}
                                </div>
                                <div className="text-[10px] font-mono text-[#666666]">
                                  Full-Stack MERN Architecture
                                </div>
                              </div>
                            </div>
                            <span className="text-[10px] font-mono text-[#00D6A3] px-2 py-0.5 rounded bg-[#00D6A3]/10 border border-[#00D6A3]/25">
                              Active
                            </span>
                          </div>

                          <div className="p-3.5 rounded-lg bg-[#0D0D0D]/60 border border-white/10 text-xs text-[#888888] font-mono leading-relaxed">
                            // Architecture Highlights<br />
                            → Modular REST routing & JWT middleware<br />
                            → Responsive data flows & state sync<br />
                            → Validated schema structure
                          </div>
                        </div>

                        {/* Mockup Footer Caption */}
                        <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#666666] group-hover/mockup:text-[#00D6A3] transition-colors">
                          <span>{project.previewLabel}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>

                      </GlowCard>
                    </div>

                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
