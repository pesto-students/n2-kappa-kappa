import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  button: {
    alignSelf: 'flex-end',
    color: '#fff',
  },
  logoContainer: {
    display: 'flex',
    padding: theme.spacing(2, 0),
  },
  logo: {
    maxWidth: 200,
    // height: '100%',
    alignSelf: 'center',
  },
}));
