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
        // Dark Neutrals (80%)
        canvas: {
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
          subtle: '#16232D',
          hover: '#2A3C49',
        },
        // Accents (15% Green, 4% Cyan, 1% Purple)
        accent: {
          green: '#00D6A3',  // Signature brand color
          cyan: '#22C7D8',   // Secondary accent
          purple: '#9B8AFB', // Rare highlight
        },
        // Text
        txt: {
          primary: '#F1F5F3',
          secondary: '#A6B3BA',
          muted: '#62717B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'green-glow': '0 0 24px -4px rgba(0, 214, 163, 0.25)',
        'cyan-glow': '0 0 24px -4px rgba(34, 199, 216, 0.2)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
