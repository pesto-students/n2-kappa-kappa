import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// responsive
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

/* COMPONENTS */
// atoms
import Typography from '@kappa/components/src/atoms/typography';
import Grid from '@kappa/components/src/atoms/grid';
import Button from '@kappa/components/src/atoms/button';
import ContentContainer from '@kappa/components/src/atoms/contentContainer';
import Paper from '@kappa/components/src/atoms/paper';
import Menu from '@kappa/components/src/atoms/menu';

import MenuItem from '@kappa/components/src/atoms/menuItem';
import IconButton from '@kappa/components/src/atoms/iconButton';
// import UserReader from '../../readers/User';
import ProductCard from '@kappa/components/src/molecules/productCard';
import Pagination from '../../components/atoms/pagination';

// molecules
import FiltersPanel from '../../components/molecules/filtersPanel';

// organisms
import RecommendedProducts from '../../components/organisms/recommendedProducts';

/* STYLES */
import useStyles from './category.styles';

/* ASSETS */
// images
import LargeLayoutIcon from '../../assets/images/largeLayout';
import SmallLayoutIcon from '../../assets/images/smallLayout';

/* CONSTANTS */
import SORT_PRODUCTS from './constants/sortProducts.constants';

/* SERVICES */
import ActionCreators from '../../actions';

const Category = (props) => {
  const classes = useStyles();

  const { name, products, fetching } = props;

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isFiltersPanelVisible, setIsFiltersPanelVisible] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [productParams, setProductParams] = useState({
    page: 1,
    limit: 25,
    // select: 'title,description,price,countInStock,category,images',
    // sort: '-price',
    // 'price[gte]': 0,
    // 'price[lte]': 8000,
  });
  // eslint-disable-next-line no-unused-vars
  const [scrollTop, setScrollTop] = useState(0);
  const [sortPanelPosition, setSortPanelPosition] = React.useState(null);
  const [layout, setLayout] = React.useState({
    height: 300,
    numberOfProducts: 3,
  });

  // responsive
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const isXtraSmall = useMediaQuery(theme.breakpoints.only('xs'));

  useEffect(() => {
    props.getAllProducts(productParams);
  }, [productParams]);

  // api call
  useEffect(() => {
    fetch('https://finalspaceapi.com/api/v0/character/?limit=12')
      .then((res) => res.json())
      .then((dataa) => setData(dataa));
  }, []);

  useEffect(() => {
    const onScroll = (e) => {
      // setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  const toggleFiltersPanel = (open) => (event) => {
    if (
      event.type === 'keydown'
      && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setIsFiltersPanelVisible(open);
  };

  const handlePagination = (event, value) => {
    setPage(value);
  };

  const openSort = (event) => {
    setSortPanelPosition(event.currentTarget);
  };

  const closeSort = () => {
    setSortPanelPosition(null);
  };

  const handleLayout = (height, numberOfProducts) => {
    setLayout((prevLayout) => ({
      ...prevLayout,
      height,
      numberOfProducts,
    }));
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography color="textPrimary" variant="h4" className={classes.label}>
          {name}
          Category Name
          {/* {UserReader.userName({

          })} */}
        </Typography>
      </div>

      <Paper
        className={classes.headerMenu}
        elevation={scrolling > 20 ? 20 : false}
        style={{ top: scrolling > 20 && 50 }}
      >
        <div className={classes.layoutIconsContainer}>
          <IconButton onClick={() => handleLayout(400, 4)}>
            <LargeLayoutIcon />
          </IconButton>
          <IconButton onClick={() => handleLayout(300, 3)}>
            <SmallLayoutIcon />
          </IconButton>
        </div>

        <div className={classes.filtersButtonContainer}>
          <Button onClick={openSort} label="Sort" className={classes.button} />
          <Button
            onClick={toggleFiltersPanel(true)}
            label="Filter"
            className={classes.button}
          />
        </div>
      </Paper>

      <Menu
        anchorEl={sortPanelPosition}
        keepMounted
        open={Boolean(sortPanelPosition)}
        onClose={closeSort}
        className={classes.menu}
        PaperProps={{
          style: {
            width: isXtraSmall ? '100%' : 192,
            borderRadius: '0 0 27px 27px',
          },
        }}
      >
        {SORT_PRODUCTS.map((text) => (
          <MenuItem onClick={closeSort} className={classes.menuItem}>
            {text}
          </MenuItem>
        ))}
      </Menu>

      <ContentContainer className={classes.content}>
        <Grid container spacing={3}>
          {data.map((character) => (
            <Grid
              item
              lg={layout.numberOfProducts}
              md={4}
              sm={6}
              xs={12}
              key={character.id}
            >
              <ProductCard
                image={character.img_url}
                name={character.name}
                height={layout.height}
                price="27$"
                matches={matches}
              />
            </Grid>
          ))}
        </Grid>
        <Pagination
          className={classes.pagination}
          count={10}
          page={page}
          onChange={handlePagination}
          color="primary"
        />
      </ContentContainer>

      <FiltersPanel
        isFiltersPanelVisible={isFiltersPanelVisible}
        toggleFiltersPanel={toggleFiltersPanel}
      />

      <RecommendedProducts title="You May Also Like" data={data} />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    products: state.products.products,
    fetching: state.products.fetching,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
