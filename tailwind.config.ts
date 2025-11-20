import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#cde2ff',
          200: '#a9caff',
          300: '#7eaeff',
          400: '#538fff',
          500: '#2c6dff',
          600: '#1f53db',
          700: '#1740af',
          800: '#14398f',
          900: '#112f73'
        }
      }
    }
  },
  plugins: []
};

export default config;
