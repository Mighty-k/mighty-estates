/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        accent: {
          DEFAULT: "#f97316",
          light: "#fed7aa",
          dark: "#ea580c",
        },
      },
      fontFamily: {
        display: ["DM Sans", "system-ui", "sans-serif"],
        body: ["DM Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "arch-soft": "0 2px 8px rgba(15, 23, 42, 0.06), 0 8px 24px rgba(15, 23, 42, 0.04)",
        "arch-medium": "0 4px 16px rgba(15, 23, 42, 0.08), 0 16px 40px rgba(15, 23, 42, 0.06)",
        "arch-hard": "0 1px 0 rgba(15, 23, 42, 0.1), 0 4px 12px rgba(15, 23, 42, 0.05)",
        "arch-glow": "0 0 0 1px rgba(249, 115, 22, 0.15), 0 4px 16px rgba(249, 115, 22, 0.1)",
      },
      animation: {
        "slide-up": "slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-in": "slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in": "fadeIn 0.6s ease-out",
        "scale-in": "scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "line-expand": "lineExpand 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        lineExpand: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
