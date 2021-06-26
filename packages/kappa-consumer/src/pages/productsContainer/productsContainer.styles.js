import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
  imp: {
    display: 'flex',
    paddingTop: theme.spacing(2),
  },
  header: {
    marginBottom: theme.spacing(3),
    textAlign: 'center',
  },
  title: {
    textTransform: 'capitalize',
    transition: 'font 0.3s ease',
    transform: 'translate(1px, 1px)',
  },
  headerMenu: {
    position: 'sticky',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    zIndex: 1,
    top: 0,
    paddingBottom: theme.spacing(1),
  },
  fontShrink: {
    animation: 'fontShrink .2s forwards',
    transition: 'all ease-in',
  },
  '@global': {
    '@keyframes fontShrink': {
      '100%': {
        transform: 'scale(0.6)',
        marginLeft: -50,
      },
    },
  },
  content: {

  },
  contentt: {
    flexGrow: 1,
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  headerTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(6),
  },
  filtersButtonContainer: {
    paddingRight: theme.spacing(6),
    display: 'flex',
    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  button: {
    backgroundColor: 'transparent !important',
    borderRadius: 'unset',
    fontWeight: 'bold',
    [theme.breakpoints.only('xs')]: {
      flex: 1,
    },
  },
  menu: {
    '& div': {
      marginTop: theme.spacing(6.8),
    },
  },
  menuItem: {
    padding: theme.spacing(1),
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(3, 0),
  },
}));
