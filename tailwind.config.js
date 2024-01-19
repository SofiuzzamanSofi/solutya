/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white1: "#fff",
        orange: "#ff5017",
        white: "#f8fafa",
        blue: "#010f58",
        "ash-color": "#fcfcfc",
        "paragraph-text-color": "rgba(0, 0, 0, 0.75)",
        paragraph: "#3b3e3f",
        black: "#000",
        tomato: "#ff6930",
        "paragrapg-text": "#777c90",
        dimgray: "#737373",
        gray: {
          "100": "#002633",
          "200": "rgba(0, 0, 0, 0.55)",
        },
        midnightblue: "rgba(1, 15, 88, 0.6)",
        darkslateblue: "#33428a",
        blueviolet: "#9747ff",
        gainsboro: "#dee0e0",
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
        helvetica: "Helvetica",
        h6: "Gordita",
      },
      borderRadius: {
        "8xs": "5px",
        "3xs": "10px",
        "11xl": "30px",
        mini: "15px",
        "10xs": "3px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      "5xl": "24px",
      lgi: "19px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      xl: "20px",
      mid: "17px",
      lg: "18px",
      "17xl": "36px",
      "3xl": "22px",
      "13xl": "32px",
      "7xl": "26px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      mq1700: {
        raw: "screen and (max-width: 1700px)",
      },
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
