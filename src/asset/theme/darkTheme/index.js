import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type:'dark',
    "common":{
      "black":"#000",
      "white":"#fff"
    },
    "background": {
      "paper":"#1b1b1b", // ok
      "default":"#212121"
    },
    "primary":{
      "light":"#ff608f", // ok
      "main":"#e91e63", // ok
      "dark":"#af0039", // ok
      "contrastText":"#000000" // ok
    },
    "secondary":{
      "light":"#8e8e8e", // ok
      "main":"#616161", // ok
      "dark":"#373737", // ok
      "contrastText":"#ffffff"
      // "light":"rgba(194, 194, 194, 1)",
      // "main":"rgba(177, 177, 177, 1)",
      // "dark":"rgba(121, 121, 121, 1)",
      // "contrastText":"rgba(49, 49, 49, 1)"
    },
    "error":{
      "light":"#ff5131",
      "main":"#d50000",
      "dark":"#9b0000",
      "contrastText":"#ffffff"
    },
    "text":{
      "primary":"#cfcfcf", // ok
      "secondary":"#9e9e9e",
      "disabled":"#707070",
      "hint":"rgba(0, 0, 0, 1)"
    }
  },
  zIndex: {
    customCardFooter:1,
  },

  overrides: {
    MuiInputBase: {
      input: {
        '&:-webkit-autofill': {
          // fix ugly background color on autofill
          WebkitBoxShadow: '0 0 0 100px #212121 inset !important',
        },
      },
    },
  },


})

const responsiveFontTheme = responsiveFontSizes(theme);

export default responsiveFontTheme;
