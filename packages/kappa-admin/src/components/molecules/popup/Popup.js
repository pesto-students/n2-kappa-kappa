// import React from 'react';

// // responsive
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import { useTheme } from '@material-ui/core/styles';

// /* COMPONENTS */
// // atoms
// import Dialog from '../../../../atoms/dialog';
// import DialogTitle from '../../../../atoms/dialogTitle';
// import DialogActions from '../../../../atoms/dialogActions';
// import Button from '../../../../atoms/button';

// // Styles
// import useStyles from './popup.styles';

// const Popup = (props) => {
//   const {
//     children,
//     isOpen,
//     setIsOpen,
//     handleSubmit,
//   } = props;
//   const classes = useStyles();

//   // responsive
//   const theme = useTheme();
//   const isXtraSmall = useMediaQuery(theme.breakpoints.only('xs'));

//   return (
//     <Dialog
//       {...props}
//       open={isOpen}
//       onClose={() => setIsOpen(false)}
//       className={classes.root}
//       // maxWidth="xs"
//       // fullScreen={isXtraSmall}
//       // scroll="body"
//       fullWidth
//       maxWidth="md"
//     >
//       <DialogTitle>Add a product</DialogTitle>
//       {children}
//       <DialogActions>
//         <Button
//           label="Save Changes"
//           color="primary"
//           size="large"
//           onClick={() => handleSubmit()}
//         />
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default Popup;

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
