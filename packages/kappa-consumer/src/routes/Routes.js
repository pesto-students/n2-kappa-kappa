import React from 'react';
import { Route, Switch } from 'react-router-dom';

/* COMPONENTS */
import Homepage from '../pages/homepage';
import ProductsContainer from '../pages/productsContainer';
import Product from '../pages/product';
import Checkout from '../pages/checkout';
import Profile from '../pages/profile';
import PrivateRoute from '../components/organisms/privateRoutes';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
      <PrivateRoute path="/checkout" component={Checkout} />
      <PrivateRoute path="/profile" component={Profile} />
      <Route path="/product/:id/" component={Product} />
      <Route path="/verify/:verificationCode" component={Homepage} />
      <Route
        path="/:id?/:page?/:pageNo?"
        component={ProductsContainer}
      />
    </Switch>
  );
}

export default Routes;
