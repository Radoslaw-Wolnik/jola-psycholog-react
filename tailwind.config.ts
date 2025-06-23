import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.css",
    "./src/*.css"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3a7ca5',      // Soft blue
        secondary: '#2c3e50',    // Dark blue
        accent: '#e67e22',       // Warm orange
        light: '#f8f9fa',        // Off-white
        dark: '#343a40',         // Dark gray
        muted: '#6c757d'         // Gray text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif']
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
        },
      },
      scale: {
        '0': '0',
        '100': '1',
      },
    },
  },
  plugins: [],
};
export default config;

