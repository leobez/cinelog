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
    
    // For feedback component
    'bg-red-800',
    'bg-blue-800',
    'bg-green-800',
    'bg-orange-800',
    'bg-red-600',
    'bg-blue-600',
    'bg-green-600',
    'bg-orange-600',

    // For themes
    'bg-slate-950','bg-slate-900','bg-slate-800','bg-slate-700','bg-slate-600','bg-slate-500','bg-slate-400','bg-slate-300',
    'bg-stone-950','bg-stone-900','bg-stone-800','bg-stone-700','bg-stone-600','bg-stone-500','bg-stone-400','bg-stone-300',
    'bg-amber-950','bg-amber-900','bg-amber-800','bg-amber-700','bg-amber-600','bg-amber-500','bg-amber-400','bg-amber-300',
    'bg-lime-950','bg-lime-900','bg-lime-800','bg-lime-700','bg-lime-600','bg-lime-500','bg-lime-400','bg-lime-300',
    'bg-emerald-950','bg-emerald-900','bg-emerald-800','bg-emerald-700','bg-emerald-600','bg-emerald-500','bg-emerald-400','bg-emerald-300',
    'bg-teal-950','bg-teal-900','bg-teal-800','bg-teal-700','bg-teal-600','bg-teal-500','bg-teal-400','bg-teal-300',
    'bg-cyan-950','bg-cyan-900','bg-cyan-800','bg-cyan-700','bg-cyan-600','bg-cyan-500','bg-cyan-400','bg-cyan-300',
    'bg-sky-950','bg-sky-900','bg-sky-800','bg-sky-700','bg-sky-600','bg-sky-500','bg-sky-400','bg-sky-300',
    'bg-indigo-950','bg-indigo-900','bg-indigo-800','bg-indigo-700','bg-indigo-600','bg-indigo-500','bg-indigo-400','bg-indigo-300',
    'bg-violet-950','bg-violet-900','bg-violet-800','bg-violet-700','bg-violet-600','bg-violet-500','bg-violet-400','bg-violet-300',
    'bg-fuchsia-950','bg-fuchsia-900','bg-fuchsia-800','bg-fuchsia-700','bg-fuchsia-600','bg-fuchsia-500','bg-fuchsia-400','bg-fuchsia-300',
    'bg-pink-950','bg-pink-900','bg-pink-800','bg-pink-700','bg-pink-600','bg-pink-500','bg-pink-400','bg-pink-300',
    'bg-rose-950','bg-rose-900','bg-rose-800','bg-rose-700','bg-rose-600','bg-rose-500','bg-rose-400','bg-rose-300',
  ],
  plugins: [require("daisyui"), require('tailwindcss-animate'), require('tailwind-scrollbar')],
}