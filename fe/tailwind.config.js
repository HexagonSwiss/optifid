/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
      extend: {
        fontFamily: {
          roboto: ["Roboto"],
        },
        boxShadow: {
          'box-search-shadow': '0px 4px 4px 0px #00000040',
          'box-pink-shadow': '0px 4px 10px 0px #00000021',
        }
      },
      screens: {
        mobile: "410px",
        // => @media (min-width: 480px) { ... }
  
        tablet: "640px",
        // => @media (min-width: 640px) { ... }
  
        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }
  
        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        search_box: "#FCFCFC",
        white: "#fff",
        black: "#000",
        highlights: "#d74770",
        primary: "#b32216",
      },
      backgroundImage: {
         
      },
      content: {
        logo: 'url("./assets/logo_optifid.png")',
      },
    },
    plugins: [],
  };