import React from 'react';

/* COMPONENTS */
import Drawer from 'kappaComponents/molecules/drawer';

/* STYLES */
import useStyles from './menu.styles';

export default function Menu({ children, anchor }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor={anchor}
      >
        <div className={classes.drawerContainer}>
          {children}
        </div>
      </Drawer>
    </div>
  );
}
