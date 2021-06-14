import { makeStyles } from '@material-ui/core/styles';

const borderRadius = 27;

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    border: `1px solid ${theme.palette.grey[500]}`,
    background: '#FAF8FF',
    justifyContent: 'space-between',
    borderRadius,
  },
  button: {
    padding: theme.spacing(1),
  },
}));
