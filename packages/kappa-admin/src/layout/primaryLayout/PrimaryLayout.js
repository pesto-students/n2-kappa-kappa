import React from 'react';

import Navbar from '@kappa/components/src/organisms/navbar';
import AdminNavbar from '../../components/organisms/adminNavbar';

/* COMPONENTS */
import Menu from './components/molecules/menu';

/* STYLES */
import useStyles from './primaryLayout.styles';

const PrimaryLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar isAdmin>
        <AdminNavbar />
      </Navbar>
      <div className={classes.content}>
        <Menu>
          {children}
        </Menu>
      </div>
    </div>
  );
};

export default PrimaryLayout;
