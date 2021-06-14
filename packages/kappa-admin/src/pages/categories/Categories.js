import React, { useState, useEffect } from 'react';

/* COMPONENTS */
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CategoriesTable from './components/categoriesTable';
import CategoriesView from './components/categoriesView';

/* STYLES */
import useStyles from './categories.styles';

/* UTILS */
import { getAllCategories, addCategory } from '../../network/api';
import { categoriesTableHeader } from '../../utils/constants';

/* ICONS */

export default function Categories() {
  const classes = useStyles();

  const [isCategoryViewOpen, setIsCategoryViewOpen] = useState(false);
  const [categories, setCategories] = useState(null);
  const [categoryParams, setCategoryParams] = useState({
    page: 1,
    limit: 25,
  });
  const [categoryFields, setCategoryFields] = useState({
    categoryName: '',
  });

  const handleCategoryFields = (name) => (event) => {
    if (name === 'countInStock' || name === 'price') {
      setCategoryFields({ ...categoryFields, [name]: parseInt(event.target.value, 10) });
    } else {
      setCategoryFields({ ...categoryFields, [name]: event.target.value });
    }
  };

  useEffect(() => {
    setCategories(null);
    getAllCategories(categoryParams)
      .then((res) => {
        setCategories(res);
      });
  }, [categoryParams]);

  const openCategoryView = () => {
    setIsCategoryViewOpen(true);
  };

  const handleSubmit = () => {
    addCategory(categoryFields);
    // .then((res) => {
    //   console.log('wdjo', res);
    // });
  };

  return (
    <div className={classes.root}>
      <CategoriesTable
        bodyData={categories}
        headerData={categoriesTableHeader}
        categoryParams={categoryParams}
        setCategoryParams={setCategoryParams}
        openCategoryView={openCategoryView}
        setCategoryFields={setCategoryFields}
      />
      <Fab
        color="primary"
        className={classes.icon}
        onClick={openCategoryView}
      >
        <AddIcon />
      </Fab>
      <CategoriesView
        isOpen={isCategoryViewOpen}
        setIsOpen={setIsCategoryViewOpen}
        categoryFields={categoryFields}
        handleCategoryFields={handleCategoryFields}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
