/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';

// Styles
import useStyles from './filtersPanel.styles';

export default function FiltersPanel(props) {
  const { toggleFiltersPanel, isFiltersPanelVisible } = props;
  const classes = useStyles();

  return (
    <Drawer anchor="left" open={isFiltersPanelVisible} onClose={toggleFiltersPanel(false)} className={classes.root}>
      <div
        className={clsx(classes.list)}
        onClick={toggleFiltersPanel(false)}
        onKeyDown={toggleFiltersPanel(false)}
      >
        <div className={classes.header}>
          <Typography variant="h5">FILTERS</Typography>
        </div>
        <Divider />
        <div className={classes.content} style={{ marginBottom: 30 }}>
          <Typography variant="body1" className={classes.title}>CATEGORY</Typography>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
            <div button key={text} className={classes.listItem}>
              <Link
                component="button"
                variant="body2"
                className={classes.categoryItem}
                onClick={() => {}}
              >
                {text}
              </Link>
            </div>
          ))}
        </div>
        <Divider />
        <div className={classes.content} style={{ marginBottom: 30 }}>
          <Typography variant="body1" className={classes.title}>PRICE</Typography>
          {['$0 to $10', '$0 to $10', '$0 to $10', '$0 to $10'].map((text) => (
            <div button key={text} className={classes.listItem}>
              <Link
                component="button"
                variant="body2"
                className={classes.categoryItem}
                onClick={() => {
                }}
              >
                {text}
              </Link>
              {' '}

            </div>
          ))}
        </div>
        {/* <Divider /> */}
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </div>
    </Drawer>
  );
}
