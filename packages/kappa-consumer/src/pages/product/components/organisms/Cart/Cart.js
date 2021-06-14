import React from 'react';

// responsive
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

/* COMPONENTS */
// atoms
import Button from 'kappaComponents/atoms/button';
import Typography from 'kappaComponents/atoms/typography';
import Paper from 'kappaComponents/atoms/paper';

// molecules
import Drawer from 'kappaComponents/molecules/drawer';
import QuantityButton from '../../../../../components/molecules/quantityButton';

/* STYLES */
import useStyles from './cart.styles';

/* ASSETS */
// images
import CloseIcon from '../../../../../assets/images/close';

function Cart(props) {
  const classes = useStyles();

  const {
    data,
    isCartVisible,
    setIsCartVisible,
    cartQuantity,
    setCartQuantity,
  } = props;

  // responsive
  const theme = useTheme();
  const isXtraSmall = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <Drawer
      isDrawerVisible={isCartVisible}
      setIsDrawerVisible={setIsCartVisible}
      anchor={isXtraSmall ? 'bottom' : 'right'}
      large={!isXtraSmall}
      full={isXtraSmall}
    >
      {isXtraSmall && (
        <CloseIcon
          className={classes.closeIcon}
          onClick={() => setIsCartVisible(false)}
        />
      )}
      <div className={classes.headerContainer}>
        <div className={classes.header}>
          <Typography variant="h5" gutterBottom>CART</Typography>
          <Typography variant="caption" gutterBottom>You are eligible for free shipping</Typography>
        </div>
        <div className={classes.productsList}>
          {data.map((step) => (
            <div
              key={step.label}
              className={classes.product}
            >
              <img
                className={classes.image}
                src={step.img_url}
                alt={step.name}
              />
              <div className={classes.productDescription}>
                <div>
                  <Typography variant="h6">Product Name</Typography>
                  <Typography variant="body1">$47</Typography>
                </div>
                <div className={classes.productActions}>
                  <QuantityButton
                    quantity={cartQuantity}
                    setQuantity={setCartQuantity}
                  />
                  <Button label="REMOVE" className={classes.removeButton} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <Paper
          className={classes.footer}
          elevation={10}
        >
          <Typography variant="caption" gutterBottom>
            Shipping & taxes calculated at checkout
          </Typography>
          <Button variant="contained" color="primary" label="Checkout" className={classes.checkoutButton} />
        </Paper>
      </div>
    </Drawer>
  );
}

export default Cart;
