/** @type {import('tailwindcss').Config} */

import scrollbar from "tailwind-scrollbar"; // tailwindcss-scrollbar plugin

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
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
