import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: theme.spacing(4),
    flexDirection: 'column',
    borderRadius: theme.spacing(2),
  },
  icon: {
    marginBottom: theme.spacing(1),
  },
}));
