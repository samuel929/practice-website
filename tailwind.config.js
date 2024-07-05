/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 4px 4px rgba(181, 193, 199, 0.2)",
      },
      colors: {
        customGray: "#F8F8F8",
        secondaryColor: "#c8c8c8",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      width: {
        "39rem": "39rem",
      }
    },
  },
  plugins: [
    function ({ addComponents, addUtilities }) {
       addUtilities({
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none',  /* for Internet Explorer and Edge */
          'scrollbar-width': 'none',  /* for Firefox */
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          'display': 'none',  /* for Chrome, Safari, and Opera */
        },
      });
      addComponents({
        ".lato-thin": {
          fontFamily: "Lato",
          fontWeight: "100",
          fontStyle: "normal",
        },
        ".lato-light": {
          fontFamily: "Lato",
          fontWeight: "300",
          fontStyle: "normal",
        },
        ".lato-regular": {
          fontFamily: "Lato",
          fontWeight: "400",
          fontStyle: "normal",
        },
        ".lato-bold": {
          fontFamily: "Lato",
          fontWeight: "700",
          fontStyle: "normal",
        },
        ".lato-black": {
          fontFamily: "Lato",
          fontWeight: "900",
          fontStyle: "normal",
        },
        ".lato-thin-italic": {
          fontFamily: "Lato",
          fontWeight: "100",
          fontStyle: "italic",
        },
        ".lato-light-italic": {
          fontFamily: "Lato",
          fontWeight: "300",
          fontStyle: "italic",
        },
        ".lato-regular-italic": {
          fontFamily: "Lato",
          fontWeight: "400",
          fontStyle: "italic",
        },
        ".lato-bold-italic": {
          fontFamily: "Lato",
          fontWeight: "700",
          fontStyle: "italic",
        },
        ".lato-black-italic": {
          fontFamily: "Lato",
          fontWeight: "900",
          fontStyle: "italic",
        },
      });
    },
  ],
};
