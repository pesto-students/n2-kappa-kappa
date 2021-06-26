import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

/* COMPONENTS */
import Typography from '@kappa/components/src/atoms/typography';
import Grid from '@kappa/components/src/atoms/grid';
import OrderCard from '../../../../components/organisms/orderCard';

/* STYLES */
import useStyles from './order.styles';

/* SERVICES */
import ActionCreators from '../../../../actions';

const Order = ({ order, fetching }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid container item xs={12} sm={10} md={8} spacing={2}>
          <Typography gutterBottom variant="subtitle1">
            Total Orders :
            {' '}
            {order.length}
          </Typography>
          <OrderCard data={order} fetching={fetching} />
        </Grid>
      </Grid>
    </div>
  );
};

Order.propTypes = {
  fetching: PropTypes.bool,
};

Order.defaultProps = {
  fetching: false,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    order: state.order.order,
    fetching: state.order.fetching,
    message: state.order.message,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);
