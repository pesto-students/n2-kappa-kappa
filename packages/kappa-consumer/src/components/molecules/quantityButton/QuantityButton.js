import React from 'react';

/* COMPONENTS */
// atoms
import IconButton from '@kappa/components/src/atoms/iconButton';
import Typography from '@kappa/components/src/atoms/typography';

/* ASSETS */
// images
import RemoveIcon from '../../../assets/images/remove';
import AddIcon from '../../../assets/images/add';

/* STYLES */
import useStyles from './quantityButton.styles';

const QuantityButton = (props) => {
  const {
    quantity,
    fetching,
    incrementProduct,
    decrementProduct,
    localIncrementProduct,
    localDecrementProduct,
  } = props;

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton disabled={fetching} onClick={localDecrementProduct || decrementProduct} className={classes.button}>
        <RemoveIcon color="primary" fontSize="small" />
      </IconButton>
      <Typography color="primary">{quantity}</Typography>

      <IconButton disabled={fetching} onClick={localIncrementProduct || incrementProduct} className={classes.button}>
        <AddIcon color="primary" fontSize="small" />
      </IconButton>
    </div>
  );
};

export default QuantityButton;
