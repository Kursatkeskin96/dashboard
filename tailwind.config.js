/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #fbfbfb 0%, #DCDCDC 100%)",
      },
      colors: {
        lightGray: "rgba(209, 209, 209, 0.2)", // 20% opacity
        darkNavy: "rgba(10, 12, 43, 0.1)", // 10% opacity
      },
    },
  },
  plugins: [],
};
