import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

/* STYLES */
import Loader from '@kappa/components/src/atoms/loader';
import useStyles from './products.styles';

/* COMPONENTS */
import NoProducts from '../noProducts';
import ProductsList from '../productsList';

/* UTILS */
import isEmpty from '../../../../utils/isEmpty.utils';

/* HELPERS */
import getCategoryName from '../../../../helpers/getCategoryName.helpers';

/* READERS */
import productsReader from '../../../../readers/productsList.readers';

/* CONSTANTS */
import LIMIT from '../../constants/limit.constants';

// eslint-disable-next-line consistent-return
const getTitle = (type, info) => {
  if (type === 'category') {
    return `${getCategoryName(info)} (${info.total})`;
  } if (type === 'search') {
    return `Your searched Products (${info.total})`;
  }
};

const Products = ({
  categoryId,
  page,
  getProductsInfo,
  handlePagination,
  productsInfo,
  fetching,
  filterByPrice,
  filterByDiscount,
  sortProducts,
  currentPage,
  location,
  totalPages,
  pageType,
}) => {
  const classes = useStyles();

  useEffect(() => {
    getProductsInfo(pageType, categoryId, LIMIT, page);
  }, [pageType, currentPage, location.pathname]);

  const handleFilters = (type, value, pagetype) => () => {
    if (type === 'price') {
      const { min, max } = value;
      filterByPrice(pagetype, categoryId, LIMIT, page, min, max);
    }
    if (type === 'discount') {
      filterByDiscount(pagetype, categoryId, LIMIT, page, value);
    }
    if (type === 'sort') {
      sortProducts(pagetype, categoryId, LIMIT, page, value);
    }
  };

  if (fetching) {
    return <Loader padding />;
  }

  if (isEmpty(productsReader.data(productsInfo))) {
    return <NoProducts />;
  }

  return (
    <div className={classes.root}>
      <ProductsList
        productsInfo={productsInfo}
        handlePagination={handlePagination}
        page={parseInt(page, 10) ? parseInt(page, 10) : currentPage}
        totalPages={totalPages}
        handleFilters={handleFilters}
        getTitle={getTitle}
        pageType={pageType}
      />
    </div>
  );
};

Products.propTypes = {
  categoryId: PropTypes.string,
  page: PropTypes.number,
};

Products.defaultProps = {
  categoryId: '',
  page: 0,
};

export default Products;
