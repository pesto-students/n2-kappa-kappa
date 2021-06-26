import React from 'react';

// responsive
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

/* COMPONENTS */
// atoms
import Dialog from '@kappa/components/src/atoms/dialog';

// Styles
import useStyles from './popup.styles';

const Popup = (props) => {
  const {
    children,
    isOpen,
    setIsOpen,
    maxWidth,
  } = props;
  const classes = useStyles();

  // responsive
  const theme = useTheme();
  const isXtraSmall = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <Dialog
      {...props}
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className={classes.root}
      maxWidth={maxWidth}
      fullScreen={isXtraSmall}
      scroll="body"
    >
      {children}
    </Dialog>
  );
};

export default Popup;
