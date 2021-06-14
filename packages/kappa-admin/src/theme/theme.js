import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  '@global': {
    body: {
      margin: 0,
      padding: 0,
    },
  },
  typography: {
    fontFamily: ['"Poppins"', 'sans-serif'].join(','),
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
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
      // primary: '#212529',
      // secondary: '#444',
    },
  },
});

export default theme;
