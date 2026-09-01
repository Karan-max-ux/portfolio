import React from 'react';
import { X, Info } from 'lucide-react';

export default function PlaceholderModal({ isOpen, onClose, title, message, fieldName }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-md p-6 bg-[#0D0D0D] border border-white/20 rounded-xl shadow-2xl text-[#A1A1A1]"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[#888888] hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-lg bg-[#00D6A3]/10 border border-[#00D6A3]/25 text-[#00D6A3]">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-white font-sans">{title || "Placeholder Item"}</h3>
            <span className="text-xs text-[#888888] font-mono">{fieldName || "Configurable Field"}</span>
          </div>
        </div>

        <p className="text-sm text-[#A1A1A1] mb-6 leading-relaxed font-sans">
          {message || "This link or asset is currently set as a placeholder. You can link your live repository, hosted URL, or custom image directly in portfolioData.js."}
        </p>

        <div className="p-3 bg-black border border-white/10 rounded-lg mb-6">
          <p className="text-xs text-[#888888] font-mono">
            Config File: <span className="text-[#00D6A3]">src/data/portfolioData.js</span>
          </p>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-sans font-medium text-white bg-[#141414] hover:bg-[#1E1E1E] border border-white/15 rounded-lg transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
