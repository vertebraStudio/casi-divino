import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        vino: {
          50: '#fdf5f7',
          100: '#f8e4ea',
          200: '#f0c9d6',
          500: '#7b1e3a', // burdeos principal
          600: '#641830',
          800: '#3a0d1c',
          900: '#200711',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Lato', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
};



