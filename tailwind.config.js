/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space:    '#0F1117',
        surface:  '#1A1D27',
        elevated: '#2E3244',
        teal:     '#5FBFAD',
        muted:    '#A8B2C8',
        headline: '#E8EDF5',
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        body:    ['Inter', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-in':    'fadeIn 0.5s ease forwards',
        'slide-up':   'slideUp 0.5s ease forwards',
        'fade-up':    'fadeUp 0.65s ease forwards',
        'scale-in':   'scaleIn 0.5s ease forwards',
        'panel-in':   'panelIn 0.55s ease forwards',
        'connector':  'connector 0.8s ease forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.96)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
        panelIn: {
          from: { opacity: '0', transform: 'translateY(16px) scale(0.99)' },
          to:   { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        connector: {
          from: { width: '0%' },
          to:   { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}
