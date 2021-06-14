import React from 'react';

/* COMPONENTS */
import TextField from '@kappa/components/src/atoms/textField';
import AdminPopup from '../../../../components/molecules/adminPopup';

/* STYLES */
import useStyles from './categoriesView.styles';

export default function CategoriesView(props) {
  const {
    isOpen,
    setIsOpen,
    categoryFields,
    handleCategoryFields,
    handleSubmit,
  } = props;
  const classes = useStyles();

  return (
    <AdminPopup
      title="Add a category"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      handleSubmit={handleSubmit}
      maxWidth="lg"
    >
      <TextField
        type="text"
        required
        autoFocus
        margin="dense"
        id="category"
        label="Category"
        fullWidth
        variant="outlined"
        value={categoryFields.categoryName}
        onChange={handleCategoryFields('categoryName')}
        className={classes.textField}
      />
    </AdminPopup>
  );
}
