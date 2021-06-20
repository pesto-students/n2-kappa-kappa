import React from 'react';

/* COMPONENTS */
import TextField from '@kappa/components/src/atoms/textField';
import AdminPopup from '../../../../components/molecules/adminPopup';
import FormControl from '@kappa/components/src/atoms/formControl';
import InputLabel from '@kappa/components/src/atoms/inputLabel';
import Select from '@kappa/components/src/atoms/select';
import MenuItem from '@kappa/components/src/atoms/menuItem';

/* STYLES */
import useStyles from './categoriesView.styles';

export default function CategoriesView(props) {
  const {
    isOpen,
    setIsOpen,
    categoryFields,
    handleCategoryFields,
    handleSubmit,
    isEditMode,
  } = props;
  const classes = useStyles();

  return (
    <AdminPopup
      title={isEditMode ? "Update Category Details" : "Add New Category"}
      label={isEditMode ? "Save" : "Add"}
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

      <FormControl margin="dense" variant="outlined" className={classes.textField}>
        <InputLabel>Active</InputLabel>
        <Select
          label="Active"
          value={categoryFields.active}
          onChange={handleCategoryFields('active')}
        >
          {[{ label: 'Yes', value: true }, { label: 'No', value: false }]
            .map((active) => (
              <MenuItem value={active.value}>{active.label}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </AdminPopup>
  );
}
