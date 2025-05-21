/** @type {import('tailwindcss').Config} */
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
  plugins: [],
};
export default config;
