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
      },
    },
    screens: {
      mobile: "410px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    colors: {
      primary: "#D8F3D8",
      primaryHover: "#C3E9C2",
      secondary: "#F6F6F6",
      white: "#fff",
      black: "#000",
    },
    backgroundImage: {
      logo: 'url("./assets/logo_optfid.png")',
      password_sent: 'url("./assets/email_read.png")',
      svg_logo: 'url("./assets/logo_optfid.svg")',
    },
    fontWeight: {
      title: '700',
      subtitle: '400',
      normal: '400',
      medium: '500',
    },
  },
  plugins: [],
};