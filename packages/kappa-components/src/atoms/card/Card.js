import React from 'react';
import { Card } from '@material-ui/core';

import clsx from 'clsx';

// Styles
import useStyles from './card.styles';

export default function PrimaryCard(props) {
  const { className } = props;
  const classes = useStyles();

  return <Card {...props} className={clsx(classes.root, className)} />;
}
