/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: [
        "0.5rem",
        {
          lineHeight: "12px",
          fontWeight: "300",
        },
      ],
      sm: [
        "0.75rem",
        {
          lineHeight: "14px",
          fontWeight: "300",
        },
      ],
      base: [
        "0.875rem",
        {
          lineHeight: "18px",
          fontWeight: "400",
        },
      ],
      lg: [
        "1rem",
        {
          lineHeight: "20px",
          fontWeight: "300",
        },
      ],
      xl: [
        "1rem",
        {
          lineHeight: "20px",
          fontWeight: "400",
        },
      ],
      "2xl": [
        "1.25rem",
        {
          lineHeight: "28px",
          fontWeight: "300",
        },
      ],
      "3xl": [
        "1.5rem",
        {
          lineHeight: "32px",
          fontWeight: "300",
        },
      ],
      "4xl": [
        "2rem",
        {
          lineHeight: "48px",
          fontWeight: "400",
        },
      ],
      "5xl": [
        "3.5rem",
        {
          lineHeight: "72px",
          fontWeight: "500",
        },
      ],
    },

    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          100: "#BD91E4",
          200: "#B07CDE",
          300: "#A468D9",
          400: "#954FD3",
          DEFAULT: "#8B3ECF",
        },
        secondary: {
          100: "#92B2F1",
          200: "#7CA1EE",
          300: "#6591EC",
          400: "#4E81E9",
          DEFAULT: "#3972E6",
        },
        ternary: {
          100: "#B4F8EC",
          200: "#99F5E5",
          300: "#7DF3DD",
          400: "#5CEFD5",
          DEFAULT: "#2DEBC9",
        },
        warning: {
          100: "#F29BB2",
          200: "#EF809C",
          300: "#EC6A8B",
          400: "#E95379",
          DEFAULT: "#E63965",
        },
        info: {
          100: "#EBB38F",
          200: "#E7A479",
          300: "#E49868",
          400: "#E18C56",
          DEFAULT: "#DB7737",
        },
        dark: {
          100: "#60676C",
          200: "#52585C",
          300: "#43484C",
          400: "#35393B",
          DEFAULT: "#282B2D",
        },
        light: {
          100: "#A3A3A3",
          200: "#BFBFBF",
          300: "#D9D9D9",
          400: "#E8E8E8",
          DEFAULT: "#FEFEFE",
        },
      },

      fontFamily: {
        roboto: ["var(--font-roboto)", ...fontFamily.sans],
      },

      dropShadow: {
        bgImgShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [require("daisyui")],
};
