import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    background: '#281659',
    position: 'relative',
    width: '100%',
    bottom: 0,
    // paddingTop: theme.spacing(8),
    // paddingBottom: theme.spacing(10),
  },
  // flex: {
  //   flex: 1,
  //   padding: theme.spacing(5),
  // },
  // about: {
  //   padding: theme.spacing(5),
  //   flex: 2,
  // },
  header: {
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 0),
  },
  divider: {
    background: '#3e0e8f',
  },
  white: {
    color: theme.palette.common.white,
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  headerTitleContainer: {
    marginRight: theme.spacing(4),
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  buttonText: {
    color: theme.palette.common.white,
    padding: 'unset !important',
    minWidth: 'unset !important',
    fontWeight: 200,
    fontSize: 16,
    textAlign: 'start',
  },
  body: {
    padding: theme.spacing(7, 0),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  // listItem: {
  //   // textAlign: 'end',
  // },
}));
