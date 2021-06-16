import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SwipeableViews from 'react-swipeable-views';
import MobileStepper from '@material-ui/core/MobileStepper';

/* COMPONENTS */
// atoms
import ContentContainer from '@kappa/components/src/atoms/contentContainer';
import Button from '@kappa/components/src/atoms/button';
import IconButton from '@kappa/components/src/atoms/iconButton';
import Typography from '@kappa/components/src/atoms/typography';
import Grid from '@kappa/components/src/atoms/grid';
import Loader from '@kappa/components/src/atoms/loader';

// molecules
import QuantityButton from '../../components/molecules/quantityButton';

// organisms
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

/* UTILS */
import isEmpty from '../../utils/isEmpty.utils';

const Product = ({
  getAProduct,
  addToCart,
  match,
  product,
  fetching,
  getCart,
}) => {
  const classes = useStyles();

  const [quantity, setQuantity] = React.useState(1);
  const [productParams, setProductParams] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [index, setIndex] = React.useState(0);
  const [isCartVisible, setIsCartVisible] = React.useState(false);

  useEffect(() => {
    if (match && match.params && match.params.id) {
      setProductParams(match.params.id);
    }
  }, [match]);

  useEffect(() => {
    if (productParams) {
      getAProduct(productParams);
    }
  }, [productParams]);

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
      user: '60b91c696807c4197c691214',
      item: {
        product: product[0]._id,
        quantity,
      },
    });
    getCart('60b91c696807c4197c691214');
  };

  return (
    <>
      {isEmpty(product)
        ? (fetching ? <Loader padding /> : <Typography> No Product Found </Typography>)
        : (
          <>
            <ContentContainer className={classes.container}>
              <Grid container spacing={2}>
                <Grid item sm={6} xs={12} className={classes.leftSection}>
                  <div className={classes.slideImageContainer}>
                    <SwipeableViews
                      index={activeStep}
                      onChangeIndex={handleChangeIndex}
                      enableMouseEvents
                    >
                      {product[0].images.length !== 0
              && product[0].images.map((image) => (
                <div
                  key={image}
                >
                  <img
                    className={classes.image}
                    src={`${BASE_URL}/api/v1/files/${product[0].images.length !== 0 && product[0].images[0]}`}
                    alt={image}
                  />
                </div>
              ))}
                    </SwipeableViews>
                    <MobileStepper
                      variant="dots"
                      steps={product[0].images.length !== 0
              && product[0].images.length}
                      position="static"
                      activeStep={activeStep}
                      className={classes.slideImageContainer}
                      nextButton={(
                        <IconButton
                          onClick={handleNext}
                          disabled={activeStep === (product[0].images.length !== 0
                  && product[0].images.length) - 1}
                        >
                          <ArrowRightIcon fontSize="large" />
                        </IconButton>
            )}
                      backButton={(
                        <IconButton onClick={handleBack} disabled={activeStep === 0}>
                          <ArrowLeftIcon fontSize="large" />
                        </IconButton>
            )}
                    />
                  </div>
                </Grid>
                <Grid item sm={6} xs={12} className={classes.rightSection}>
                  <Grid
                    container
                    direction="column"
                    justify="space-between"
                    alignItems="flex-start"
                    className={classes.productDetailsContainer}
                  >
                    <Grid item>
                      <Typography variant="h4" gutterBottom>
                        {product[0].title}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h6" color="textSecondary" gutterBottom>
                        {product[0].price}
                      </Typography>
                    </Grid>
                    <Grid item className={classes.productDescriptionContainer}>
                      <Typography variant="caption">
                        {product[0].description}
                      </Typography>
                    </Grid>

                    <Grid item className={classes.quantityGridContainer}>
                      <QuantityButton
                        quantity={quantity}
                        setQuantity={setQuantity}
                      />
                    </Grid>

                    <Grid item className={classes.cartButtonContainer}>
                      <Button
                        startIcon={<ShoppingCartIcon />}
                        label="Add To Cart"
                        variant="contained"
                        color="primary"
                        onClick={() => handleCart()}
                        className={classes.cartButton}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </ContentContainer>

            <Cart
              isCartVisible={isCartVisible}
              setIsCartVisible={setIsCartVisible}
            />
          </>
        )}
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    product: state.product.product,
    cart: state.cart.cart,
    fetching: state.product.fetching,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
