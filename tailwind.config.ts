import type { Config } from 'tailwindcss';

/**
 * Design tokens for BioSpine Health and Wellness.
 *
 * Colors support the BioSpine living-spine mark: clinical greens on warm
 * paper neutrals, darkened where text and controls need WCAG AA contrast.
 */
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
        DEFAULT: '1.25rem',
        sm: '2rem',
        lg: '2.5rem',
      },
      screens: {
        '2xl': '1240px',
      },
    },
    extend: {
      colors: {
        brand: {
          // Leaf green, pulled from the logo mark and darkened for contrast.
          green: '#2B8535',
          'green-dark': '#1F6528',
          'green-light': '#6BBF6E',
          'green-pale': '#E9F1E7',
          // The untouched logo green. Use on dark grounds only.
          leaf: '#34A738',
          // Steel blue from the "BioSpine" wordmark.
          steel: '#4A6E8C',
          'steel-dark': '#3D5F7C',
          'steel-light': '#93B2CB',
          // Warm near-black with a green cast, not pure #000.
          ink: '#101614',
          'ink-soft': '#1A2320',
          slate: '#2C3A35',
          // Warm paper neutrals.
          cream: '#F7F4EE',
          sand: '#EDE7DB',
          gold: '#B98A32',
        },
        /**
         * Tailwind's stock `slate` is a cold blue-gray. Replacing it with a
         * warm stone ramp makes every existing `text-slate-*` across the site
         * read like ink on paper instead of default UI gray.
         */
        slate: {
          50: '#F8F7F4',
          100: '#F0EEE9',
          200: '#E2DFD8',
          300: '#CBC7BD',
          400: '#A19C90',
          500: '#7B766B',
          600: '#5F5B52',
          700: '#4A4740',
          800: '#33312C',
          900: '#22201C',
          950: '#141310',
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(16, 22, 20, 0.04), 0 8px 24px -12px rgba(16, 22, 20, 0.12)',
        lift: '0 2px 4px rgba(16, 22, 20, 0.05), 0 16px 40px -16px rgba(16, 22, 20, 0.18)',
      },
      borderRadius: {
        // Restrained geometry. Pill-shaped everything is a template tell.
        DEFAULT: '0.25rem',
        md: '0.3125rem',
        lg: '0.375rem',
        xl: '0.5rem',
        '2xl': '0.625rem',
        '3xl': '0.875rem',
      },
      fontFamily: {
        // Headlines. Newsreader, an editorial serif with real warmth.
        display: ['var(--font-newsreader)', 'Georgia', 'serif'],
        serif: ['var(--font-newsreader)', 'Georgia', 'serif'],
        // Body. Karla, a grotesque with enough character to feel drawn.
        sans: ['var(--font-karla)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.14em',
      },
      maxWidth: {
        measure: '68ch',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
