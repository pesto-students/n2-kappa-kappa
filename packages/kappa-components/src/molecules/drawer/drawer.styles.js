import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    border: '2px solid',
    position: 'relative',
  },
  left: {
    borderTopRightRadius: 60,
    borderLeft: 'unset',
  },
  right: {
    borderTopLeftRadius: 60,
    borderRight: 'unset',
  },
  largeWidth: {
    width: 380,
  },
  smallWidth: {
    width: 260,
  },
  fullWidth: {
    width: '100%',
    height: '100%',
  },
}));
