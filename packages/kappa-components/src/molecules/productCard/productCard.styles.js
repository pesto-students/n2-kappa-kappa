import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    height: 300,
  },
  card: {
   border: '1px solid #c8c8c8',
   position: 'relative',
   top: '0',
   transition: 'top ease 0.2s',
   '&:hover': {
    top: '-6px',
   }
  },
  content: {
    borderTop: '1px solid #c8c8c8',
    background: theme.palette.text.ok,
  },
}));
