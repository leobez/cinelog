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
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
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
    
    // text-color-300

    // For themes
    'hover:bg-slate-900', 'hover:bg-slate-400','hover:text-slate-500','text-slate-300','border-slate-900','border-slate-700','hover:bg-slate-950', 'bg-slate-950','bg-slate-900','bg-slate-800','bg-slate-700','bg-slate-600','bg-slate-500','bg-slate-400','bg-slate-300',

    'hover:bg-stone-900', 'hover:bg-stone-400','hover:text-stone-500','text-stone-300','border-stone-900','border-stone-700','hover:bg-stone-950', 'bg-stone-950','bg-stone-900','bg-stone-800','bg-stone-700','bg-stone-600','bg-stone-500','bg-stone-400','bg-stone-300',

    'hover:bg-red-900', 'hover:bg-red-400','hover:text-red-500','text-red-300','border-red-900','border-red-700','hover:bg-red-950', 'bg-red-950','bg-red-900','bg-red-800','bg-red-700','bg-red-600','bg-red-500','bg-red-400','bg-red-300',

    'hover:bg-amber-900','hover:bg-amber-400','hover:text-amber-500','text-amber-300','border-amber-900','border-amber-700','hover:bg-amber-950', 'bg-amber-950','bg-amber-900','bg-amber-800','bg-amber-700','bg-amber-600','bg-amber-500','bg-amber-400','bg-amber-300',

    'hover:bg-yellow-900','hover:bg-yellow-400','hover:text-yellow-500','text-yellow-300','border-yellow-900','border-yellow-700','hover:bg-yellow-950', 'bg-yellow-950','bg-yellow-900','bg-yellow-800','bg-yellow-700','bg-yellow-600','bg-yellow-500','bg-yellow-400','bg-yellow-300',

    'hover:bg-lime-900','hover:bg-lime-400','hover:text-lime-500','text-lime-300','border-lime-900','border-lime-700','hover:bg-lime-950', 'bg-lime-950','bg-lime-900','bg-lime-800','bg-lime-700','bg-lime-600','bg-lime-500','bg-lime-400','bg-lime-300',

    'hover:bg-emerald-900','hover:bg-emerald-400','hover:text-emerald-500','text-emerald-300','border-emerald-900','border-emerald-700','hover:bg-emerald-950', 'bg-emerald-950','bg-emerald-900','bg-emerald-800','bg-emerald-700','bg-emerald-600','bg-emerald-500','bg-emerald-400','bg-emerald-300',

    'hover:bg-teal-900','hover:bg-teal-400','hover:text-teal-500','text-teal-300','border-teal-900','border-teal-700','hover:bg-teal-950', 'bg-teal-950','bg-teal-900','bg-teal-800','bg-teal-700','bg-teal-600','bg-teal-500','bg-teal-400','bg-teal-300',

    'hover:bg-cyan-900', 'hover:bg-cyan-400','hover:text-cyan-500','text-cyan-300','border-cyan-900','border-cyan-700','hover:bg-cyan-950', 'bg-cyan-950','bg-cyan-900','bg-cyan-800','bg-cyan-700','bg-cyan-600','bg-cyan-500','bg-cyan-400','bg-cyan-300',

    'hover:bg-sky-900', 'hover:bg-sky-400','hover:text-sky-500','text-sky-300','border-sky-900','border-sky-700','hover:bg-sky-950', 'bg-sky-950','bg-sky-900','bg-sky-800','bg-sky-700','bg-sky-600','bg-sky-500','bg-sky-400','bg-sky-300',
    
    'hover:bg-indigo-900', 'hover:bg-indigo-400','hover:text-indigo-500','text-indigo-300','border-indigo-900','border-indigo-700','hover:bg-indigo-950', 'bg-indigo-950','bg-indigo-900','bg-indigo-800','bg-indigo-700','bg-indigo-600','bg-indigo-500','bg-indigo-400','bg-indigo-300',

    'hover:bg-violet-400', 'hover:bg-violet-400','hover:text-violet-500','text-violet-300','border-violet-900','border-violet-700','hover:bg-violet-950', 'bg-violet-950','bg-violet-900','bg-violet-800','bg-violet-700','bg-violet-600','bg-violet-500','bg-violet-400','bg-violet-300',

    'hover:bg-fuchsia-900', 'hover:bg-fuchsia-400','hover:text-fuchsia-500','text-fuchsia-300','border-fuchsia-900','border-fuchsia-700','hover:bg-fuchsia-950', 'bg-fuchsia-950','bg-fuchsia-900','bg-fuchsia-800','bg-fuchsia-700','bg-fuchsia-600','bg-fuchsia-500','bg-fuchsia-400','bg-fuchsia-300',

    'hover:bg-pink-900', 'hover:bg-pink-400','hover:text-pink-500','text-pink-300','border-pink-900','border-pink-700','hover:bg-pink-950', 'bg-pink-950','bg-pink-900','bg-pink-800','bg-pink-700','bg-pink-600','bg-pink-500','bg-pink-400','bg-pink-300',

    'hover:bg-rose-900', 'hover:bg-rose-400','hover:text-rose-500','text-rose-300','border-rose-900','border-rose-700','hover:bg-rose-950', 'bg-rose-950','bg-rose-900','bg-rose-800','bg-rose-700','bg-rose-600','bg-rose-500','bg-rose-400','bg-rose-300',
  ],
  plugins: [require("daisyui"), require('tailwindcss-animate'), require('tailwind-scrollbar')],
}