import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 400,
  },
  card: {
   border: '1px solid #dedede',
   position: 'relative',
   top: '0',
   transition: 'top ease 0.2s',
   '&:hover': {
    top: '-6px',
   }
  },
}));
