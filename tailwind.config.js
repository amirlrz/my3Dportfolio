/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ["General Sans", "sans-serif"],
      },
      colors: {
        black: {
          DEFAULT: "#000",
          primary: "#050816",
          tertiary: "#151030",
          100: "#010103",
          200: "#0E0E10",
          300: "#1C1C21",
          500: "#3A3A49",
          600: "#1A1A1A",
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOutRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        purple: {
          linear:
            "linear-gradient(90deg, rgba(145,94,255,1) 0%, rgba(145,94,255,1) 51%, rgba(0,1,1,1) 82%);",
        },
        white: {
          DEFAULT: "#FFFFFF",
          800: "#E4E4E6",
          700: "#D6D9E9",
          600: "#AFB0B6",
          500: "#62646C",
        },
        boxShadow: {
          card: "0px 35px 120px -15px #211e35",
        },
        screens: {
          xs: "450px",
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/public/assets/terminal.png')",
      },
      animation: {
        "slide-in-right": "slideInRight 0.4s ease-in-out",
        "slide-out-right": "slideOutRight 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
