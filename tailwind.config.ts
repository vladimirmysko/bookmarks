import type { Config } from 'tailwindcss';

import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      alpha: {
        100: 'var(--gray-a1)',
        200: 'var(--gray-a2)',
        300: 'var(--gray-a3)',
        400: 'var(--gray-a4)',
        500: 'var(--gray-a5)',
        600: 'var(--gray-a6)',
        700: 'var(--gray-a7)',
        800: 'var(--gray-a8)',
        900: 'var(--gray-a9)',
        1000: 'var(--gray-a10)',
        1100: 'var(--gray-a11)',
        1200: 'var(--gray-a12)',
      },
      gray: {
        100: 'var(--gray-1)',
        200: 'var(--gray-2)',
        300: 'var(--gray-3)',
        400: 'var(--gray-4)',
        500: 'var(--gray-5)',
        600: 'var(--gray-6)',
        700: 'var(--gray-7)',
        800: 'var(--gray-8)',
        900: 'var(--gray-9)',
        1000: 'var(--gray-10)',
        1100: 'var(--gray-11)',
        1200: 'var(--gray-12)',
      },
    },
    extend: {
      boxShadow: {
        sm: '0 0 0 1px var(--gray-a3),0 0 0 0.5px var(--black-a1),0 1px 1px 0 var(--gray-a2),0 2px 1px -1px var(--black-a1),0 1px 3px 0 var(--black-a1)',
        DEFAULT:
          '0 0 0 1px var(--gray-a3), 0 2px 3px -2px var(--gray-a3), 0 3px 12px -4px var(--black-a2), 0 4px 16px -8px var(--black-a2)',
        md: '0 0 0 1px var(--gray-a3), 0 8px 40px var(--black-a1), 0 12px 32px -16px var(--gray-a3)',
        lg: '0 0 0 1px var(--gray-a3), 0 12px 60px var(--black-a3), 0 12px 32px -16px var(--gray-a5)',
        xl: '0 0 0 1px var(--gray-a3), 0 12px 60px var(--black-a3), 0 16px 64px var(--gray-a2), 0 16px 36px -20px var(--gray-a7)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-jetbrains-mono)', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [forms],
};

export default config;
