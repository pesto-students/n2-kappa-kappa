import React from 'react';

import Navbar from 'kappaComponents/organisms/navbar';
import Footer from '../../components/organisms/footer';

// styles
import useStyles from './primaryLayout.styles';

const PrimaryLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.content}>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default PrimaryLayout;
