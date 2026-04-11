/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // ── Accent laranja (identidade do produto)
        accent: {
          DEFAULT: '#E8572A',
          light:   '#FFF2ED',
          dark:    '#C44820',
        },
        // ── Cores da marca Branding Lab (usar só em elementos de marca: footer, logo)
        brand: {
          cyan:   '#00ccdf',
          purple: '#d387fe',
          navy:   '#0f1722',
          dark:   '#32373c',
          ink:    '#1a1a2e',
        },
        // ── Superfícies
        surface: {
          white: '#ffffff',
          warm:  '#FAF8F6',
          card:  '#F4F1EE',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #E8572A 0%, #F4956A 100%)',
        'gradient-accent-h': 'linear-gradient(90deg, #E8572A 0%, #F4956A 100%)',
        'gradient-brand':  'linear-gradient(135deg, #00ccdf 0%, #d387fe 100%)',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'float':   'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
};
