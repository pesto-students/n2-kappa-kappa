import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    position: 'relative',
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    borderTop: `1px solid ${theme.palette.primary.main}`,
    width: '100%',
    '& .MuiMobileStepper-dotActive': {
      background: theme.palette.primary.main,
      color: theme.palette.primary.main,
    },
    '& .MuiMobileStepper-dot': {
      width: 10,
      height: 10,
    },
  },
  content: {
    position: 'absolute',
    top: 'auto',
    bottom: 150,
    textAlign: 'left',
    left: 0,
    right: 0,
    transform: 'none',
    height: 300,
    padding: '0 70px',
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      top: 80,
    },
  },
  contentHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      textAlign: 'center',
    },
  },
  header: {
    fontSize: 20, 
    marginBottom: 10, 
    color: '#fff',
  },
  subHeader: {
    fontWeight: 'bold', 
    fontSize: 28, 
    marginBottom: 60, 
    color: '#fff',
    maxWidth: '50%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'unset',
    }
  },
  button: {
    width: 250, 
    background: '#5BB02D !important', 
    color: '#fff', 
    height: 50, 
    fontSize: 16, 
    borderRadius: 15,
  },
  carouselDots: {
    position: 'absolute',
    bottom: 50,
    right: 100,
    background: 'transparent',
    [theme.breakpoints.down('sm')]: {
      left: 10,
    },
  },
  img: {
    display: 'block',
    overflow: 'hidden',
    width: '100vw',
    maxWidth: '100vw',
    height: 650,
    objectFit: 'cover',
    [theme.breakpoints.only('sm')]: {
      maxWidth: 960,
      width: 960,
      height: 600,
      objectFit: 'cover',
      objectPosition: '-450px center',
    },
    [theme.breakpoints.only('xs')]: {
      maxWidth: 600,
      width: 600,
      height: 600,
      objectFit: 'cover',
      objectPosition: '-780px center',
    },
  },
}));
