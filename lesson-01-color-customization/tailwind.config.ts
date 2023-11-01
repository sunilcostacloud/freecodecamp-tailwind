import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        myCustomColor: "#db2a27",
        vuejs: {
          100: "#49e659",
          932: "#434252",
        }
      },
    },
  },
  plugins: [],
};
export default config;
