/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the path according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        background: '#1e293b', // Add your custom colors
        primary: '#2563eb',
        secondary: '#1d4ed8',
        'primary-foreground': '#ffffff',
        'muted-foreground': '#9ca3af',
        muted: '#f3f4f6',
        foreground: '#111827',
      },
    },
  },
  plugins: [],
};
