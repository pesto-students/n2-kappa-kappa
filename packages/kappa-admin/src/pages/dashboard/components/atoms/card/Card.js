import React from 'react';

/* ICONS */
import PersonIcon from '@material-ui/icons/Person';

/* COMPONENTS */
import Paper from 'kappaComponents/atoms/paper';
import Typography from 'kappaComponents/atoms/typography';

/* STYLES */
import useStyles from './card.styles';

/* UTILS */

export default function Header(props) {
  const classes = useStyles();

  const {
    icon,

    title,
  } = props;

  return (
    <Paper className={classes.root}>
      <PersonIcon fontSize="medium" className={classes.icon} />
      <Typography variant="h4" gutterBottom>83</Typography>
      <Typography variant="body2">Registered Users</Typography>
    </Paper>
  );
}
