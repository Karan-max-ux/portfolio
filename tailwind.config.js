/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Base dark neutrals (approx 80%)
        bg: {
          DEFAULT: '#080C10',
          subtle: '#0E141B',
        },
        surface: {
          DEFAULT: '#121A22',
          button: '#101820',
          elevated: '#16222C',
        },
        border: {
          DEFAULT: '#1D2A33',
          button: '#263640',
          subtle: '#152028',
          accent: 'rgba(0, 214, 163, 0.25)',
        },
        // Accents: Signature Green (~15%), Cyan (~4%), Purple (~1%)
        accent: {
          green: '#00D6A3', // Personal brand signature
          cyan: '#22C7D8',  // Secondary accent
          purple: '#9B8AFB', // Rare highlight
        },
        // Text Colors
        content: {
          primary: '#F1F5F3',
          secondary: '#A6B3BA',
          muted: '#62717B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at 50% 15%, rgba(0, 214, 163, 0.06) 0%, transparent 65%)',
        'subtle-grid': 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
      },
      boxShadow: {
        'green-subtle': '0 0 20px -5px rgba(0, 214, 163, 0.15)',
        'card-subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.4)',
      },
      transitionTimingFunction: {
        'subtle': 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      }
    },
  },
  plugins: [],
}
