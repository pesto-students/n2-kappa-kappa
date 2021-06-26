import React, { useEffect } from 'react';

/* REDUX */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* STYLES */
import MyThemeProvider from './app.styles';

/* ROUTES */
import Routes from './routes';

/* COMPONENTS */
import NavbarLoader from './components/molecules/navbarLoader';
import PrimaryLayout from './components/organisms/primaryLayout';

/* SERVICES */
import ActionCreators from './actions';

/* CONSTANTS */
import CATEGORIES_QUERY from './constants/categoriesQuery.constants';

const App = ({
  getAllCategories,
  getAllProducts,
  categoriesFetching,
  navbarProductsFetching,
}) => {
  useEffect(() => {
    getAllCategories(CATEGORIES_QUERY);
    getAllProducts();
  }, []);

  if (navbarProductsFetching && categoriesFetching) {
    return <NavbarLoader />;
  }

  return (
    <MyThemeProvider>
      <PrimaryLayout>
        <Routes />
      </PrimaryLayout>
    </MyThemeProvider>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    categoriesFetching: state.categories.fetching,
    navbarProductsFetching: state.productsInfo.fetching,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
