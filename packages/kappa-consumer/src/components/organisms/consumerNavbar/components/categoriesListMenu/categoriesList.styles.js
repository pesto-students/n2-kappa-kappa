import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuPanel: {
    maxWidth: '100%',
    width: '100%',
    // height: 400,
    position: 'absolute',
    top: 70,
    boxSizing: 'border-box',
    padding: theme.spacing(4),
    display: 'flex',
  },
  list: {
    color: '#111',
    fontSize: 16,
    cursor: 'pointer !important',
    '&:hover': {
      opacity: 0.6,
      textDecoration: 'unset',
    },
    padding: 'unset !important',
    width: '50%',
    textTransform: 'capitalize',
  },
}));
