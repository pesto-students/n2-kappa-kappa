import React, { useState, useEffect } from 'react';

/* COMPONENTS */
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CategoriesTable from './components/categoriesTable';
import CategoriesView from './components/categoriesView';

/* STYLES */
import useStyles from './categories.styles';

/* UTILS */
import { getAllCategories, addCategory, updateCategory } from '../../network/api';
import { categoriesTableHeader } from '../../utils/constants';

/* ICONS */

const initialCategoryFields = {
  categoryName: '',
  active: false,
};

export default function Categories() {
  const classes = useStyles();

  const [fetching, setFetching] = useState(true);
  const [isCategoryViewOpen, setIsCategoryViewOpen] = useState(false);
  const [categories, setCategories] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [categoryParams, setCategoryParams] = useState({
    page: 1,
    limit: 10,
  });
  const [categoryFields, setCategoryFields] = useState(initialCategoryFields);

  const handleCategoryFields = (name) => (event) => {
     return setCategoryFields({ ...categoryFields, [name]: event.target.value });
  };

  console.log('asokoks', categoryFields);

  useEffect(() => {
    setFetching(true);
    setCategories(null);
    getAllCategories(categoryParams)
      .then((res) => {
        setCategories(res);
        setFetching(false);
      });
  }, [categoryParams]);

  const openCategoryView = () => {
    setIsCategoryViewOpen(true);
  };

  const handleAddNewCategory = () => {
    setCategoryFields(initialCategoryFields)
    setIsEditMode(false);
    openCategoryView();
  };
  
  const fetchAllCategories = () => {
    getAllCategories(categoryParams)
    .then((res) => {
      setCategories(res);
      setCategoryFields(initialCategoryFields);
      setFetching(false);
    });
  }

  const handleSubmit = () => {
    setIsCategoryViewOpen(false);
    setFetching(true);
    if(isEditMode) {
      const categoryId = categoryFields.id;
      delete categoryFields.id;
      setIsEditMode(false);
      updateCategory(categoryFields, categoryId)
      .then(() => {
        fetchAllCategories();
      });
    } else {
      addCategory(categoryFields)
      .then(() => {
        fetchAllCategories();
      });
    }
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
        setIsEditMode={setIsEditMode}
        fetching={fetching}
      />
      <Fab
        color="primary"
        className={classes.icon}
        onClick={handleAddNewCategory}
      >
        <AddIcon />
      </Fab>
      <CategoriesView
        isOpen={isCategoryViewOpen}
        setIsOpen={setIsCategoryViewOpen}
        categoryFields={categoryFields}
        handleCategoryFields={handleCategoryFields}
        handleSubmit={handleSubmit}
        isEditMode={isEditMode}
        fetching={fetching}
      />
    </div>
  );
}
