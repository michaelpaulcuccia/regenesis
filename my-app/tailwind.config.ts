import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // If you use the `app` directory
  ],
  safelist: [
    // IF A COLOR or STYLE ISN"T APPEARING IN ADD IT TO SAFELIST
    "bg-blue-400",
    "bg-yellow-50",
    "w-[50%]",
    "flex-col",
    "gap-y-2",
    "mt-8",
    "justify-end",
    "items-end",
    "text-center",
    "mt-5",
    "items-center",
    "mt-12",
  ],
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors, // Ensure base colors remain
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      width: {
        50: "50%",
      },
    },
  },
  plugins: [],
};

export default config;
