import React from 'react';

/* COMPONENTS */
import Typography from 'kappaComponents/atoms/typography';
import Header from './components/molecules/header';
import RightMenu from '../../components/organisms/menu';

/* STYLES */
import useStyles from './dashboard.styles';

/* UTILS */

/* ICONS */

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <RightMenu anchor="right" isDrawerVisible>
        <div className={classes.rightMenu}>
          <div className={classes.customers}>
            <Typography variant="body1" gutterBottom>Valuable Customers</Typography>
            <Typography variant="caption">No data yet</Typography>
          </div>
          <div className={classes.orders}>
            <Typography variant="body1" gutterBottom>Recent Orders</Typography>
            <Typography variant="caption">No data yet</Typography>
          </div>
        </div>
      </RightMenu>
    </div>
  );
}
