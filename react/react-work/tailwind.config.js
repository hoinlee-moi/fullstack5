/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xr': '0 0 10px rgb(59 130 246 / 0.5)',
      },
    },
  },
  plugins: [],
};
