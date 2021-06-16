import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
  header: {
    marginBottom: theme.spacing(3),
    textAlign: 'center',
  },
  title: {
    textTransform: 'capitalize',
  },
  headerMenu: {
    position: 'fixed',
    width: '100%',
    borderTop: `1px solid ${theme.palette.grey[500]}`,
    borderBottom: `1px solid ${theme.palette.grey[500]}`,
    background: '#FAF8FF',
    display: 'flex',
    justifyContent: 'space-between',
    zIndex: 1100,
  },
  layoutIconsContainer: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.only('xs')]: {
      display: 'none',
    },
  },
  filtersButtonContainer: {
    display: 'flex',
    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  button: {
    padding: theme.spacing(2, 10),
    borderRadius: 'unset',
    borderLeft: `1px solid ${theme.palette.grey[500]}`,
    fontWeight: 'bold',
    [theme.breakpoints.only('xs')]: {
      flex: 1,
    },
  },
  menu: {
    '& div': {
      marginTop: theme.spacing(7.8),
    },
  },
  menuItem: {
    padding: theme.spacing(1),
  },
  content: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(12),
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(3, 0),
  },
}));
