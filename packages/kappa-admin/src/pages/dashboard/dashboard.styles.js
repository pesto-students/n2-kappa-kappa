import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  rightMenu: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  customers: {
    flex: 1,
    padding: theme.spacing(2),
  },
  orders: {
    flex: 1,
    borderTop: `1px solid ${theme.palette.grey[300]}`,
    padding: theme.spacing(2),
  },
}));
