import React from 'react';

/* COMPONENTS */
import Grid from 'kappaComponents/atoms/grid';
import Card from '../../atoms/card';

/* STYLES */
import useStyles from './header.styles';

/* UTILS */

/* ICONS */

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={10}
      >
        <Grid item xs={6} sm={4}>
          <Card />
        </Grid>
        <Grid item xs={6} sm={4}>
          <Card />
        </Grid>
        <Grid item xs={6} sm={4}>
          <Card />
        </Grid>
      </Grid>
    </div>
  );
}
