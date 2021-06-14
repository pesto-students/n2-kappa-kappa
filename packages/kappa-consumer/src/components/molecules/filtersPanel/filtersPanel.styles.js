import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiPaper-root': {
      borderTopRightRadius: 60,
      width: 260,
      border: '2px solid',
      borderLeft: 'unset',
    },
  },
  fullList: {
    width: 'auto',
  },
  header: {
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    textAlign: 'end',
  },
  content: {
    padding: 25,
    paddingRight: 35,
  },
  title: {
    textAlign: 'end',
    marginBottom: theme.spacing(3),
  },
  categoryItem: {
    marginBottom: theme.spacing(2),
    color: '#6a6a6a',
  },
}));
