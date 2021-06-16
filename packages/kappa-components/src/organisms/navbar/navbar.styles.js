import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTab-root': {
      minWidth: 'unset',
      marginRight: 20,
    },
    marginBottom: 50,
  },
  appBar: {
    background: '#281659',
    paddingLeft: 30,
    paddingRight: 30,
    borderBottom: '2px solid #fff',
  },
  adminAppBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionLeftDesktop: {
    flexGrow: 1,
  },
  tabs: {
    '& .MuiTab-wrapper': {
      color: '#fff',
    },
    '& .Mui-selected > .MuiTab-wrapper': {
      color: theme.palette.primary.main,
    },
  },
  tab: {
    color: theme.palette.common.white,
  },
  sectionRightDesktop: {
    display: 'flex',
  },
  button: {
    color: theme.palette.common.white,
    marginRight: 20,
    marginLeft: 20,
  },
  cart: {
    marginRight: 20,
    marginLeft: 20,
    fontSize: 14,
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
    color: theme.palette.text.primary,
  },
}));
