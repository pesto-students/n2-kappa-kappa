import React from 'react';

// Components
import Typography from 'kappaComponents/atoms/typography';
import ProductCard from 'kappaComponents/molecules/productCard';
import Grid from 'kappaComponents/atoms/grid';
import Divider from 'kappaComponents/atoms/divider';
import ContentContainer from 'kappaComponents/atoms/contentContainer';

// Styles
import useStyles from './recommendedProducts.styles';

const RecommendedProducts = (props) => {
  const classes = useStyles();

  const {
    title,
    data,
  } = props;

  return (
    <>
      <Divider color="#e5e5e5" />

      <div className={classes.root}>
        <Typography variant="h5">{title}</Typography>
        <ContentContainer maxWidth="lg">
          <Grid container spacing={5} className={classes.content} justify="center">
            {data.slice(4, 7).map((character) => (
              <Grid item lg={3} md={4} sm={6} xs={12} key={character.id}>
                <ProductCard
                  image={character.img_url}
                  name={character.name}
                  height={250}
                  price="27$"
                />
              </Grid>
            ))}
          </Grid>
        </ContentContainer>
      </div>
    </>
  );
};

export default RecommendedProducts;
