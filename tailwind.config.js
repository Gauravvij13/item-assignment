module.exports = {
  purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        out: "10px 25px 50px 13px rgba(0, 0, 0, 0.25)",
        corner: "2px 2px 15px 2px rgba(0, 0, 0, 0.2);",
        cornersm: "1px 1px 8px 1px rgba(0, 0, 0, 0.2);",
      },
      textColor: {
        primary: "#3b4d75",
        secondary: "#470cc",
        lightBlue: "#F2F5FA",
      },
      backgroundColor: {
        primary: "#3b4d75",
        secondary: "#470CC",
        lightBlue: "#F2F5FA",
      },
      borderColor: {
        primary: "#3b4d75",
        secondary: "#470cc",
        lightBlue: "#F2F5FA",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
