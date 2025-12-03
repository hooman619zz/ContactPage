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
        primary: '#9333ea',
        'primary-dark': '#7e22ce',
        secondary: '#4f46e5',
        accent: '#ec4899',
        bg: '#030712',
        surface: '#111827',
        text: '#e5e7eb',
        muted: '#9ca3af',
      },
    },
  },
  plugins: [],
}
