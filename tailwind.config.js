/** @type {import('tailwindcss').Config} */

import scrollbar from "tailwind-scrollbar"; // tailwindcss-scrollbar plugin

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s ease-out forwards",
      },
      transitionDelay: {
        500: "500ms",
      },
      fontFamily: {
        cinzel: ['"Cinzel"', "serif"],
        cinzelDecorative: ['"Cinzel Decorative"', "cursive"],
        slabo: ['"Slabo 27px"', "serif"],
        notoNaskhArabic: ["var(--font-noto-naskh-arabic)", "sans-serif"],
      },
      colors: {
        gold: "#ECC776",
      },
    },
  },
  plugins: [scrollbar],
};
export default config;
