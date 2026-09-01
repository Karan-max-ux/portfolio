import React, { useState } from 'react';
import { contactData, personalInfo } from '../data/portfolioData';
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
    <section id="contact" className="py-24 border-t border-border-subtle relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        
        {/* Conversational Intro Block */}
        <div className="space-y-4 max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-green block">
            {contactData.heading}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-content-primary tracking-tight font-sans">
            {contactData.subheading}
          </h2>
          <p className="text-base sm:text-lg text-content-secondary font-sans leading-relaxed pt-1">
            {contactData.description}
          </p>
        </div>

        {/* Primary Conversational Action Buttons */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mb-8">
          
          {/* Email Me Button with direct mailto */}
          <a
            href={`mailto:${contactData.email}`}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-accent-green text-bg font-sans font-semibold text-sm hover:shadow-green-subtle transition-all active:scale-95 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Email Me</span>
          </a>

          {/* Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-surface-button text-content-secondary border border-border-button hover:border-border hover:text-content-primary text-sm font-sans transition-all active:scale-95 cursor-pointer"
            title="Copy email address"
          >
            {copiedEmail ? (
              <>
                <Check className="w-4 h-4 text-accent-green" />
                <span className="text-accent-green text-xs font-mono">Copied email!</span>
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
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface-button text-content-primary border border-border-button hover:border-accent-cyan/60 hover:text-white font-sans text-sm font-medium transition-all active:scale-95"
          >
            <Linkedin className="w-4 h-4 text-accent-cyan" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-content-muted" />
          </a>

          {/* GitHub Button */}
          <a
            href={contactData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface-button text-content-primary border border-border-button hover:border-border font-sans text-sm font-medium transition-all active:scale-95"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-content-muted" />
          </a>

        </div>

        {/* Quick Note Toggle & Form */}
        <div className="pt-4 border-t border-border-subtle/80">
          {!showQuickForm ? (
            <button
              onClick={() => setShowQuickForm(true)}
              className="text-xs font-mono text-content-muted hover:text-accent-green transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Or leave a quick message here directly →</span>
            </button>
          ) : (
            <form onSubmit={handleFormSubmit} className="mt-4 space-y-4 max-w-lg rounded-xl bg-surface border border-border p-6 text-left">
              <div className="flex items-center justify-between pb-2 border-b border-border-subtle">
                <span className="text-xs font-mono text-content-muted">Quick Dispatch</span>
                <button
                  type="button"
                  onClick={() => setShowQuickForm(false)}
                  className="text-xs font-mono text-content-muted hover:text-content-primary"
                >
                  [Close]
                </button>
              </div>

              <div>
                <label className="block text-xs font-mono text-content-secondary mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Alex"
                  className="w-full px-3 py-2 rounded-lg bg-bg border border-border text-sm text-content-primary focus:outline-none focus:border-accent-green"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-content-secondary mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="alex@example.com"
                  className="w-full px-3 py-2 rounded-lg bg-bg border border-border text-sm text-content-primary focus:outline-none focus:border-accent-green"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-content-secondary mb-1">Message</label>
                <textarea
                  required
                  rows={3}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Hey Karan, I'd love to chat about..."
                  className="w-full px-3 py-2 rounded-lg bg-bg border border-border text-sm text-content-primary focus:outline-none focus:border-accent-green resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-accent-green text-bg font-sans font-semibold text-xs hover:shadow-green-subtle transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
                {sent && (
                  <span className="text-xs font-mono text-accent-green">Opening mail client...</span>
                )}
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
