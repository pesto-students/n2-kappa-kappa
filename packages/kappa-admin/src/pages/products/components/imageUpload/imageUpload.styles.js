import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  imageContainer: {
    width: 70,
    height: 70,
    margin: theme.spacing(1),
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2),
  },
  image: {
    width: 70,
    height: 70,
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));
