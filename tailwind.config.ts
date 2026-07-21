import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: {
          DEFAULT: "#0E0E0E",
          light: "#1A1A1A",
          soft: "#242424",
        },
        cream: {
          DEFAULT: "#F8F5F0",
          dark: "#EFEAE1",
        },
        champagne: {
          DEFAULT: "#C9A66B",
          light: "#DBC090",
          dark: "#A6813F",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        "8xl": "1440px",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
