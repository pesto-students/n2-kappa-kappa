import React from 'react';

import Navbar from 'kappaComponents/organisms/navbar';

/* COMPONENTS */
import Menu from './components/molecules/menu';

/* STYLES */
import useStyles from './primaryLayout.styles';

const PrimaryLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar isAdmin />
      <div className={classes.content}>
        <Menu>
          <main>{children}</main>
        </Menu>
      </div>
    </div>
  );
};

export default PrimaryLayout;
