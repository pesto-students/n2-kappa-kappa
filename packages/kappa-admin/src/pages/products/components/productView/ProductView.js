import React, { useEffect, useState } from 'react';

import InputAdornment from '@material-ui/core/InputAdornment';

/* COMPONENTS */
import Typography from '@kappa/components/src/atoms/typography';
import TextField from '@kappa/components/src/atoms/textField';
import FormControl from '@kappa/components/src/atoms/formControl';
import InputLabel from '@kappa/components/src/atoms/inputLabel';
import Select from '@kappa/components/src/atoms/select';
import MenuItem from '@kappa/components/src/atoms/menuItem';
import AdminPopup from '../../../../components/molecules/adminPopup';
import ImageUpload from '../imageUpload';

/* STYLES */
import useStyles from './productView.styles';

import { getAllCategories } from '../../../../network/api';

export default function Products(props) {
  const {
    isOpen,
    setIsOpen,
    productFields,
    handleProductFields,
    handleSubmit,
    isEditMode,
    setImageFiles,
  } = props;
  const classes = useStyles();

  const [categories, setCategories] = useState(null);

  useEffect(() => {
    getAllCategories({
      page: 1,
      limit: 25,
    })
      .then((res) => {
        setCategories(res);
      });
  }, []);

  return (
    <AdminPopup
      title={isEditMode ? 'Update Product Details' : 'Add A New Product'}
      label={isEditMode ? 'Save' : 'Add'}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      handleSubmit={handleSubmit}
      maxWidth="md"
    >
      <div className={classes.form}>
        <TextField
          type="text"
          required
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          fullWidth
          variant="outlined"
          value={productFields.title}
          onChange={handleProductFields('title')}
          className={classes.textField}
        />

        <TextField
          required
          margin="dense"
          id="description"
          label="Description"
          type="text"
          fullWidth
          variant="outlined"
          value={productFields.description}
          onChange={handleProductFields('description')}
          className={classes.textField}
        />

        <TextField
          type="number"
          required
          margin="dense"
          id="price"
          label="Price"
          fullWidth
          variant="outlined"
          value={productFields.price}
          onChange={handleProductFields('price')}
          className={classes.textField}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />

        <TextField
          required
          margin="dense"
          id="quantity"
          label="Quantity"
          type="number"
          fullWidth
          variant="outlined"
          value={productFields.countInStock}
          onChange={handleProductFields('countInStock')}
          className={classes.textField}
        />

        <TextField
          required
          margin="dense"
          id="discount"
          label="Discount"
          type="number"
          fullWidth
          variant="outlined"
          value={productFields.discount}
          onChange={handleProductFields('discount')}
          className={classes.textField}
          InputProps={{
            startAdornment: <InputAdornment position="start">%</InputAdornment>,
          }}
        />

        <FormControl margin="dense" variant="outlined" className={classes.textField}>
          <InputLabel>Category</InputLabel>
          <Select
            label="Category"
            value={productFields.category}
            onChange={handleProductFields('category')}
            className={classes.category}
          >
            {categories
              && (
                categories
                  .data.data
                  .map((category) => (
                    <MenuItem
                      value={category._id}
                      label={category.categoryName}
                      className={classes.category}
                    >
                      {category.categoryName}
                    </MenuItem>
                  )))}
          </Select>
        </FormControl>

        <FormControl margin="dense" variant="outlined" className={classes.textField}>
          <InputLabel>Priority</InputLabel>
          <Select
            label="Priority"
            value={productFields.priority}
            onChange={handleProductFields('priority')}
          >
            {[{ label: 'Yes', value: true }, { label: 'No', value: false }]
              .map((priority) => (
                <MenuItem value={priority.value}>{priority.label}</MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
      <Typography gutterBottom> Upload Images </Typography>
      <ImageUpload setImageFiles={setImageFiles} productFields={productFields} />
    </AdminPopup>
  );
}
