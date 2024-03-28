/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
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
        "hero": "url('/assets/herobg.avif')",
        "pattern": "url('/assets/bg-pattern.avif')",
      },
      colors: {
        background:colors.slate[950],
        secondColor:colors.slate[900],
        thirdColor:"#141C42",
        purple:"#5D31D8",
        skinColor:"#9B8994"
      },
      width: {
        pageWidth: "1500px"
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        source: ["Source Code Pro", "sans-serif"],
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
      dropShadow: {
        whiteGlow: [
          "0 0px 20px rgba(255,255, 255, 0.25)",
          "0 0px 65px rgba(255, 255,255, 0.15)"
        ],
        indigoGlow: [
          "0 0px 20px rgb(79, 70, 229,0.35)",
          "0 0px 65px rgb(79, 70, 229,0.2)"
        ]
      },
    },
    
  },
  plugins: [require('tailwindcss-animate')],
};
