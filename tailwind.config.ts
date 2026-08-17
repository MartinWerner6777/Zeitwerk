import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        werkstatt: "#2E2018",
        werkstatt2: "#3A2A1E",
        papier: "#F0E6D6",
        papier2: "#E4D4B8",
        tinte: "#241C15",
        messing: "#B9862F",
        messing2: "#B9862F30",
        erledigt: "#707C43",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
