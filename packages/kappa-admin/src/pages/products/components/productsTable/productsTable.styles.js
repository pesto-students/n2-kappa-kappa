import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  root: {
    maxHeight: 480,
  },
  category: {
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
  actions: {
    display: 'flex',
  },
  editIcon: {
    padding: 'unset',
    color: '#6587EE',
  },
  deleteIcon: {
    marginLeft: theme.spacing(1.5),
    padding: 'unset',
    color: '#EE6565',
  }
}));
