import React from 'react';
import { Divider } from '@material-ui/core';

const CustomDivider = (props) => (
  <Divider {...props} style={{ background: props.color }} />
);

export default CustomDivider;
