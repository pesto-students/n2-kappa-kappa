import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

/* COMPONENTS */
import Drawer from '@kappa/components/src/molecules/drawer';
import List from '@kappa/components/src/atoms/list';
import Divider from '@kappa/components/src/atoms/divider';
import ListItem from '../../../../../components/atoms/listItem';
import ListItemIcon from '../../../../../components/atoms/listItemIcon';
import ListItemText from '../../../../../components/atoms/listItemText';

/* STYLES */
import useStyles from './menu.styles';

/* UTILS */
import { MENU } from '../../../../../utils/constants';

export default function Menu({ children }) {
  const classes = useStyles();

  const [selectedItem, setSelectedItem] = useState('Orders');

  const handleListItemClick = (label) => {
    console.log('wdokwodk', )
    setSelectedItem(label);
  };

  const history = useHistory();

  React.useEffect(() => {
    const route = history.location.pathname.substring(1);
    if(route.length !== 0) {
      setSelectedItem(history.location.pathname.substring(1));
    } else {
      setSelectedItem('orders');
    }
  }, [history])

  return (
    <div className={classes.root}>
      {selectedItem && (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerContainer}>
          <List>
            {MENU.map((list, index) => (
              <ListItem
                button
                key={list.name}
                selected={selectedItem === list.name}
                onClick={() => handleListItemClick(list.name)}
                component={Link}
                to={`/${list.route}`}
              >
                <ListItemIcon><list.icon /></ListItemIcon>
                <ListItemText className={classes.listLabel} primary={list.name} />
              </ListItem>
            ))}
          </List>
          <Divider />
          {/* <List>
            <ListItem
              button
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List> */}
        </div>
      </Drawer>
      )}
      <main className={classes.content}>
        {children}
      </main>
    </div>
  );
}
