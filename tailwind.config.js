/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      roboto: "Roboto, sans-serif",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      'milk': "#F4F4E8",
      'black': "#171B18",
      'green': "#068E85",
      'red': "#F0634F",
      'dark-milk': "#C3C3B9",
    },
    extend: {},
  },
  plugins: [],
}