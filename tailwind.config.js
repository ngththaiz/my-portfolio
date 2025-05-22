/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e6c640',
          dark: '#d4b638',
        },
        heading: {
          DEFAULT: '#333333',
          dark: '#ffffff',
        },
        body: {
          DEFAULT: '#666666',
          dark: '#a0a0a0',
        },
        background: {
          light: '#ffffff',
          dark: '#121212',
          gray: '#f5f5f5',
          darkGray: '#1a1a1a',
        },
      },
      fontFamily: {
        sans: ['Hind', 'Helvetica', 'sans-serif'],
        heading: ['Hind', 'Helvetica', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'bounce': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
    },
  },
  plugins: [],
} 