/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        sans: ['Archivo', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        cream: 'var(--color-cream)',
        'cream-card': 'var(--color-card-bg)',
        ink: 'var(--color-ink)',
        'ink-muted': 'var(--color-ink)',
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-accent)',
        accent: 'var(--color-accent)',
        'card-bg': 'var(--color-card-bg)',
        rule: 'var(--color-rule)',
        'rule-dark': 'rgba(238, 244, 245, 0.16)',
        muted: '#647782',
      },
      letterSpacing: {
        eyebrow: '0.18em',
      },
      borderRadius: {
        DEFAULT: '0px',
      }
    },
  },
  plugins: [],
}
