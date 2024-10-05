import type { Config } from "tailwindcss";

const config: Config = {
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
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        highlight: "var(--highlight)",
        accent: "var(--accent)",
        "dark-gray": "var(--dark-gray)",
        "light-gray": "var(--light-gray)",
        white: "var(--white)",
      },
      fontSize: {
        title: "var(--fs-title)",
        "title-secondary": "var(--fs-title-secondary)",
        subtitle: "var(--fs-subtitle)",
        body: "var(--fs-body)",
        small: "var(--fs-small)",
      },
      fontFamily: {
        "sf": ["var(--font-sf)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
