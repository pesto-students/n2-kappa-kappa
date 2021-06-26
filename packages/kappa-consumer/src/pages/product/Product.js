import React, { useEffect } from 'react';

/* REDUX */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* ROUTER */
import { useParams } from 'react-router-dom';

/* PROP TYPES */
import PropTypes from 'prop-types';

/* COMPONENTS */
import SwipeableViews from 'react-swipeable-views';
import MobileStepper from '@material-ui/core/MobileStepper';
import ContentContainer from '@kappa/components/src/atoms/contentContainer';
import Button from '@kappa/components/src/atoms/button';
import IconButton from '@kappa/components/src/atoms/iconButton';
import Typography from '@kappa/components/src/atoms/typography';
import Grid from '@kappa/components/src/atoms/grid';
import Loader from '@kappa/components/src/atoms/loader';
import QuantityButton from '../../components/molecules/quantityButton';
import NoProduct from './components/NoProduct';
import RecommendedProducts from '../../components/organisms/recommendedProducts';
import Cart from '../../components/organisms/cart';

/* STYLES */
import useStyles from './product.styles';

/* ASSETS */
// images
import ArrowRightIcon from '../../assets/images/arrowRight';
import ArrowLeftIcon from '../../assets/images/arrowLeft';
import ShoppingCartIcon from '../../assets/images/shoppingCart';

/* SERVICES */
import ActionCreators from '../../actions';

/* CONSTANTS */
import BASE_URL from '../../constants/baseURL';

/* READERS */
import productReader from '../../readers/productReader.readers';

const Product = ({
  getAProduct,
  addToCart,
  product,
  fetching,
  setIsSignInOpen,
  user,
  isValid,
  recommendedProductsInfo,
  recommendedProductsFetching,
}) => {
  const classes = useStyles();

  const [quantity, setQuantity] = React.useState(1);
  const [index, setIndex] = React.useState(0);
  const [isCartVisible, setIsCartVisible] = React.useState(false);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getAProduct(id);
    }
  }, [id]);

  const handleChangeIndex = (i) => {
    setIndex(i);
  };

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleCart = () => {
    setIsCartVisible(true);
    addToCart({
      item: {
        product: productReader.id(product),
        quantity,
      },
    });
  };

  const localIncrementProduct = () => {
    if (quantity < 10) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const localDecrementProduct = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const renderProduct = (image) => (
    <div key={image}>
      <img
        className={classes.image}
        src={`${BASE_URL}/api/v1/files/${image}`}
        alt={image}
      />
    </div>
  )

  if (fetching || recommendedProductsFetching) {
    return <Loader padding />
  }

  return (
    <>
     {!isValid 
     ? (<NoProduct />)
     : (
        <ContentContainer maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item sm={6} xs={12} className={classes.leftSection}>
            <div className={classes.slideImageContainer}>
              <SwipeableViews
                index={activeStep}
                onChangeIndex={handleChangeIndex}
                enableMouseEvents
              >
                {(productReader.images(product) || []).map(renderProduct)}
              </SwipeableViews>

              <MobileStepper
                variant='dots'
                steps={(productReader.images(product) || []).length}
                position='static'
                activeStep={activeStep}
                className={classes.slideImageContainer}
                nextButton={
                  <IconButton
                    onClick={handleNext}
                    disabled={
                      activeStep ===
                      ((productReader.images(product) || []).length - 1)}
                  >
                    <ArrowRightIcon fontSize='large' />
                  </IconButton>
                }
                backButton={
                  <IconButton
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    <ArrowLeftIcon fontSize='large' />
                  </IconButton>
                }
              />
            </div>
          </Grid>

          <Grid item sm={6} xs={12} className={classes.rightSection}>
            <Grid
              container
              direction='column'
              justify='space-between'
              alignItems='flex-start'
              className={classes.productDetailsContainer}
            >
              <Grid item>
                <Typography variant='h4' color='textPrimary' gutterBottom>
                  {product.title}
                </Typography>
                <Typography variant="caption">Free Shipping*</Typography>
                <Typography variant='h5' color='textPrimary' gutterBottom>
                  ${product.price}
                </Typography>
                <Typography variant="body2" gutterBottom className={classes.description}>
                  {product.description}
                </Typography>
              </Grid>

              <Grid item className={classes.quantityGridContainer}>
                <QuantityButton
                  quantity={quantity}
                  setQuantity={setQuantity}
                  localIncrementProduct={localIncrementProduct}
                  localDecrementProduct={localDecrementProduct}
                />
              </Grid>

              <Grid item className={classes.cartButtonContainer}>
                <Button
                  startIcon={<ShoppingCartIcon />}
                  label='Add To Cart'
                  variant='contained'
                  color='primary'
                  onClick={() =>
                    user.name ? handleCart() : setIsSignInOpen(true)
                  }
                  className={classes.cartButton}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ContentContainer>
      )}
      

      <RecommendedProducts 
        title="You might also like"
        data={recommendedProductsInfo}
        layout={3}
        recommendedProductsFetching={recommendedProductsFetching}
      />

      <Cart
        isCartVisible={isCartVisible}
        setIsCartVisible={setIsCartVisible}
      />
    </>
  );
};

Product.propTypes = {
  getAProduct: PropTypes.func,
  addToCart: PropTypes.func,
  product: PropTypes.array,
  fetching: PropTypes.bool,
  setIsSignInOpen: PropTypes.func,
  user: PropTypes.object,
};

Product.defaultProps = {
  user: {},
  page: 0,
  fetching: true,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    product: state.product.product,
    isValid: state.product.isValid,
    cart: state.cart.cart,
    fetching: state.product.fetching,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
