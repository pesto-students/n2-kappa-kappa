import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
  },
  content: {
    padding: theme.spacing(0, 3),
  },
  textField: {
    width: '49%',
  },
}));
