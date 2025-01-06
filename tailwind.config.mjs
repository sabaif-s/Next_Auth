/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'highWidth': { raw: '(min-aspect-ratio: 16/10)' }, // Portrait orientation
        'highHeight': { raw: '(max-aspect-ratio: 4/3)' }, // Landscape orientation
      },
    },
  },
  plugins: [],
};
