import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-barlow)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        accent: '#E8380D',
        'accent-dark': '#A8260A',
        'hero-bg': '#0B1929',
        'card-dark': '#111827',
        'card-darker': '#1a2332',
      },
    },
  },
  plugins: [],
}

export default config
