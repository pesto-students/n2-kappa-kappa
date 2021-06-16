import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    '& .MuiDialog-paper': {
      margin: 'unset',
    },
    '& .MuiFormHelperText-root': {
      lineHeight: 'unset',
    },
    // maxWidth: 380,
  },
}));
