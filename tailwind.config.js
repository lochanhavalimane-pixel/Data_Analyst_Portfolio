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
        cream: '#F4F2EB',
        'cream-card': '#FAF9F6',
        ink: '#161616',
        'ink-muted': '#404040',
        primary: '#DE3B27',
        'primary-hover': '#C72F1C',
        rule: 'rgba(22, 22, 22, 0.14)',
        'rule-dark': 'rgba(244, 242, 235, 0.16)',
        muted: '#6B6B67',
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
