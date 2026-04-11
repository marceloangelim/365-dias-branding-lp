/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#00ccdf',
          purple: '#d387fe',
          navy: '#0f1722',
          dark: '#32373c',
          ink: '#1a1a2e',
        },
        surface: {
          white: '#ffffff',
          off: '#f8f6f3',
          card: '#f2f0ed',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #00ccdf 0%, #d387fe 100%)',
        'gradient-brand-h': 'linear-gradient(90deg, #00ccdf 0%, #d387fe 100%)',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'ink-spread': 'inkSpread 0.8s ease-out forwards',
        'count-up': 'countUp 1s ease-out forwards',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        inkSpread: {
          '0%': { width: '0%', opacity: '0' },
          '100%': { width: '100%', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
