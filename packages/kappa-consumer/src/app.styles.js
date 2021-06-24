import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

import theme from './theme/theme';

const useGlobalStyles = makeStyles({
  '@global': {
    body: {
      margin: 0,
    },
  },
});

export default function MyThemeProvider({ children }) {
  useGlobalStyles();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
