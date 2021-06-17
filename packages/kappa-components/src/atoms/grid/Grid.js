import React from 'react';

import { Grid } from '@material-ui/core';

const CustomGrid = (props) => {
  const { container } = props;

  return (
    <Grid
      style={{
        // margin: container && 0,
        // width: container && '100%',
      }}
      {...props}
    />
  );
};

export default CustomGrid;
