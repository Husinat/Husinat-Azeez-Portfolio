/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Warm Obsidian System ──────────────────────────────
        space:    '#141210',   // Deep background
        surface:  '#1E1B18',   // Card / navbar surface
        elevated: '#2C2824',   // Elevated card / hover surface
        border:   '#332E2A',   // Borders and dividers
        headline: '#F0EBE3',   // Primary headlines
        muted:    '#A89F94',   // Body text / secondary text
        dim:      '#6B6259',   // Tertiary / placeholder text

        // ── Accents ───────────────────────────────────────────
        amber:    '#C8956C',   // Primary accent — terracotta/amber
        'amber-dim':  '#8A5A38',   // Pressed / deep amber state
        'amber-glow': '#D4A882',   // Hover / lighter amber state
        sage:     '#7EB8A4',   // Secondary accent — muted sage
        'sage-dim':   '#4A8A78',   // Deep sage for borders
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
        'amber-glow': '0 0 24px rgba(200, 149, 108, 0.12)',
        'card':       '0 2px 16px rgba(0, 0, 0, 0.28)',
        'panel':      '0 24px 80px rgba(0, 0, 0, 0.40)',
      },
    },
  },
  plugins: [],
}