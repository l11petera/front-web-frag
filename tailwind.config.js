/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aliceblue: "#dde9ef",
        darkslateblue: "#1e3366",
        white: "#fff",
        lawngreen: "#5de410",
        limegreen: {
          "100": "#5ecb20",
          "200": "#5cc521",
          "300": "#29b000",
        },
        dimgray: {
          "100": "#6b767b",
          "200": "#6b7869",
          "300": "#5f6867",
          "400": "#4d4a4a",
        },
        gainsboro: "#dfe9e1",
        black: "#000",
        olivedrab: "#96b74a",
        whitesmoke: "#ebf2f3",
        lightgreen: "#6fc157",
        forestgreen: {
          "100": "#3d8f24",
          "200": "rgba(61, 143, 36, 0.09)",
        },
        greenyellow: "#c9fa27",
        yellowgreen: "#d8dc52",
        gray: "rgba(0, 0, 0, 0.5)",
        lightgray: "#cbccd4",
      },
      spacing: {},
      fontFamily: {
        barlow: "Barlow",
        montserrat: "Montserrat",
        roboto: "Roboto",
      },
      borderRadius: {
        "10xs": "3px",
        xl: "20px",
        "11xl": "30px",
        mini: "15px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "3xl": "22px",
      lg: "18px",
      "21xl": "40px",
      "13xl": "32px",
      "31xl": "50px",
      "11xl": "30px",
      "6xl": "25px",
      "41xl": "60px",
      "17xl": "36px",
      "29xl": "48px",
      "7xl": "26px",
      "2xl": "21px",
      "16xl": "35px",
      "9xl": "28px",
      "51xl": "70px",
      "23xl": "42px",
      "37xl": "56px",
      "10xl": "29px",
      "19xl": "38px",
      "4xl": "23px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
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
