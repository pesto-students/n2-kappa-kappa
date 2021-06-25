import React from 'react';

// Components
import Typography from '@kappa/components/src/atoms/typography';
import ProductCard from '@kappa/components/src/molecules/productCard';
import Grid from '@kappa/components/src/atoms/grid';
import Divider from '@kappa/components/src/atoms/divider';
import ContentContainer from '@kappa/components/src/atoms/contentContainer';

/* READERS */
import productsReader from '../../../readers/productsList.readers';

/* HELPERS */
import getCategoryName from '../../../helpers/getCategoryName.helpers'

/* CONSTANTS */
import BASE_URL from '../../../constants/baseURL';

/* UTILS */
import isEmpty from '../../../utils/isEmpty.utils';

// Styles
import useStyles from './recommendedProducts.styles';

const renderImage = (images) => {
  return `${BASE_URL}/api/v1/files/${images[0]}`
}

const renderProduct = (layout, categoryName) => (product) => (
  <Grid 
    key={productsReader.id(product)}
    item
    lg={3} 
    md={4} 
    sm={6} 
    xs={12}  
  >
    <ProductCard
      image={renderImage(!isEmpty(productsReader.images(product)) 
        && productsReader.images(product))}
      categoryName={categoryName}
      name={productsReader.name(product)}
      price={productsReader.price(product)}
      id={productsReader.id(product)}
    />
  </Grid>
)

const RecommendedProducts = ({ title, data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Divider color="#e5e5e5" />

      <div className={classes.container}>
      <ContentContainer maxWidth="md">
        <div className={classes.title}>
          <Typography variant="h6" >{title}</Typography>
        </div>
          <Grid container spacing={5} className={classes.content} justify="center">
            {productsReader.data(data)
              .map(renderProduct('', getCategoryName(data)))}
          </Grid>
        </ContentContainer>
      </div>
    </div>
  );
};

export default RecommendedProducts;
