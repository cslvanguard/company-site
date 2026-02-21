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
        brand: {
          50: "#f0f0ff",
          100: "#e0dffe",
          200: "#c3c0fe",
          300: "#a29afc",
          400: "#8678f9",
          500: "#7157f5",
          600: "#6340eb",
          700: "#5533d4",
          800: "#462caa",
          900: "#3b2988",
          950: "#231753",
        },
        surface: {
          50: "#fafafe",
          100: "#f4f3ff",
          200: "#eeedfc",
          300: "#e3e1f7",
          400: "#d4d1ee",
          500: "#b8b4db",
        },
        midnight: {
          900: "#0f0a2e",
          800: "#16103d",
          700: "#1e174f",
        },
      },
      fontFamily: {
        display: ['"Outfit"', "sans-serif"],
        body: ['"DM Sans"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh":
          "radial-gradient(at 20% 80%, rgba(113, 87, 245, 0.15) 0%, transparent 50%), radial-gradient(at 80% 20%, rgba(99, 64, 235, 0.1) 0%, transparent 50%), radial-gradient(at 50% 50%, rgba(134, 120, 249, 0.05) 0%, transparent 70%)",
        "gradient-mesh-dark":
          "radial-gradient(at 20% 80%, rgba(113, 87, 245, 0.3) 0%, transparent 50%), radial-gradient(at 80% 20%, rgba(99, 64, 235, 0.2) 0%, transparent 50%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "slide-up": "slide-up 0.5s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "slide-up": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(113, 87, 245, 0.15)",
        "glow-lg": "0 0 80px rgba(113, 87, 245, 0.2)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.06)",
        "glass-lg": "0 16px 48px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
