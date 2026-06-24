/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Espresso & Rose Copper System ─────────────────────
        space:      '#161210',   // Deep warm espresso background
        surface:    '#201A18',   // Terracotta sand card surface
        elevated:   '#2A221E',   // Elevated card / hover surface
        border:     '#2D2522',   // Earthy borders and dividers
        headline:   '#FAF8F5',   // Cream headlines
        muted:      '#C5BAB3',   // Almond gray body text
        dim:        '#8E8077',   // Muted helper text
        terracotta: '#D69A7A',   // Rose copper / primary accent
        'terracotta-dim': '#A37257', // Pressed / deep accent state
        'terracotta-glow': 'rgba(214, 154, 122, 0.15)',
        sage:       '#9EA99A',   // Muted olive sage / secondary accent
        'sage-dim': '#768172',   // Pressed sage state
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        body:    ['Inter', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-in':   'fadeIn 0.5s ease forwards',
        'slide-up':  'slideUp 0.5s ease forwards',
        'fade-up':   'fadeUp 0.65s ease forwards',
        'scale-in':  'scaleIn 0.5s ease forwards',
        'panel-in':  'panelIn 0.55s ease forwards',
        'connector': 'connector 0.8s ease forwards',
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
      boxShadow: {
        'terracotta-glow': '0 0 24px rgba(214, 154, 122, 0.12)',
        'card':       '0 2px 16px rgba(0, 0, 0, 0.28)',
        'panel':      '0 24px 80px rgba(0, 0, 0, 0.40)',
      },
    },
  },
  plugins: [],
}