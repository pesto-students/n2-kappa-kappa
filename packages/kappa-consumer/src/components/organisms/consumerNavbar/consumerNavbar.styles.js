import { makeStyles, fade } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
  sectionLeftDesktop: {
    flex: 1,
  },
  tabs: {
    '& .MuiTab-root': {
      minWidth: 100, // a number of your choice
      width: 100,
    },
    '& .Mui-selected > .MuiTab-wrapper': {
      fontWeight: 'bold',
    },
  },
  logoContainer: {
    display: 'flex',
  },
  logo: {
    maxWidth: 200,
    // height: '100%',
    alignSelf: 'center',
  },
  tab: {
    padding: theme.spacing(3, 0),
    textAlign: 'start',
    // color: theme.palette.common.white,
  },
  sectionRightDesktop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  button: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: theme.palette.text.white,
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  sectionLeftMobile: {
    flexGrow: 1,
  },
  iconButton: {
    color: theme.palette.text.white,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadiusSecondary,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    fontSize: 18,
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '22ch',
      '&:focus': {
        width: '40ch',
      },
    },
  },
}));
