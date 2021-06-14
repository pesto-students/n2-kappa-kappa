import React from 'react';

import { Container } from '@material-ui/core';

// Styles
import useStyles from './contentContainer.styles';

const ContentContainer = (props) => {
  const classes = useStyles();

  return <Container className={classes.root} {...props} />;
};

export default ContentContainer;
