import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { autoPlay } from 'react-swipeable-views-utils';

import MobileStepper from '@material-ui/core/MobileStepper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SwipeableViews from 'react-swipeable-views';

// Styles
import useStyles from './carousel.styles';

const AutoPlayView = autoPlay(SwipeableViews);

function Carousel(props) {
  const { data } = props;

  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = data.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlayView
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={3800}
        sty
      >
        {data.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.image} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlayView>

      <div className={classes.content}>
        <div className={classes.contentHeader}>
          <div>
            <Typography
              // color="textPrimary"
              style={{ fontSize: 20, marginBottom: 10, color: '#fff' }}
            >
              {data[activeStep].header}
            </Typography>
            <Typography
              // color="textPrimary"
              style={{
                fontWeight: 'bold', fontSize: 28, marginBottom: 60, color: '#fff',
              }}
            >
              {data[activeStep].subHeader}
            </Typography>
          </div>
          <Button
            style={{
              width: 250, background: '#5BB02D', color: '#fff', height: 50, fontSize: 16, borderRadius: 15,
            }}
            elevation={0}
            variant="contained"
          >
            {data[activeStep].buttonLabel}
          </Button>
        </div>
      </div>

      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        className={classes.carouselDots}
      />
    </div>
  );
}

export default Carousel;
