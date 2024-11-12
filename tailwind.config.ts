import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'encode': 'Encode Sans Condensed, sans-serif',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: {
          1: '#ffffff',
          2: '#f1ebdf',
        },
        black: {
          1: '#1d1d1b',
          2: '#2F2E40',
        },
        yellow: '#fed400',
        green: '#004225',
        'green-light': '#006633',
        'accent-green': 'var(--accent-green)',
        'accent-color': 'var(--accent-color)',
        'accent-color-inverted': 'var(--accent-color-inverted)',
      },
      textColor: {
        'default': 'var(--text-default)',
        'default-inverted': 'var(--text-default-inverted)',
        'button': 'var(--button-text-color)',
        'button-hover': 'var(--button-text-color-hover)',
        'form': 'var(--form-text-color)',
        'form-placeholder': 'var(--form-placeholder-color)'
      },
      backgroundColor: {
        'default': 'var(--background-default-1)',
        'default-inverted': 'var(--background-default-1-inverted)',
        'accent': 'var(--background-accent)',
        'accent-inverted': 'var(--background-accent-inverted)',
        'button' : 'var(--button-bg-color)',
        'button-hover' : 'var(--button-bg-color-hover)',
        'form': 'var(--form-bg-color)'
      },
      borderColor: {
        'default': 'var(--text-default)',
      },
      fill: {
        'default': 'var(--text-default)',
      },
      spacing: {
        'container': '1440px',
        'header-height': 'var(--header-height, 91px)',
        'section-height': 'calc(100vh - var(--header-height))',
        'last-section-height': 'calc(100vh - var(--header-height) - var(--footer-height))'
      },
      maxWidth: {
        'container': 'var(--container-width)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.h-dyn-screen': {
          height: ['100vh', '100dvh'],
        },
        '.h-sm-screen': {
          height: ['100vh', '100svh'],
        },
      });
    }),
  ],
  corePlugins: {
    container: false,
  },
};
export default config;
