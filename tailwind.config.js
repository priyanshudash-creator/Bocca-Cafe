/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: '#261A16',
          900: '#1a120f',
          800: '#261A16',
          700: '#382620',
          600: '#4d342c',
        },
        coffee: {
          DEFAULT: '#795548',
          light: '#8d6e63',
          dark: '#5d4037',
        },
        caramel: {
          DEFAULT: '#B68A5A',
          light: '#c8a176',
          dark: '#9a7143',
        },
        taupe: {
          DEFAULT: '#D8C9B8',
          light: '#e7ded4',
          border: '#e2d7cb',
          dark: '#b5a38f',
        },
        ivory: {
          DEFAULT: '#F5F0E8',
          warm: '#F7F3EC',
          tint: '#FAF7F2',
        },
        warmwhite: {
          DEFAULT: '#FFFCF7',
          pure: '#FFFFFF',
        },
        charcoal: {
          DEFAULT: '#292522',
          muted: '#433e3a',
        },
        mutedgray: {
          DEFAULT: '#77716B',
          light: '#9e9790',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Playfair Display', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        editorial: '.08em',
      },
    },
  },
  plugins: [],
}
