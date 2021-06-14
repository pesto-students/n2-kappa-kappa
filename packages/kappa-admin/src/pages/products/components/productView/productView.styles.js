import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    // textAlign: 'center',
  },
  label: {
    // '& .MuiTypography-body1': {
    //   fontSize: theme.typography.caption.fontSize,
    //   color: theme.palette.grey[500],
    // },
    // marginBottom: theme.spacing(1),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // flexDirection: 'column',
    // textAlign: 'center',
  },
  content: {
    padding: theme.spacing(0, 3),
  },
  textField: {
    width: '49%',
  },
  actions: {
    // justifyContent: 'center',
    // padding: theme.spacing(3),
    // flexDirection: 'column',
    // textAlign: 'center',
  },
  button: {
    // width: '100%',
    // marginBottom: theme.spacing(1),
  },
}));
