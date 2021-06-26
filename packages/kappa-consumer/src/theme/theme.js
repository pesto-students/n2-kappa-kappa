import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  shape: {
    borderRadiusSecondary: 20,
  },
  typography: {
    fontFamily: ['"Poppins"', 'sans-serif'].join(','),
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'unset',
    },
    caption: {
      lineHeight: 2.2,
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: '#5C45E3',
      secondary: '#fff',
    },
    text: {
      primary: '#111111',
      secondary: '#757575',
      white: '#fff',
    },
    secondary: {
      main: '#5BB02D',
      dark: '#BBE1FF',
    },
  },
});

export default theme;
