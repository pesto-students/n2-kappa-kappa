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
// import Dashboard from '../pages/dashboard';
import Products from '../pages/products';
import Categories from '../pages/categories';
import Orders from '../pages/orders';

function Routes() {
  return (
    <Router>
      <MyThemeProvider>
        <Switch>
          <PrimaryLayout>
            {/* <Route exact path="/" component={Dashboard} /> */}
            <Route exact path="/" component={Orders} />
            <Route path="/categories" component={Categories} />
            <Route path="/products" component={Products} />
          </PrimaryLayout>
        </Switch>
      </MyThemeProvider>
    </Router>
  );
}

export default Routes;
