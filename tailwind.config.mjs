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
          muted:   '#FDDCC8',
          dark:    '#C44820',
        },
        // ── Cores da marca Branding Lab (footer, logo)
        brand: {
          cyan:   '#00ccdf',
          purple: '#d387fe',
          navy:   '#0f1722',
          dark:   '#32373c',
          ink:    '#1C1917',   // v2: stone-900 — mais quente e elegante
        },
        // ── Superfícies v2 — paleta editorial mais rica
        surface: {
          white: '#ffffff',
          warm:  '#FAF7F4',   // v2: levemente mais creme
          cream: '#F5EFE8',   // v2: novo — cream mais profundo
          card:  '#F0EAE2',   // v2: novo — card cream
          dark:  '#1C1917',   // v2: dark para seções de contraste
        },
        // ── Tons de texto
        ink: {
          DEFAULT: '#1C1917',   // stone-900
          muted:   '#44403C',   // stone-700
          faint:   '#78716C',   // stone-500
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],  // v2: elegante serif editorial
        body:    ['Inter', 'sans-serif'],
        sans:    ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-accent':    'linear-gradient(135deg, #E8572A 0%, #F4956A 100%)',
        'gradient-accent-h':  'linear-gradient(90deg, #E8572A 0%, #F4956A 100%)',
        'gradient-brand':     'linear-gradient(135deg, #00ccdf 0%, #d387fe 100%)',
        'gradient-warm':      'linear-gradient(180deg, #FAF7F4 0%, #F5EFE8 100%)',
        'gradient-dark':      'linear-gradient(135deg, #1C1917 0%, #2C2420 100%)',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'float':   'float 6s ease-in-out infinite',
        'fadeUp':  'fadeUp 0.7s ease-out forwards',
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
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};
