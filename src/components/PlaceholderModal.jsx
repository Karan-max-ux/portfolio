import React from 'react';
import { X, ExternalLink, Info } from 'lucide-react';

export default function PlaceholderModal({ isOpen, onClose, title, message, fieldName }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-md p-6 bg-dark-900 border border-slate-700/80 rounded-2xl shadow-2xl text-slate-200"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{title || "Placeholder Item"}</h3>
            <span className="text-xs text-slate-400 font-mono">{fieldName || "Configurable Field"}</span>
          </div>
        </div>

        <p className="text-sm text-slate-300 mb-6 leading-relaxed">
          {message || "This link or asset is currently set as a placeholder. You can easily link your live repository, hosted URL, or certificate document in the portfolio data file."}
        </p>

        <div className="p-3 bg-dark-950/80 border border-slate-800 rounded-xl mb-6">
          <p className="text-xs text-slate-400 font-mono">
            File: <span className="text-emerald-400">src/data/portfolioData.js</span>
          </p>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
