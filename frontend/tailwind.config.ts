import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0% 80% 100%": { transform: "scale(0)" },
          "40%": { transform: "scale(1)" },
        },
      },
      animation: {
        typing: "typing 1.4s infinite ease-in-out",
      },
      colors: {
        "bc-red": "#882346",
        "bc-yellow": "#f3bd48",
      },
    },
  },
  plugins: [],
};
export default config;
