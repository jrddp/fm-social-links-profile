/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        "green": "hsl(75, 94%, 57%)",
        "white": "hsl(0, 0%, 100%)",
        "gray": {
          700: "hsl(0, 0%, 20%)",
          800: "hsl(0, 0%, 12%)",
          900: "hsl(0, 0%, 8%)",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        body: "14px",
      },
      fontWeight: {
        normal: 400,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
};
