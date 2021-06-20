import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    paddingTop: theme.spacing(9),
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3, 6),
  },
  listLabel: {
    textTransform: 'capitalize',
  },
}));
