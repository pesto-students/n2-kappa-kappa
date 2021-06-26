import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    margin: theme.spacing(8, 'auto'),
  },
  slideImageContainer: {
    maxWidth: 450,
    flexGrow: 1,
    '& .MuiMobileStepper-root': {
      background: 'unset',
    },
  },
  image: {
    height: 480,
    display: 'block',
    maxWidth: 450,
    overflow: 'hidden',
    width: '100%',
  },
  leftSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  productDetailsContainer: {
    height: '90%',
    [theme.breakpoints.only('xs')]: {
      height: 380,
      alignItems: 'center',
      textAlign: 'center',
    },
  },
  quantityGridContainer: {
    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  productActionsContainer: {
    justifyContent: 'flex-end',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  cartButtonContainer: {
    width: '100%',
  },
  cartButton: {
    borderRadius: 12,
    width: '60%',
    padding: theme.spacing(2),
    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  description: {
    marginTop: theme.spacing(4),
    maxWidth: 500,
  },
}));
