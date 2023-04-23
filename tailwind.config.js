/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      height: {
        'header-height': 'var(--header-height)',
        'main-height': 'calc(100% - var(--header-height))',
      }
    },
  },
  plugins: [],
}

