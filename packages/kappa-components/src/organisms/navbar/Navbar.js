import React from 'react';

import { AppBar } from '@material-ui/core';
import clsx from 'clsx';

// Styles
import useStyles from './navbar.styles';

const Navbar = ({ isAdmin, children, isHidden }) => {
  const classes = useStyles();
  console.log('qiwjdi,', isAdmin);
  return (
    <div className={clsx(classes.root, isAdmin && classes.adminAppBar)}>
      <AppBar position='static' className={classes.appBar}>
        {children}
      </AppBar>
    </div>
  );
};

export default Navbar;
