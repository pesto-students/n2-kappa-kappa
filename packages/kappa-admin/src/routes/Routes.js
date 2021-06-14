import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

// Styles
import MyThemeProvider from './routes.styles';

// Components
import PrimaryLayout from '../layout/primaryLayout';
import Dashboard from '../pages/dashboard';
import Products from '../pages/products';
import Categories from '../pages/categories';

function Routes() {
  return (
    <Router>
      <MyThemeProvider>
        <Switch>
          <PrimaryLayout>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/products" component={Products} />
            <Route path="/categories" component={Categories} />
          </PrimaryLayout>
        </Switch>
      </MyThemeProvider>
    </Router>
  );
}

export default Routes;
