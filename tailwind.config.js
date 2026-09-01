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
        // Deep Black Canvas & Neutral Surfaces
        black: '#000000',
        canvas: {
          DEFAULT: '#000000',
          subtle: '#080808',
        },
        surface: {
          DEFAULT: '#0D0D0D',
          card: '#111111',
          button: '#141414',
          elevated: '#171717',
        },
        // Accents
        accent: {
          green: '#00D6A3',  // Signature brand color
          cyan: '#22C7D8',   // Secondary accent
          purple: '#9B8AFB', // Rare highlight
        },
        // High-contrast clean typography
        txt: {
          primary: '#FFFFFF',
          secondary: '#A1A1A1',
          muted: '#666666',
        }
      },
      borderColor: {
        DEFAULT: 'rgba(255, 255, 255, 0.1)',
        subtle: 'rgba(255, 255, 255, 0.06)',
        strong: 'rgba(255, 255, 255, 0.18)',
        hover: 'rgba(255, 255, 255, 0.3)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'green-glow': '0 0 24px -4px rgba(0, 214, 163, 0.25)',
        'white-border': '0 0 0 1px rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}
