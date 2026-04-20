/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        panel: '#1e1e1e',
        node: '#252525',
        primary: '#ff6d5a',
        secondary: '#00c389',
        border: '#333333',
        textMain: '#ffffff',
        textMuted: '#a0a0a0'
      }
    },
  },
  plugins: [],
}
