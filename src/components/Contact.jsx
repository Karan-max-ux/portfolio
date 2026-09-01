import React, { useState } from 'react';
import { contactData } from '../data/portfolioData';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  ArrowUpRight,
  Send,
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GlowCard from './GlowCard';

export default function Contact({ onOpenPlaceholder }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showQuickForm, setShowQuickForm] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:${contactData.email}?subject=${encodeURIComponent(
      `Portfolio Message from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    setSent(true);
    window.location.href = mailto;
    setTimeout(() => {
      setFormState({ name: '', email: '', message: '' });
      setSent(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-transparent border-t border-white/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        
        {/* Conversational Intro Block with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="space-y-4 max-w-2xl mb-12"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#00D6A3] block">
            {contactData.heading}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
            {contactData.subheading}
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1A1] font-sans leading-relaxed pt-1">
            {contactData.description}
          </p>
        </motion.div>

        {/* Primary Conversational Action Buttons with Glow on Hover */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mb-8"
        >
          
          {/* Email Me Button */}
          <motion.a
            href={`mailto:${contactData.email}`}
            whileHover={{ scale: 1.04, boxShadow: "0 0 25px rgba(0, 214, 163, 0.45)" }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#00D6A3] text-black font-sans font-semibold text-sm shadow-[0_0_20px_rgba(0,214,163,0.3)] transition-all active:scale-95 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Email Me</span>
          </motion.a>

          {/* Copy Email Button with Glow */}
          <motion.button
            onClick={handleCopyEmail}
            whileHover={{ scale: 1.03, borderColor: "rgba(0, 214, 163, 0.5)", boxShadow: "0 0 20px rgba(0, 214, 163, 0.2)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#141414] text-[#A1A1A1] border border-white/15 hover:text-white text-sm font-sans transition-all active:scale-95 cursor-pointer"
            title="Copy email address"
          >
            {copiedEmail ? (
              <>
                <Check className="w-4 h-4 text-[#00D6A3]" />
                <span className="text-[#00D6A3] text-xs font-mono">Copied email!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span className="text-xs font-mono">{contactData.email}</span>
              </>
            )}
          </motion.button>

          {/* LinkedIn Button with Cyan Glow */}
          <motion.a
            href={contactData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, borderColor: "rgba(34, 199, 216, 0.6)", boxShadow: "0 0 20px rgba(34, 199, 216, 0.25)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#141414] text-white border border-white/15 font-sans text-sm font-medium transition-all active:scale-95"
          >
            <Linkedin className="w-4 h-4 text-[#22C7D8]" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#666666]" />
          </motion.a>

          {/* GitHub Button with Purple Glow */}
          <motion.a
            href={contactData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, borderColor: "rgba(155, 138, 251, 0.6)", boxShadow: "0 0 20px rgba(155, 138, 251, 0.25)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#141414] text-white border border-white/15 font-sans text-sm font-medium transition-all active:scale-95"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#666666]" />
          </motion.a>

        </motion.div>

        {/* Quick Note Toggle & Form with GlowCard */}
        <div className="pt-4 border-t border-white/10">
          {!showQuickForm ? (
            <motion.button
              onClick={() => setShowQuickForm(true)}
              whileHover={{ x: 3 }}
              className="text-xs font-mono text-[#888888] hover:text-[#00D6A3] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Or leave a quick message here directly →</span>
            </motion.button>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 max-w-lg"
            >
              <GlowCard 
                className="rounded-xl bg-[#0D0D0D] border border-white/15 p-6 text-left shadow-2xl glow-on-hover"
                glowColor="rgba(0, 214, 163, 0.22)"
                borderGlowColor="rgba(0, 214, 163, 0.6)"
              >
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-xs font-mono text-[#666666]">Quick Dispatch</span>
                    <button
                      type="button"
                      onClick={() => setShowQuickForm(false)}
                      className="text-xs font-mono text-[#888888] hover:text-white"
                    >
                      [Close]
                    </button>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A1A1A1] mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Alex"
                      className="w-full px-3 py-2 rounded-lg bg-black border border-white/15 text-sm text-white focus:outline-none focus:border-[#00D6A3] focus:ring-1 focus:ring-[#00D6A3]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A1A1A1] mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-3 py-2 rounded-lg bg-black border border-white/15 text-sm text-white focus:outline-none focus:border-[#00D6A3] focus:ring-1 focus:ring-[#00D6A3]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A1A1A1] mb-1">Message</label>
                    <textarea
                      required
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hey Karan, I'd love to chat about..."
                      className="w-full px-3 py-2 rounded-lg bg-black border border-white/15 text-sm text-white focus:outline-none focus:border-[#00D6A3] focus:ring-1 focus:ring-[#00D6A3] resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(0, 214, 163, 0.4)" }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#00D6A3] text-black font-sans font-semibold text-xs shadow-sm transition-all"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </motion.button>
                    {sent && (
                      <span className="text-xs font-mono text-[#00D6A3]">Opening mail client...</span>
                    )}
                  </div>
                </form>
              </GlowCard>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
