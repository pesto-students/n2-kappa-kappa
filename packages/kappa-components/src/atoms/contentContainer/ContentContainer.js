import React from 'react';
import clsx from 'clsx';

import { Container } from '@material-ui/core';

// Styles
import useStyles from './contentContainer.styles';

export default function ContentContainer(props) {
  const { className, maxWidth } = props;
  const classes = useStyles();

  return <Container {...props} maxWidth={maxWidth || "xl"} className={clsx(classes.root, className)}  />;
};
