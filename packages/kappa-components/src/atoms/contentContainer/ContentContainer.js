import React from 'react';
import clsx from 'clsx';

import { Container } from '@material-ui/core';

// Styles
import useStyles from './contentContainer.styles';

export default function ContentContainer(props) {
  const { className } = props;
  const classes = useStyles();

  return <Container {...props} maxWidth="xl" className={clsx(classes.root, className)}  />;
};
