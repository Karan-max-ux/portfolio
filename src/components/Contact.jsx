import React, { useState } from 'react';
import { contactInfo, personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  AlertCircle,
  MessageSquare,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export default function Contact({ onOpenPlaceholder }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please provide a subject';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate successful dispatch & prepare mailto link
      const mailtoLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      setIsSubmitted(true);
      
      // Open mail client as graceful fallback
      window.location.href = mailtoLink;

      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>08. GET_IN_TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {contactInfo.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-3 leading-relaxed">
            {contactInfo.subheading}
          </p>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Email Address
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-white truncate">
                    {contactInfo.email}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-dark-950 text-xs font-semibold shadow-md shadow-emerald-500/20 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Direct Email</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={contactInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 flex items-center justify-between shadow-lg group block"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    LinkedIn Network
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-white group-hover:text-sky-300 transition-colors">
                    karan-singh-465470337
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* GitHub Card */}
            {contactInfo.githubUrl ? (
              <a
                href={contactInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 flex items-center justify-between shadow-lg group block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      GitHub Profile
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {contactInfo.githubDisplay || contactInfo.githubUrl}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ) : (
              <div 
                onClick={() => onOpenPlaceholder({
                  title: "GitHub Profile",
                  fieldName: "contactInfo.githubPlaceholder",
                  message: "Configure your active GitHub profile URL in src/data/portfolioData.js."
                })}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 flex items-center justify-between shadow-lg cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      GitHub Profile
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {contactInfo.githubPlaceholder}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400">
                  Configurable
                </span>
              </div>
            )}

            {/* Location Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex items-center gap-4 shadow-lg">
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Current Location
                </span>
                <p className="text-sm sm:text-base font-semibold text-white">
                  {contactInfo.location}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl relative">
              
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the details below to initiate direct communication regarding internships, projects, or full-time opportunities.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Prepared!</h4>
                  <p className="text-sm text-slate-300">
                    Your default email client has been launched with your message pre-filled to <strong className="text-emerald-400">{contactInfo.email}</strong>.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-4 py-2 text-xs font-semibold bg-emerald-500 text-dark-950 rounded-xl"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Name <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-2.5 rounded-xl bg-dark-950/90 border text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors ${
                          errors.name 
                            ? 'border-rose-500/80 focus:border-rose-500' 
                            : 'border-slate-800 focus:border-emerald-500/80'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Email <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-dark-950/90 border text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors ${
                          errors.email 
                            ? 'border-rose-500/80 focus:border-rose-500' 
                            : 'border-slate-800 focus:border-emerald-500/80'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Subject <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Full-Stack Developer Internship Opportunity"
                      className={`w-full px-4 py-2.5 rounded-xl bg-dark-950/90 border text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors ${
                        errors.subject 
                          ? 'border-rose-500/80 focus:border-rose-500' 
                          : 'border-slate-800 focus:border-emerald-500/80'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Message <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your project details or opportunity description here..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-dark-950/90 border text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors resize-none ${
                        errors.message 
                          ? 'border-rose-500/80 focus:border-rose-500' 
                          : 'border-slate-800 focus:border-emerald-500/80'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-emerald-500 hover:bg-emerald-400 text-dark-950 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/40 transition-all active:scale-[0.99] cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
