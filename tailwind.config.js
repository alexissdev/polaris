const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      primary: "#1f1026",
      secondary: "#291533",
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      red: colors.red,
      green: colors.green,
      pink: {
        100: '#ffa8f9',
        200: '#ff8df8',
        500: '#ef64e5'
      },
      wine: {
        700: '#4b1349',
        800: '#340c31',
        900: '#110521'
      },
      ghost: {
        100: '#0000004c',
        200: '#00000066',
      },
      lightghost: {
        100: '#E4DBEAB2',
        200: '#EFE4F5C6',
        300: '#ffffffe5',
      },
      night: {
        100: '#171923',
        200: '#13151D',
        300: '#0a0b10',
      }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
