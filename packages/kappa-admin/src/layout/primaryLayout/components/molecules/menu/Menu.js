import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
import { menu } from '../../../../../utils/constants';

/* ICONS */
import SettingsIcon from '../../../../../assets/images/settings';

export default function Menu({ children }) {
  const classes = useStyles();

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerContainer}>
          <List>
            {menu.map((list, index) => (
              <ListItem
                button
                key={list.name}
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}
                component={Link}
                to={`/${list.route}`}
              >
                <ListItemIcon><list.icon /></ListItemIcon>
                <ListItemText primary={list.name} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem
              button
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        {children}
      </main>
    </div>
  );
}
