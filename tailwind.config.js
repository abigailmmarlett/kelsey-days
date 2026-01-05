/** @type {import('tailwindcss').Config} */
// Updated teal accent color to #8FB9CB
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Bebas Neue', 'Arial Black', 'sans-serif'],
        'editorial': ['Playfair Display', 'serif'],
        'serif': ['Cormorant Garamond', 'serif'],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-in-up": "fadeInUp 0.8s ease-out",
        "slide-in-left": "slideInLeft 0.8s ease-out",
        "slide-in-right": "slideInRight 0.8s ease-out",
        "float-in": "floatIn 0.8s ease-out",
        "subtle-zoom": "subtleZoom 3s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "tilt": "tilt 6s ease-in-out infinite",
        "diagonal-slide": "diagonalSlide 1s ease-out",
      },
      colors: {
        "neutral-dark": "#3d3d3d",
        "neutral-light": "#f7f6f4",
        "charcoal": {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#3d3d3d",
          900: "#2a2a2a",
          950: "#1a1a1a",
        },
        "accent-red": "#d63447",
        "accent-gold": "#d4af37",
        "accent-teal": "#8FB9CB",
      },
      backgroundImage: {
        "grain": "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 400 400\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" seed=\"2\" /%3E%3C/filter%3E%3Crect width=\"400\" height=\"400\" fill=\"%23000\" /%3E%3Crect width=\"400\" height=\"400\" fill=\"%23fff\" filter=\"url(%23noiseFilter)\" opacity=\"0.05\" /%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
};
