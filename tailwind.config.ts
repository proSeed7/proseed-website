import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: {
          1: '#FFFFFF',
          2: '#D6DBDC',
        },
        black: {
          1: '#000000',
        },
      },
      textColor: {
        'default': 'var(--text-default)',
        'default-inverted': 'var(--text-default-inverted)',
      },
      backgroundColor: {
        'default': 'var(--background-default-1)',
        'default-inverted': 'var(--background-default-1-inverted)',
      },
      borderColor: {
        'default': 'var(--text-default)',
      },
      fill: {
        'default': 'var(--text-default)',
      },
      spacing: {
        'container': '1440px',
      },
      maxWidth: {
        'container': 'var(--container-width)',
      },
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
};
export default config;
