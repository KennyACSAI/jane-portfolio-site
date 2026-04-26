import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0a0a',
          900: '#111111',
          800: '#1a1a1a',
          700: '#2a2a2a',
          600: '#3d3d3d',
          500: '#5c5c5c',
          400: '#8a8a8a',
          300: '#b5b5b5',
          200: '#d6d6d6',
          100: '#ececec',
          50:  '#f6f6f6',
          25:  '#fbfbfb',
        },
        paper: '#ffffff',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter2: '-0.025em',
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 11vw, 11rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(2.5rem, 7vw, 6.5rem)',  { lineHeight: '1.0',  letterSpacing: '-0.035em' }],
        'display-md': ['clamp(1.75rem, 4vw, 3rem)',  { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        ticker: {
          '0%':   { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        ticker: 'ticker 25s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
