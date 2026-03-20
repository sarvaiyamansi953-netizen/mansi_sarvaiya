/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        shopify: {
          dark: '#1a1a1a',
          light: '#ffffff',
          accent: '#008060', // Shopify Green
          hover: '#005e46',
          bg: '#f6f6f7',
          border: '#e1e3e5',
          text: '#202223',
          'text-secondary': '#6d7175'
        },
        card: {
          bg: '#ffffff',
          'bg-dark': '#242424',
        }
      },
      boxShadow: {
        'shopify': '0 0.125rem 0.25rem rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
};
