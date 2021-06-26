import React from 'react';

/* COMPONENTS */
// atoms
import Skeleton from '@kappa/components/src/atoms/skeleton';

/* STYLES */
import useStyles from './navbarLoader.styles';

const SkeletonLoader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Skeleton variant="rect" height={80} className={classes.navbar} />
      <Skeleton variant="rect" style={{ flexGrow: 1, marginBottom: 20 }} />
      <Skeleton variant="rect" height={100} />
    </div>
  );
};

export default SkeletonLoader;
