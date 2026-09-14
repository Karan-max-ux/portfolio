import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-12 bg-bone">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-baseline justify-between gap-6 text-xs font-mono text-ink-soft">
          
          <div>
            <span className="font-serif text-base text-ink font-normal mr-2">
              {personalInfo.name}
            </span>
            <span>— 2026</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-burnt transition-colors"
            >
              GitHub
            </a>

            <span className="text-hairline">/</span>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-burnt transition-colors"
            >
              LinkedIn
            </a>

            <span className="text-hairline">/</span>

            <a
              href={`mailto:${personalInfo.email}`}
              className="text-ink hover:text-burnt transition-colors"
            >
              Email
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
