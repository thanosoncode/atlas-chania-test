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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        grey: "0 2px 5px -3px rgba(255, 255, 255, 0.1), 0 2px 6px 2px rgba(255, 255, 255, 0.1)",
        black:
          "0 2px 5px -3px rgba(255, 0, 0, 0.9), 0 2px 6px 2px rgba(255, 0, 0, 0.9)",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
