import React from 'react';

/* COMPONENTS */
import Grid from 'kappaComponents/atoms/grid';
// atoms

import Typography from 'kappaComponents/atoms/typography';

/* STYLES */

import useStyles from './total.styles';

const Total = () => {
  const classes = useStyles();
  return (
    <Grid
      item
      className={`${classes.productDetails} ${classes.root}`}
      lg={4}
      xs={12}
      height='100%'
    >
      <Grid container>
        <Grid item xs={12} p={4}>
          <div
            className={`${classes.flex} ${classes.alignCenter} ${classes.py_16}`}
          ></div>
        </Grid>
        <div className={classes.separator} />
        <Grid item xs={12}>
          <div className={`${classes.flex} ${classes.py_16}`}>
            <Typography color='textPrimary' variant='body2'>
              Subtotal :
            </Typography>
            <Typography color='textPrimary' variant='body2'>
              $130
            </Typography>
          </div>
          <div className={`${classes.flex} ${classes.py_16}`}>
            <Typography color='textPrimary' variant='body2'>
              shipping :
            </Typography>
            <Typography color='textPrimary' variant='body2'>
              Calculate next step
            </Typography>
          </div>
        </Grid>
        <div className={classes.separator} />
        <Grid item xs={12}>
          <div className={`${classes.flex} ${classes.py_16}`}>
            <Typography color='textPrimary' variant='body2'>
              Total :
            </Typography>
            <Typography color='textPrimary' variant='body2'>
              USD $155
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Total;
