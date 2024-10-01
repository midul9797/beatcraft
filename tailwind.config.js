/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: {
          DEFAULT: "#CDB795",
          light: "#FDF0DC",
          dark: "#AB9A80",
          extraDark: "#9D7E4F",
        },
      },
    },
  },
  plugins: [],
};
