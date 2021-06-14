import React from 'react';

import InputAdornment from '@material-ui/core/InputAdornment';

/* COMPONENTS */
import Typography from 'kappaComponents/atoms/typography';
import TextField from 'kappaComponents/atoms/textField';
import FormControl from 'kappaComponents/atoms/formControl';
import InputLabel from 'kappaComponents/atoms/inputLabel';
import Select from 'kappaComponents/atoms/select';
import MenuItem from 'kappaComponents/atoms/menuItem';
import AdminPopup from '../../../../components/molecules/adminPopup';
import ImageUpload from '../imageUpload';

/* STYLES */
import useStyles from './productView.styles';

export default function Products(props) {
  const {
    isOpen,
    setIsOpen,
    productFields,
    handleProductFields,
    handleSubmit,
  } = props;
  const classes = useStyles();

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
            value={productFields.category}
            onChange={handleProductFields('category')}
          >
            <MenuItem value="Skincare">Skincare</MenuItem>
            <MenuItem value="Body">Body</MenuItem>
            <MenuItem value="Hair">Hair</MenuItem>
            <MenuItem value="Kits">Kits</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
        <Typography>
          Upload Images
        </Typography>
        <ImageUpload />
      </div>
    </AdminPopup>
  );
}
