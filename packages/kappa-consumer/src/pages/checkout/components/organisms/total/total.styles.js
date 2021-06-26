import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    position: 'relative',
    flexDirection: 'column',
  },
  productDetails: {
    width: '250px',
    padding: '10px',
    background: '#FAFAFA',
    [theme.breakpoints.down('md')]: {
      order: 1,
      justifyContent: 'center',
      height: '100%',
    },
  },
  separator: {
    background: '#A6A6A6',
    width: '100%',
    height: '1px',
  },
  flex: {
    display: 'flex',
  },
  alignCenter: {
    alignItems: 'center',
  },
  py_16: {
    padding: '16px',
  },
}));
