import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        werkstatt: "#1B2A2E",
        werkstatt2: "#233A3F",
        papier: "#EFECE3",
        papier2: "#E6E1D3",
        tinte: "#171512",
        messing: "#C98A3D",
        messing2: "#B5793230",
        erledigt: "#4B7A5E",
      },
      fontFamily: {
        display: ['"Fraunces"', "serif"],
        sans: ['"IBM Plex Sans"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
