import { makeStyles } from '@material-ui/core/styles';

const borderRadius = 8;

export default makeStyles((theme) => ({
  addressPaper: {
    minHeight: '80px',
    maxHeight: '120px',
    // width: '350px',
    padding: '16px',
    borderRadius,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '1rem',
    [theme.breakpoints.down('sm')]: {
      // width: '100%',
    },
    position: 'relative',
  },

  EditIcon: {
    position: 'absolute',
    top: -10,
    right: -10,
    background: '#E0E0E0',
    borderRadius: '50%',
    height: '24px',
    width: '24px',
    padding: '4px',
  },

  deleteIcon: {
    position: 'absolute',
    top: 40,
    right: -10,
    background: '#E0E0E0',
    borderRadius: '50%',
    height: '24px',
    width: '24px',
    padding: '4px',
  },

  'addressPaper:nth-of-type(1)': {
    marginTop: '1rem',
  },

  flex: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  scrollable: {
    'max-height': '500px',
    overflowY: 'scroll',
    marginTop: '14px',
    'max-width': '500px',
    padding: '16px',
    margin: '0 auto',
  },
}));
