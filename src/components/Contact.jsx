import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUpRight, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 border-b border-hairline">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-burnt">07</span>
          <span className="h-[1px] w-8 bg-hairline" />
          <span className="text-xs font-mono uppercase tracking-wider text-ink-soft">Contact</span>
        </div>

        {/* Asymmetric Split: Large Typography Left, Flat Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Large Serif Headline, Email & Plain Links */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-ink font-normal tracking-tight leading-none">
              Let's talk.
            </h2>

            <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-normal max-w-lg">
              I'm always looking to learn, build, and collaborate on projects that challenge me to grow as a developer.
            </p>

            {/* Large Clickable Email */}
            <div className="pt-4">
              <span className="text-xs font-mono uppercase tracking-wider text-ink-soft block mb-2">
                Direct Email
              </span>
              <div className="flex flex-wrap items-baseline gap-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-serif text-2xl sm:text-3xl text-ink hover:text-burnt transition-colors border-b border-hairline hover:border-burnt pb-1"
                >
                  {personalInfo.email}
                </a>
                <button
                  onClick={handleCopy}
                  className="text-xs font-mono text-ink-soft hover:text-burnt transition-colors underline"
                  title="Copy to clipboard"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>

            {/* Plain Text Links Below (No Icon Buttons) */}
            <div className="pt-8 border-t border-hairline/80 flex items-center gap-8 text-xs font-mono text-ink-soft">
              <span className="text-ink-subtle">Network:</span>
              
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-burnt transition-colors flex items-center gap-1 border-b border-transparent hover:border-burnt pb-0.5"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <span className="text-hairline">/</span>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-burnt transition-colors flex items-center gap-1 border-b border-transparent hover:border-burnt pb-0.5"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Flat Minimalist Form (No Drop Shadows, 1px Hairline Borders) */}
          <div className="lg:col-span-6 bg-bone-dark/40 border border-hairline p-8 sm:p-10">
            <h3 className="font-serif text-2xl text-ink font-normal mb-2">
              Send a note
            </h3>
            <p className="text-xs font-mono text-ink-soft mb-8">
              Replies dispatched to your email client.
            </p>

            {submitted ? (
              <div className="p-6 bg-bone border border-hairline text-center space-y-2">
                <p className="font-serif text-xl text-ink font-normal">Thank you.</p>
                <p className="text-xs font-mono text-ink-muted">
                  Your mail client has been opened with your pre-filled inquiry.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-mono text-burnt underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-ink-soft mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-bone border border-hairline px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-burnt transition-colors rounded-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-ink-soft mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-bone border border-hairline px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-burnt transition-colors rounded-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-ink-soft mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-bone border border-hairline px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-burnt transition-colors rounded-none resize-none"
                    placeholder="Project details or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-ink hover:bg-burnt text-bone text-xs font-medium uppercase tracking-wider transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
