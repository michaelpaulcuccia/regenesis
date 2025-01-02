import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // If you use the `app` directory
  ],
  safelist: [
    "bg-blue-400",
    "bg-yellow-50",
    // IF A COLOR ISN"T APPEARING IN ADD IT TO SAFELIST
  ],
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors, // Ensure base colors remain
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

export default config;
