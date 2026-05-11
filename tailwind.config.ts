import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        gold: {
          50: "#fefdf0",
          100: "#fdf9d3",
          200: "#fbf0a0",
          300: "#f8e264",
          400: "#f4ce2e",
          500: "#e8b800",
          600: "#c99500",
          700: "#a07000",
          800: "#845a00",
          900: "#6e4b00",
          950: "#3f2900",
        },
        spice: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          950: "#431407",
        },
        cream: {
          50: "#fefefe",
          100: "#fdf8f0",
          200: "#faf0e0",
          300: "#f5e4c8",
          400: "#edd4a8",
          500: "#e2be82",
          600: "#d4a45a",
          700: "#b8863a",
          800: "#956b2e",
          900: "#7a5726",
        },
        dark: {
          900: "#0a0805",
          800: "#150f08",
          700: "#1e160c",
          600: "#2a1e10",
          500: "#3a2a16",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Cormorant Garamond", "Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gold-gradient":
          "linear-gradient(135deg, #f4ce2e 0%, #e8b800 50%, #c99500 100%)",
        "spice-gradient":
          "linear-gradient(135deg, #9a3412 0%, #c2410c 50%, #ea580c 100%)",
        "dark-gradient":
          "linear-gradient(180deg, #0a0805 0%, #150f08 50%, #1e160c 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
        "slide-in-left": "slideInLeft 0.8s ease-out",
        "slide-in-right": "slideInRight 0.8s ease-out",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(232, 184, 0, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(232, 184, 0, 0.7)" },
        },
      },
      boxShadow: {
        gold: "0 4px 30px rgba(232, 184, 0, 0.3)",
        "gold-lg": "0 8px 60px rgba(232, 184, 0, 0.4)",
        spice: "0 4px 30px rgba(194, 65, 12, 0.3)",
        luxury: "0 20px 60px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
