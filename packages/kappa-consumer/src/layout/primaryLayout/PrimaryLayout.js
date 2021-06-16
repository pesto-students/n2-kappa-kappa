import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

/* COMPONENTS */
import Navbar from '@kappa/components/src/organisms/navbar';
import ConsumerNavbar from '../../components/organisms/consumerNavbar';

/* SERVICES */
import ActionCreators from '../../actions';

import Footer from '../../components/organisms/footer';

// styles
import useStyles from './primaryLayout.styles';

const PrimaryLayout = ({
  children,
  getAllCategories,
  fetching,
  categories,
}) => {
  const classes = useStyles();
  const [categoriesQuery, setCategoriesQuery] = useState({
    page: 1,
    limit: 100,
  });

  useEffect(() => {
    getAllCategories(categoriesQuery);
  }, [categoriesQuery]);

  return (
    <div className={classes.root}>
      <Navbar>
        <ConsumerNavbar
          categories={categories}
          fetching={fetching}
        />
      </Navbar>
      <div className={classes.content}>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    categories: state.categories.categories,
    fetching: state.categories.fetching,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PrimaryLayout);
