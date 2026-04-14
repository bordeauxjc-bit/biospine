import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{mdx,md}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        brand: {
          green: '#10B981',
          'green-dark': '#059669',
          'green-light': '#34D399',
          ink: '#0A0A0A',
          'ink-soft': '#171717',
          slate: '#1E293B',
          cream: '#FAFAF9',
          gold: '#D4A843',
        },
      },
      boxShadow: {
        glow: '0 0 32px rgba(16, 185, 129, 0.35), 0 8px 24px rgba(16, 185, 129, 0.18)',
        'glow-lg': '0 0 48px rgba(16, 185, 129, 0.45), 0 12px 36px rgba(16, 185, 129, 0.22)',
      },
      backgroundImage: {
        'speckle':
          'radial-gradient(rgba(16, 185, 129, 0.08) 1px, transparent 1px)',
        'brand-gradient':
          'linear-gradient(135deg, #34D399 0%, #10B981 50%, #059669 100%)',
      },
      fontFamily: {
        // Display / headings. Plus Jakarta Sans (bold, modern)
        display: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        // Body. DM Sans (highly readable)
        sans: ['var(--font-dm-sans)', 'var(--font-jakarta)', 'system-ui', 'sans-serif'],
        // Keep 'serif' alias pointing to display so existing classes don't break
        serif: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '70ch',
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
