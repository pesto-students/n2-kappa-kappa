import React, { useEffect, useState } from 'react';

import SwipeableViews from 'react-swipeable-views';
import MobileStepper from '@material-ui/core/MobileStepper';

/* COMPONENTS */
// atoms
import ContentContainer from '@kappa/components/src/atoms/contentContainer';
import Button from '@kappa/components/src/atoms/button';
import IconButton from '@kappa/components/src/atoms/iconButton';
import Typography from '@kappa/components/src/atoms/typography';
import Grid from '@kappa/components/src/atoms/grid';

// molecules
import QuantityButton from '../../components/molecules/quantityButton';

// organisms
import RecommendedProducts from '../../components/organisms/recommendedProducts';
import Cart from './components/organisms/Cart';

/* STYLES */
import useStyles from './product.styles';

/* ASSETS */
// images
import ArrowRightIcon from '../../assets/images/arrowRight';
import ArrowLeftIcon from '../../assets/images/arrowLeft';
import ShoppingCartIcon from '../../assets/images/shoppingCart';

function App() {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [quantity, setQuantity] = React.useState(1);
  const [cartQuantity, setCartQuantity] = React.useState(quantity);
  // eslint-disable-next-line no-unused-vars
  const [index, setIndex] = React.useState(0);
  const [isCartVisible, setIsCartVisible] = React.useState(false);

  useEffect(() => {
    setCartQuantity(quantity);
  }, [quantity]);

  // api call
  useEffect(() => {
    fetch('https://finalspaceapi.com/api/v0/character/?limit=6')
      .then((res) => res.json())
      .then((dataa) => setData(dataa));
  }, []);

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

  return (
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
                {data.map((step) => (
                  <div
                    key={step.label}
                  >
                    <img
                      className={classes.image}
                      src={step.img_url}
                      alt={step.name}
                    />
                  </div>
                ))}
              </SwipeableViews>
              <MobileStepper
                variant="dots"
                steps={6}
                position="static"
                activeStep={activeStep}
                className={classes.slideImageContainer}
                nextButton={(
                  <IconButton onClick={handleNext} disabled={activeStep === 5}>
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
                  Product Name
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  $47
                </Typography>
              </Grid>
              <Grid item className={classes.productDescriptionContainer}>
                <Typography variant="caption">
                  Elegant briefcase for your daily travels.
                  Large central compartment that can hold a 13 or
                  15-inch computer. With metal zip
                  on the front pocket to store your iPad,
                  passport and boarding pass. Le nouveau cartable can
                  be carried by hand or in cross body with the adjustable
                  leather strap. Made in Italy.
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
                  onClick={() => setIsCartVisible(true)}
                  className={classes.cartButton}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ContentContainer>

      <RecommendedProducts
        title="Users Also Bought"
        data={data}
      />

      <Cart
        data={data}
        isCartVisible={isCartVisible}
        setIsCartVisible={setIsCartVisible}
        cartQuantity={cartQuantity}
        setCartQuantity={setCartQuantity}
      />
    </>
  );
}

export default App;
