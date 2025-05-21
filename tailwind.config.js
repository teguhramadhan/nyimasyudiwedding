/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['"Cinzel"', "serif"],
        cinzelDecorative: ['"Cinzel Decorative"', "cursive"],
        slabo: ['"Slabo 27px"', "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
