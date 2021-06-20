import React from 'react';
import { Link } from 'react-router-dom';

/* COMPONENTS */
import logo from '../../../assets/images/logo.png';

/* STYLES */
import useStyles from './adminNavbar.styles';

const AdminNavbar = () => {
  const classes = useStyles();

  return (
    <Link className={classes.logoContainer} to="/">
      <img src={logo} className={classes.logo} alt="Mr-Nomad-Logo" />
    </Link>
  );
};

export default AdminNavbar;
