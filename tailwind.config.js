/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'accelr-blue': '#0052CC',
        'accelr-blue-light': '#4C9AFF',
        'accelr-blue-dark': '#003D99',
        'accelr-black': '#0A0A0A',
        'accelr-surface': '#FAFAFA',
        'accelr-muted': '#666666',
        'accelr-border': '#E5E5E5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
