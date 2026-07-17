import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#050B12",
        panel: "#0B1220",
        cyan: {
          glow: "#22D3EE",
          deep: "#0E7490"
        },
        amber: {
          glow: "#F59E0B"
        }
      },
      boxShadow: {
        neon: "0 0 38px rgba(34, 211, 238, 0.24)",
        warm: "0 0 30px rgba(245, 158, 11, 0.18)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};

export default config;
