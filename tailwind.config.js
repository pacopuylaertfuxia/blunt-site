/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Bebas Neue", "sans-serif"],
        body: ["var(--font-body)", "DM Sans", "sans-serif"],
      },
      colors: {
        bg: {
          DEFAULT: "#060A10",
          2: "#0C1219",
          3: "#131B25",
        },
        cyan: {
          DEFAULT: "#00C2FF",
          dim: "rgba(0,194,255,0.08)",
          mid: "rgba(0,194,255,0.22)",
        },
        mint: "#7EFFD4",
        cream: {
          DEFAULT: "#E8F0F5",
          60: "rgba(232,240,245,0.6)",
          30: "rgba(232,240,245,0.3)",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.07)",
          2: "rgba(255,255,255,0.11)",
        },
      },
      letterSpacing: {
        ultra: "0.25em",
        wide2: "0.15em",
      },
    },
  },
  plugins: [],
};
