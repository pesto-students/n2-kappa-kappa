/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';

// Styles
import useStyles from './drawer.styles';

export default function CustomDrawer(props) {
  const {
    children,
    isDrawerVisible,
    setIsDrawerVisible,
    anchor,
    left,
    large,
    small,
    full,
    right,
  } = props;

  const classes = useStyles();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setIsDrawerVisible(open);
  };

  return (
    <Drawer
      anchor={anchor}
      open={isDrawerVisible}
      onClose={toggleDrawer(false)}
      classes={{
        paper: clsx(
          classes.paper,
          anchor === 'left' && classes.left,
          anchor === 'right' && right && classes.right,
          large && classes.largeWidth,
          small && classes.smallWidth,
          full && classes.fullWidth
        ),
      }}
      {...props}
    >
      {children}
    </Drawer>
  );
}
