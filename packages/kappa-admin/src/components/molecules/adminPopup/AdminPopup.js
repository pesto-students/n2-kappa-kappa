import React from 'react';

/* COMPONENTS */
// atoms
import DialogTitle from '@kappa/components/src/atoms/dialogTitle';
import DialogActions from '@kappa/components/src/atoms/dialogActions';
import Button from '@kappa/components/src/atoms/button';
import Popup from '../popup';

// Styles
import useStyles from './adminPopup.styles';

const AdminPopup = (props) => {
  const classes = useStyles();
  const {
    children,
    handleSubmit,
    title,
    label,
  } = props;

  return (
    <Popup
      {...props}
    >
      <DialogTitle>{title}</DialogTitle>
      <div className={classes.content}>
        {children}
      </div>
      <DialogActions>
        <Button
          label={label}
          color="primary"
          size="large"
          onClick={() => handleSubmit()}
        />
      </DialogActions>
    </Popup>
  );
};

export default AdminPopup;
