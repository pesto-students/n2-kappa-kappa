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
  },
  palette: {
    type: 'light',
    primary: {
      main: '#5C45E3',
      secondary: '#fff',
    },
  },
});

export default theme;
