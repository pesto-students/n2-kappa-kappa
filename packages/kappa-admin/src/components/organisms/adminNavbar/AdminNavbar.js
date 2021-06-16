import React from 'react';

/* COMPONENTS */
import Button from '@kappa/components/src/atoms/button';

/* STYLES */
import useStyles from './adminNavbar.styles';

const AdminNavbar = () => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      label="Account"
    />
  );
};

export default AdminNavbar;
