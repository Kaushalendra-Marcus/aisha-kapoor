import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "rgb(var(--cream) / <alpha-value>)",
        "off-white": "rgb(var(--off-white) / <alpha-value>)",
        "warm-beige": "rgb(var(--warm-beige) / <alpha-value>)",
        "light-gray": "rgb(var(--light-gray) / <alpha-value>)",
        "soft-pink": "rgb(var(--soft-pink) / <alpha-value>)",
        "blush": "rgb(var(--blush) / <alpha-value>)",
        charcoal: "rgb(var(--charcoal) / <alpha-value>)",
        "dark-brown": "rgb(var(--dark-brown) / <alpha-value>)",
        "warm-gray": "rgb(var(--warm-gray) / <alpha-value>)",
        "muted-gray": "rgb(var(--muted-gray) / <alpha-value>)",
        "accent-rose": "rgb(var(--accent-rose) / <alpha-value>)",
        "accent-warm": "rgb(var(--accent-warm) / <alpha-value>)",
        "block-pink": "rgb(var(--block-pink) / <alpha-value>)",
        "block-yellow": "rgb(var(--block-yellow) / <alpha-value>)",
        "block-blue": "rgb(var(--block-blue) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        condensed: ["var(--font-condensed)", "Arial Narrow", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1.0", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "poster-xl": ["clamp(3rem, 9vw, 8rem)", { lineHeight: "0.85", letterSpacing: "-0.035em" }],
        "poster-lg": ["clamp(2.25rem, 6vw, 5.5rem)", { lineHeight: "0.87", letterSpacing: "-0.03em" }],
        "poster-md": ["clamp(1.75rem, 4vw, 3.25rem)", { lineHeight: "0.9", letterSpacing: "-0.025em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-in": "slideIn 0.6s ease forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "pulse-subtle": "pulseSoft 2.4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      backgroundImage: {
        "grain": "url('/textures/grain.png')",
      },
      boxShadow: {
        "soft": "0 2px 20px rgba(44, 44, 44, 0.06)",
        "medium": "0 4px 40px rgba(44, 44, 44, 0.10)",
        "large": "0 12px 60px rgba(44, 44, 44, 0.14)",
        "warm": "0 8px 60px rgba(184, 149, 106, 0.15)",
        "card": "0 1px 3px rgba(44,44,44,0.05), 0 8px 24px rgba(44,44,44,0.06)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
