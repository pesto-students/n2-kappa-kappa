import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import clsx from 'clsx';

/* RESPONSIVE */
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

/* COMPONENTS */
import Button from '@kappa/components/src/atoms/button';
import Typography from '@kappa/components/src/atoms/typography';
import Paper from '@kappa/components/src/atoms/paper';
import Loader from '@kappa/components/src/atoms/loader';
import Drawer from '@kappa/components/src/molecules/drawer';
import QuantityButton from '../../molecules/quantityButton';

/* STYLES */
import useStyles from './cart.styles';

/* SERVICES */
import ActionCreators from '../../../actions';

/* ASSETS */
// images
import CloseIcon from '../../../assets/images/close';
import SadIcon from '../../../assets/images/sad';

/* CONSTANTS */
import BASE_URL from '../../../constants/baseURL';

/* UTILS */
import isEmpty from '../../../utils/isEmpty.utils';
import get from '../../../utils/get.utils';

/* READERS */
import cartReaders from '../../../readers/cart.readers';

/* HELPERS */
import incrementProduct from './helpers/incrementProduct.helpers';
import deleteProduct from './helpers/deleteProduct.helpers';
import decrementProduct from './helpers/decrementProduct.helpers';

const renderEmptyProduct = () => (
  <>
    <Typography gutterBottom>
      You haven&apos;t added anything yet
    </Typography>
    <SadIcon fontSize='large' />
  </>
)

const renderProduct = (
  fetching, 
  updateCart,
  incrementProduct, 
  decrementProduct, 
  deleteProduct,
  deleteProductFromCart,
  classes
  ) => 
  (cartData) => (
    <div key={cartReaders.id(cartData)} className={classes.product}>
    <img
      className={classes.image}
      src={`${BASE_URL}/api/v1/files/${(!isEmpty(get(cartData, 'product.images')))
        && cartData.product.images[0]
      }`}
      alt={cartReaders.name(cartData.product)}
    />
    <div className={classes.productDescription}>
      <div>
        <Typography variant='h6'>
          {cartReaders.name(cartData.product)}
        </Typography>
        <Typography variant='body1'>
          ${cartReaders.price(cartData.product)}
        </Typography>
      </div>
      <div className={classes.productActions}>
        <QuantityButton
          quantity={cartReaders.quantity(cartData)}
          incrementProduct={incrementProduct(cartData, updateCart)}
          decrementProduct={decrementProduct(cartData, updateCart, deleteProductFromCart)}
          fetching={fetching}
        />
        <Button
          label='REMOVE'
          className={classes.removeButton}
          onClick={deleteProduct(cartReaders.id(cartData), deleteProductFromCart)}
        />
      </div>
      </div>
    </div>
  )

const Cart = ({
  getCart,
  cart,
  fetching,
  isCartVisible,
  setIsCartVisible,
  deleteProductFromCart,
  updateCart,
  user,
}) => {
  const classes = useStyles();
  // responsive
  const theme = useTheme();
  const isXtraSmall = useMediaQuery(theme.breakpoints.only('xs'));

  useEffect(() => {
    if (user && user.name) getCart();
  }, [user, getCart]);

  const renderCart = () => {
    if (fetching) {
      return <Loader padding />
    }

    if(isEmpty(cart)) {
      return renderEmptyProduct();
    }

    return cart.map(renderProduct(
      fetching, 
      updateCart,
      incrementProduct, 
      decrementProduct, 
      deleteProduct, 
      deleteProductFromCart,
      classes))
  }

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

      <div className={classes.root}>
        <div className={classes.header}>
          <Typography variant='h5' gutterBottom>
            CART
          </Typography>
          <Typography variant='caption' gutterBottom>
            You are eligible for free shipping
          </Typography>
        </div>

        <div
          className={clsx(
            classes.productsList,
            isEmpty(cart) && classes.emptyCart
          )}
        >
          {renderCart()}
        </div>
        
        <Paper className={classes.footer} elevation={10}>
          <Typography variant='caption' gutterBottom>
            Shipping & taxes calculated at checkout
          </Typography>
          <Button
            variant='contained'
            color='primary'
            label='Checkout'
            className={classes.checkoutButton}
            component={Link}
            onClick={() => setIsCartVisible(false)}
            to='/checkout'
          />
        </Paper>
      </div>
    </Drawer>
  );
};

Cart.propTypes = {
  user: PropTypes.object,
  // getCart,
  // cart,
  // fetching,
  // isCartVisible,
  // setIsCartVisible,
  // updateCart,
  // deleteProductFromCart,
};

Cart.defaultProps = {
  user: {},
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    cart: state.cart.cart,
    fetching: state.cart.fetching,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
