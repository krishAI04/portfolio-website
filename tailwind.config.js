/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#8ed5ff",
        "primary-strong": "#38bdf8",
        secondary: "#56ddac",
        tertiary: "#ffc176",
        background: "#050816",
        surface: "#0f1418",
        "surface-low": "#0a0f12",
        "surface-card": "#171c20",
        "surface-high": "#252b2e",
        outline: "#87929a",
        "outline-variant": "#3e484f",
        "on-surface": "#dee3e8",
        "on-surface-variant": "#bdc8d1",
        "on-primary": "#00354a"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px"
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
        code: ["JetBrains Mono", "monospace"]
      },
      spacing: {
        gutter: "24px",
        "container-max": "1280px"
      },
      boxShadow: {
        glow: "0 0 24px rgba(56, 189, 248, 0.18)",
        "glow-soft": "0 20px 50px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: []
};
