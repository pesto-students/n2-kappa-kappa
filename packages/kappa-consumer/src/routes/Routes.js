import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import store from '../config/store';
// Styles
import MyThemeProvider from './routes.styles';

// Components
import PrimaryLayout from '../layout/primaryLayout';
import Homepage from '../pages/homepage';
import Category from '../pages/category';
import Product from '../pages/product';
import Checkout from '../pages/checkout';

function Routes() {
  return (
    <Router>
      <Provider store={store}>
        <MyThemeProvider>
          <Switch>
            <PrimaryLayout>
              <Route path='/' exact component={Homepage} />
              <Route path='/category' component={Category} />
              <Route path='/product' component={Product} />
              <Route path='/checkout' component={Checkout} />
            </PrimaryLayout>
          </Switch>
        </MyThemeProvider>
      </Provider>
    </Router>
  );
}

export default Routes;
