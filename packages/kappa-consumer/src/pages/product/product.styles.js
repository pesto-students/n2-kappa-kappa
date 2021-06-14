import { makeStyles } from '@material-ui/core/styles';

const borderRadius = 27;

export default makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  slideImageContainer: {
    maxWidth: 350,
    flexGrow: 1,
    '& .MuiMobileStepper-root': {
      background: 'unset',
    },
  },
  image: {
    height: 355,
    display: 'block',
    maxWidth: 350,
    overflow: 'hidden',
    width: '100%',
    borderRadius,
  },
  leftSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  rightSection: { },
  productDetailsContainer: {
    height: '100%',
    [theme.breakpoints.only('xs')]: {
      height: 410,
      alignItems: 'center',
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
  productDescriptionContainer: {
    [theme.breakpoints.only('xs')]: {
      textAlign: 'center',
    },
  },
}));
