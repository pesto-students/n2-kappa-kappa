import React, { useState, useEffect } from 'react';

/* COMPONENTS */
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ProductsTable from './components/productsTable';
import ProductView from './components/productView';

/* STYLES */
import useStyles from './products.styles';

/* UTILS */
import { getAllProducts, addProduct } from '../../network/api';
import { productsTableHeader } from '../../utils/constants';

/* ICONS */

export default function Products() {
  const classes = useStyles();

  const [isProductViewOpen, setIsProductViewOpen] = useState(false);
  const [products, setProducts] = useState(null);
  const [productParams, setProductParams] = useState({
    page: 1,
    limit: 25,
    select: 'title,description,price,countInStock,category,images',
    sort: '-price',
    'price[gte]': 0,
    'price[lte]': 8000,
  });
  const [productFields, setProductFields] = useState({
    category: '60c38785ccff5770684b8b43',
    countInStock: null,
    description: '',
    discount: 12,
    price: null,
    title: '',
    user: '60b91c696807c4197c691214',
  });

  const handleProductFields = (name) => (event) => {
    if (name === 'countInStock' || name === 'price') {
      setProductFields({ ...productFields, [name]: parseInt(event.target.value, 10) });
    } else {
      setProductFields({ ...productFields, [name]: event.target.value });
    }
  };

  useEffect(() => {
    setProducts(null);
    getAllProducts(productParams)
      .then((res) => {
        setProducts(res);
      });
  }, [productParams]);

  const openProductView = () => {
    setIsProductViewOpen(true);
  };

  const handleSubmit = () => {
    addProduct(productFields);
    // .then((res) => {
    //   console.log('wdjo', res);
    // });
  };

  console.log('wdok', products);

  return (
    <div className={classes.root}>
      <ProductsTable
        bodyData={products}
        headerData={productsTableHeader}
        productParams={productParams}
        setProductParams={setProductParams}
        openProductView={openProductView}
        setProductFields={setProductFields}
      />
      <Fab
        color="primary"
        className={classes.icon}
        onClick={openProductView}
      >
        <AddIcon />
      </Fab>
      <ProductView
        isOpen={isProductViewOpen}
        setIsOpen={setIsProductViewOpen}
        productFields={productFields}
        handleProductFields={handleProductFields}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
