import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  table: {
    minWidth: 650,
  },
  actionButton: {
    padding: 'unset',
    color: '#6587EE',
  },
  root: {
    maxHeight: 480,
  },
  categoryName:{
    textTransform: 'capitalize',
  },
  positiveIcon: {
    color: '#46925A',
    fontSize: 18,
  },
  negativeIcon: {
    color: '#BE4545',
    fontSize: 18,
  },
}));
