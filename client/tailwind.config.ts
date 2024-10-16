import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-light": "var(--primary-light)",
        secondary: "var(--secondary)",
        "secondary-light": "var(--secondary-light)",
        "dark-gray": "var(--dark-gray)",
        "light-gray": "var(--light-gray)",
        white: "var(--white)",
        "primary-light-500": "var(--primary-light-500)",
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
      fontWeight: {
        regular: "400",
        bold: "800"
      },
      backgroundColor: {
        "white-100": "#ffffff1a",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #9D6DD1 0%, #6D3F9E 100%)",
        "custom-gradient-2": "linear-gradient(120deg, #9D6DD1 0%, #6D3F9E 100%)",
        "active": "linear-gradient(180deg, #9D6DD1 0%, var(--primary) 100%)",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
