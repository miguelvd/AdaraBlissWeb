/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mac': {'raw': '(min-height: 800px) and (max-height: 900px)'},
      },
      colors: {
        primary: '#F25AA3',
        secondary: '#FFE5F0',
        accent: '#FF96C5',
        dark: '#2D3748',
        light: '#F7FAFC',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Glitten', 'serif'],
      },
    },
  },
  plugins: [],
}
