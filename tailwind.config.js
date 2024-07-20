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
    'bg-red-800',
    'bg-blue-800',
    'bg-green-800',
    'bg-orange-800',
    'bg-red-600',
    'bg-blue-600',
    'bg-green-600',
    'bg-orange-600',
    'text-red-800',
    'text-blue-800',
    'text-green-800',
    'text-orange-800',
  ],
  plugins: [require("daisyui"), require('tailwindcss-animate'), require('tailwind-scrollbar')],
}