/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/assets/herobg.avif')",
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
      colors: {
        'mainColor':"#050816",
        'secondColor':"#10152D",
        'thirdColor':"#141C42",
        'purple':"#5D31D8",
        'skinColor':"#9B8994",
        'dark-1': '#000000',
        'dark-2': '#09090A',
        'dark-3': '#101012',
        'dark-4': '#1F1F22',
        'light-1': '#FFFFFF',
        'light-2': '#EFEFEF',
        'light-3': '#7878A3',
        'light-4': '#5C5C7B',
      },
      screens: {
        'xs': '480px',
      },
      scale: {
        '80': '0.8',
        '85': '0.85',
      },
      width: {
        '420': '420px',
        '465': '465px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
    },
    
  },
  plugins: [require('tailwindcss-animate')],
};
