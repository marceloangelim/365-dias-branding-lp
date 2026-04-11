/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#E8572A',
          light:   '#FFF3EE',
          muted:   '#FDDCC8',
          dark:    '#C44820',
        },
        brand: {
          cyan:   '#00ccdf',
          purple: '#d387fe',
          navy:   '#0D0D0D',
          dark:   '#111111',
          ink:    '#0F0F0F',
        },
        surface: {
          white: '#ffffff',
          warm:  '#FAF8F5',
          cream: '#F4EDE4',
          card:  '#F0E8DF',
          dark:  '#111111',
          darkcard: '#1A1A1A',
        },
        ink: {
          DEFAULT: '#0F0F0F',
          muted:   '#3D3D3D',
          faint:   '#737373',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-accent':   'linear-gradient(135deg, #E8572A 0%, #F4956A 100%)',
        'gradient-accent-h': 'linear-gradient(90deg, #E8572A 0%, #F4956A 100%)',
        'gradient-hero':     'linear-gradient(160deg, #FFFFFF 0%, #FAF3EE 100%)',
        'gradient-dark':     'linear-gradient(160deg, #111111 0%, #1C1410 100%)',
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
        '8xl': ['6rem',   { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
};
