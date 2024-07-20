/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color01: {
          DEFAULT: 'var(--color01)'
        },
        color02: {
          DEFAULT: 'var(--color02)'
        },
        color03: {
          DEFAULT: 'var(--color03)'
        },
        color04: {
          DEFAULT: 'var(--color04)'
        },
        color05: {
          DEFAULT: 'var(--color05)'
        },
        color06: {
          DEFAULT: 'var(--color06)'
        },
        transitioncolor: {
          DEFAULT: 'var(--transitioncolor)'
        },
      }
    }

  },
  safelist: [
    'border-red-400',
    'border-blue-400',
    'border-green-400',
    'border-orange-400',
    'text-red-400',
    'text-blue-400',
    'text-green-400',
    'text-orange-400',
  ],
  plugins: [require("daisyui"), require('tailwindcss-animate'), require('tailwind-scrollbar')],
}