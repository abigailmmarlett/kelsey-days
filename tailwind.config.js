/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'float-in': 'floatIn 0.8s ease-out',
        'subtle-zoom': 'subtleZoom 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      colors: {
        'neutral-dark': '#3d3d3d',
        'neutral-light': '#f7f6f4',
      },
    },
  },
  plugins: [],
}
