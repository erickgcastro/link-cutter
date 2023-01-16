const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      background: '#e2e8f0',
      'gray-100': '#f1f5f9',
      'gray-300': '#cbd5e1',
      'gray-700': '#334155',
      // 'gray-400': '#94a3b8',
      'gray-500': '#64748b',
      // 'gray-600': '#475569',
      // 'gray-800': '#1e293b',
      'indigo-600': '#4f46e5',
      'green-600': '#16a34a',
      white: '#fff',
    },
    extend: {
      fontFamily: {
        logo: ['var(--rubik-font)', 'Rubik Spray Paint ', ...fontFamily.sans],
      },
      rotate: {
        15: '15deg',
      },
      spacing: {
        600: '37.5rem',
      },
    },
  },
  plugins: [],
};
