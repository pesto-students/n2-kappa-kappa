import React, { useState, useEffect } from 'react';

// responsive
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

/* COMPONENTS */
// atoms
import Typography from 'kappaComponents/atoms/typography';
import Grid from 'kappaComponents/atoms/grid';
import Button from 'kappaComponents/atoms/button';
import ContentContainer from 'kappaComponents/atoms/contentContainer';
import Paper from 'kappaComponents/atoms/paper';
import Menu from 'kappaComponents/atoms/menu';
import MenuItem from 'kappaComponents/atoms/menuItem';
import IconButton from 'kappaComponents/atoms/iconButton';
// import UserReader from '../../readers/User';
import Pagination from '../../components/atoms/pagination';


// molecules
import ProductCard from 'kappaComponents/molecules/productCard';
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
import { sortData } from '../../utils/constants';

const Category = (props) => {
  const classes = useStyles();

  const { name } = props;

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isFiltersPanelVisible, setIsFiltersPanelVisible] = useState(false);
  const [scrolling, setScrolling] = useState(false);
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
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
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
        <Typography color='textPrimary' variant='h4' className={classes.label}>
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
          <Button onClick={openSort} label='Sort' className={classes.button} />
          <Button
            onClick={toggleFiltersPanel(true)}
            label='Filter'
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
        {sortData.map((text) => (
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
                price='27$'
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
          color='primary'
        />
      </ContentContainer>

      <FiltersPanel
        isFiltersPanelVisible={isFiltersPanelVisible}
        toggleFiltersPanel={toggleFiltersPanel}
      />

      <RecommendedProducts title='You May Also Like' data={data} />
    </div>
  );
};

export default Category;
