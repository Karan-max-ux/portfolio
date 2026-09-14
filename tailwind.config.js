/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: {
          DEFAULT: '#F5F2EC',
          light: '#FAF8F5',
          dark: '#ECE7DE',
          deep: '#E2DCD1',
        },
        ink: {
          DEFAULT: '#1A1816',
          muted: '#57534E',
          soft: '#78716C',
          subtle: '#A8A29E',
        },
        burnt: {
          DEFAULT: '#C4622D',
          hover: '#B35524',
          light: '#F8ECE4',
        },
        hairline: {
          DEFAULT: '#DDD8CE',
          subtle: '#EAE6DD',
          strong: '#C9C3B6',
        }
      },
      fontFamily: {
        serif: ['Newsreader', 'Fraunces', 'Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
