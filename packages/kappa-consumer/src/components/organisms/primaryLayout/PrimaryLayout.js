import React from 'react';

/* COMPONENTS */
import Navbar from '@kappa/components/src/organisms/navbar';
import ConsumerNavbar from '../../../components/organisms/consumerNavbar';

import Footer from '../../../components/organisms/footer';

/* STYLES */
import useStyles from './primaryLayout.styles';

const PrimaryLayout = ({
  children,
  categories,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar>
        <ConsumerNavbar categories={categories} />
      </Navbar>
      <div className={classes.content}>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default PrimaryLayout;
