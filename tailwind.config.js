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
    'border-red-700',
    'border-blue-700',
    'border-green-700',
    'border-orange-700',
    'text-red-700',
    'text-blue-700',
    'text-green-700',
    'text-orange-700',
  ],
  plugins: [require("daisyui"), require('tailwindcss-animate'), require('tailwind-scrollbar')],
}