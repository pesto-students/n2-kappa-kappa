import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  actionButton: {
    padding: 'unset',
  },
  root: {
    maxHeight: 480,
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
