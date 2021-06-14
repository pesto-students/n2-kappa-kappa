import React from 'react';

// responsive
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

/* COMPONENTS */
// atoms
import Dialog from '../../../../atoms/dialog';

// Styles
import useStyles from './popup.styles';

const Popup = (props) => {
  const {
    children,
    isOpen,
    setIsOpen,
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
      maxWidth="xs"
      fullScreen={isXtraSmall}
      scroll="body"
    >
      {children}
    </Dialog>
  );
};

export default Popup;
