import React from 'react';
import { X, Info } from 'lucide-react';

export default function PlaceholderModal({ isOpen, onClose, title, message, fieldName }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-md p-6 bg-surface border border-border rounded-xl shadow-2xl text-content-secondary"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-content-muted hover:text-content-primary rounded-lg hover:bg-bg transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-lg bg-accent-green/10 border border-accent-green/20 text-accent-green">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-content-primary font-sans">{title || "Placeholder Item"}</h3>
            <span className="text-xs text-content-muted font-mono">{fieldName || "Configurable Field"}</span>
          </div>
        </div>

        <p className="text-sm text-content-secondary mb-6 leading-relaxed font-sans">
          {message || "This link or asset is currently set as a placeholder. You can link your live repository, hosted URL, or custom image directly in portfolioData.js."}
        </p>

        <div className="p-3 bg-bg border border-border-subtle rounded-lg mb-6">
          <p className="text-xs text-content-muted font-mono">
            Config File: <span className="text-accent-green">src/data/portfolioData.js</span>
          </p>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-sans font-medium text-content-primary bg-surface-button hover:bg-surface border border-border-button rounded-lg transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
