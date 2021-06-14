import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: theme.spacing(2),
  },
  content: {
    marginTop: theme.spacing(2),
  },
}));
