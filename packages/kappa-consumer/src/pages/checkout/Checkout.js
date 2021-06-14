import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

/* COMPONENTS */
// atoms
import ContentContainer from '@kappa/components/src/atoms/contentContainer';
import Button from '@kappa/components/src/atoms/button';
import Typography from '@kappa/components/src/atoms/typography';
import Grid from '@kappa/components/src/atoms/grid';
import Paper from '@kappa/components/src/atoms/paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import Address from './components/organisms/address';
import Total from './components/organisms/total';
import Review from './components/organisms/review';

/* STYLES */
import useStyles from './checkout.styles';

/* ASSETS */
// images
import ShoppingCartIcon from '../../assets/images/shoppingCart';

function getSteps() {
  return ['Review Cart', 'Shipping', 'Payment'];
}

const Checkout = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Review />;
      case 1:
        return <Address />;
      case 2:
        return (
          <>
            <Typography color='textPrimary' variant='h6'>
              Select a payment method
            </Typography>

            <Paper className={classes.paymentPaper}>
              <PayPalButton />
            </Paper>
          </>
        );
      default:
        return 'Unknown stepIndex';
    }
  }

  return (
    <>
      <ContentContainer className={classes.root}>
        <Typography variant='h4' className={classes.title}>
          KAPPA
        </Typography>

        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Grid container className={classes.container} spacing={2}>
          <Grid className={`${classes.stepperDiv}`} item lg={8} xs={12}>
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  Order Received , Payment Successful.
                </Typography>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
              <>
                <div className={`${classes.stepperContent}`}>
                  {getStepContent(activeStep)}
                  <div className={classes.stepperControls}>
                    <Button
                      label={activeStep === steps.length - 1 ? 'Prev' : 'Prev'}
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.backButton}
                    >
                      Back
                    </Button>
                    <Button
                      startIcon={<ShoppingCartIcon />}
                      label={
                        activeStep === steps.length - 1
                          ? 'Pay Now'
                          : 'Continue Shipping'
                      }
                      variant='contained'
                      color='dark'
                      className={classes.cartButton}
                      onClick={handleNext}
                    />
                  </div>
                </div>
              </>
            )}
          </Grid>
          <Total />
        </Grid>
      </ContentContainer>
    </>
  );
};

export default Checkout;
