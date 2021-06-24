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
import CATEGORIES_QUERY from './constants/categoriesQuery.constants'

const App = ({
  getAllCategories,
  fetching,
  categories,
}) => {

  useEffect(() => {
    getAllCategories(CATEGORIES_QUERY);
  }, []);

  if(fetching) {
    return <NavbarLoader />
  }

  return (
    <MyThemeProvider>
      <PrimaryLayout categories={categories}>
        <Routes />
      </PrimaryLayout>
    </MyThemeProvider>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    categories: state.categories.categories,
    fetching: state.categories.fetching,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

