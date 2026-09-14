/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#14161B",
        paper: "#F6F7F5",
        "paper-2": "#EFF0EC",
        slate: "#5B6472",
        "slate-2": "#8A93A0",
        line: "#DADDE0",
        ledger: "#1E4A3D",
        "ledger-dim": "#143329",
        "ledger-tint": "#E2EEE8",
        gold: "#B8842A",
        "gold-tint": "#F6EEDD",
        success: "#2E8B63",
        error: "#B84B3E",
        // Legacy fallback mappings mapped cleanly to Ledger DS
        charcoal: {
          50: "#F6F7F5",
          100: "#EFF0EC",
          200: "#DADDE0",
          300: "#8A93A0",
          400: "#5B6472",
          500: "#5B6472",
          600: "#5B6472",
          700: "#14161B",
          800: "#143329",
          900: "#14161B",
          950: "#14161B",
        },
        accent: {
          DEFAULT: "#1E4A3D",
          light: "#E2EEE8",
          dark: "#143329",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        structural: "16px",
        control: "12px",
        pill: "9999px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(20,22,27,0.04), 0 8px 20px -12px rgba(20,22,27,0.10)",
        float: "0 8px 24px -6px rgba(20,22,27,0.16)",
        "arch-soft":
          "0 1px 2px rgba(20,22,27,0.04), 0 8px 20px -12px rgba(20,22,27,0.10)",
        "arch-medium": "0 8px 24px -6px rgba(20,22,27,0.16)",
      },
      spacing: {
        "s-1": "4px",
        "s-2": "8px",
        "s-3": "12px",
        "s-4": "16px",
        "s-5": "24px",
        "s-6": "32px",
        "s-7": "48px",
        "s-8": "64px",
        "s-9": "96px",
        "s-10": "128px",
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
