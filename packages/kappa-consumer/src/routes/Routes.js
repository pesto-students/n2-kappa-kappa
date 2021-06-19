import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import store from '../config/store';
// Styles
import MyThemeProvider from './routes.styles';

// Components
import PrimaryLayout from '../layout/primaryLayout';
import Homepage from '../pages/homepage';
import ProductsList from '../pages/productsList';
import Product from '../pages/product';
import Checkout from '../pages/checkout';

function Routes() {
  return (
    <Router>
      <Provider store={store}>
        <MyThemeProvider>
            <PrimaryLayout>
            <Switch>
                <Route path='/' exact component={Homepage} />
                <Route path='/checkout' component={Checkout} />
                <Route path='/product/:id/' component={Product} />
                <Route path='/verify/:verificationCode' component={Homepage} />
                <Route path='/:id' component={ProductsList} />
              </Switch>
            </PrimaryLayout>
        </MyThemeProvider>
      </Provider>
    </Router>
  );
}

export default Routes;
