import React from 'react';

/* COMPONENTS */
// atoms
import DialogTitle from 'kappaComponents/atoms/dialogTitle';
import DialogActions from 'kappaComponents/atoms/dialogActions';
import Button from 'kappaComponents/atoms/button';
import Popup from '../popup';

// Styles
import useStyles from './adminPopup.styles';

const AdminPopup = (props) => {
  const classes = useStyles();
  const {
    children,
    handleSubmit,
    title,
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
          label="Save Changes"
          color="primary"
          size="large"
          onClick={() => handleSubmit()}
        />
      </DialogActions>
    </Popup>
  );
};

export default AdminPopup;
