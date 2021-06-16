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
    fileObj1,
    setFileObj1,
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
      title="Add a product"
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

        <FormControl margin="dense" variant="outlined" className={classes.textField}>
          <InputLabel>Category</InputLabel>
          <Select
            label="Category"
            value={productFields.category._id}
            onChange={handleProductFields('category')}
          >
            {categories
              && (
                categories
                  .data.data
                  .map((category) => (
                    <MenuItem value={category._id}>{category.categoryName}</MenuItem>
                  )))}
          </Select>
        </FormControl>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
        <Typography>
          Upload Images
        </Typography>
        <ImageUpload setFileObj1={setFileObj1} />
      </div>
    </AdminPopup>
  );
}
