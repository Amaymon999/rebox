import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF7A1B',
          navy: '#192134',
          cream: '#FFF5E3',
          yellow: '#FFD752'
        }
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 8px 24px rgba(25, 33, 52, 0.12)'
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite'
      }
    }
  },
  plugins: []
};

export default config;
