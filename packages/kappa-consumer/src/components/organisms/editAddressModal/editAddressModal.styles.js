import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '400px',
    margin: '16px',
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1em'
  },
  verticalSpacing: {
      margin: '.25rem 0'
  }
}));
