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
    <section id="contact" className="py-24 bg-[#080808] border-t border-white/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        
        {/* Conversational Intro Block */}
        <div className="space-y-4 max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00D6A3] block">
            {contactData.heading}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
            {contactData.subheading}
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1A1] font-sans leading-relaxed pt-1">
            {contactData.description}
          </p>
        </div>

        {/* Primary Conversational Action Buttons */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mb-8">
          
          {/* Email Me Button */}
          <a
            href={`mailto:${contactData.email}`}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#00D6A3] text-black font-sans font-semibold text-sm shadow-[0_0_20px_rgba(0,214,163,0.3)] hover:shadow-[0_0_28px_rgba(0,214,163,0.45)] transition-all active:scale-95 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Email Me</span>
          </a>

          {/* Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#141414] text-[#A1A1A1] border border-white/15 hover:border-white/35 hover:text-white text-sm font-sans transition-all active:scale-95 cursor-pointer"
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
          </button>

          {/* LinkedIn Button */}
          <a
            href={contactData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#141414] text-white border border-white/15 hover:border-[#22C7D8]/60 font-sans text-sm font-medium transition-all active:scale-95"
          >
            <Linkedin className="w-4 h-4 text-[#22C7D8]" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#666666]" />
          </a>

          {/* GitHub Button */}
          <a
            href={contactData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#141414] text-white border border-white/15 hover:border-white/35 font-sans text-sm font-medium transition-all active:scale-95"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#666666]" />
          </a>

        </div>

        {/* Quick Note Toggle & Form */}
        <div className="pt-4 border-t border-white/10">
          {!showQuickForm ? (
            <button
              onClick={() => setShowQuickForm(true)}
              className="text-xs font-mono text-[#888888] hover:text-[#00D6A3] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Or leave a quick message here directly →</span>
            </button>
          ) : (
            <form onSubmit={handleFormSubmit} className="mt-4 space-y-4 max-w-lg rounded-xl bg-[#0D0D0D] border border-white/15 p-6 text-left shadow-2xl">
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
                  className="w-full px-3 py-2 rounded-lg bg-black border border-white/15 text-sm text-white focus:outline-none focus:border-[#00D6A3]"
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
                  className="w-full px-3 py-2 rounded-lg bg-black border border-white/15 text-sm text-white focus:outline-none focus:border-[#00D6A3]"
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
                  className="w-full px-3 py-2 rounded-lg bg-black border border-white/15 text-sm text-white focus:outline-none focus:border-[#00D6A3] resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#00D6A3] text-black font-sans font-semibold text-xs shadow-sm hover:shadow-[0_0_15px_rgba(0,214,163,0.3)] transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
                {sent && (
                  <span className="text-xs font-mono text-[#00D6A3]">Opening mail client...</span>
                )}
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
