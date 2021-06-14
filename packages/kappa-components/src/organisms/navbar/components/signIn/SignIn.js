import React from 'react';

/* COMPONENTS */
// atoms
import { Typography } from '@material-ui/core';
import Popup from '../popup';
import Button from '../../../../atoms/button';
import TextField from '../../../../atoms/textField';
import DialogActions from '../../../../atoms/dialogActions';
import DialogContent from '../../../../atoms/dialogContent';
import DialogTitle from '../../../../atoms/dialogTitle';
import Checkbox from '../../../../atoms/checkbox';
import FormControlLabel from '../../../../atoms/formControlLabel';
import Link from '../../../../atoms/link';

// Styles
import useStyles from './signIn.styles';

export default function SignIn(props) {
  const { isOpen, setIsOpen, handleSignIn } = props;

  const classes = useStyles();

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Popup isOpen={isOpen} setIsOpen={setIsOpen}>
      <DialogTitle className={classes.title}>Your Account for everything Kappa</DialogTitle>
      <DialogContent className={classes.content}>
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="outlined"
        />

        <TextField
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
        />
        <FormControlLabel
          className={classes.label}
          control={(
            <Checkbox
              checked={checked}
              onChange={handleChange}
              color="primary"
            />
            )}
          label="Keep me signed in"
        />
        <Typography variant="caption" gutterBottom>
          By logging in, you agree to Kappa&apos;s
          {' '}
          <Link href="/">
            Privacy Policy
          </Link>
          {' '}
          and
          {' '}
          <Link href="/">
            Terms of Use
          </Link>
          {' '}
        </Typography>
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Button label="Sign In" variant="contained" color="primary" className={classes.button} />
        <Typography variant="caption" gutterBottom>
          Not a member
          {' '}
          <Link onClick={handleSignIn}>
            Join Us
          </Link>
        </Typography>
      </DialogActions>
    </Popup>
  );
}
