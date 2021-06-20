import React from 'react';

/* COMPONENTS */
import FormControl from '@kappa/components/src/atoms/formControl';
import InputLabel from '@kappa/components/src/atoms/inputLabel';
import Select from '@kappa/components/src/atoms/select';
import MenuItem from '@kappa/components/src/atoms/menuItem';
import AdminPopup from '../../../../components/molecules/adminPopup';

/* STYLES */
import useStyles from './ordersView.styles';

export default function OrdersView(props) {
  const {
    isOpen,
    setIsOpen,
    orderFields,
    handleOrderFields,
    handleSubmit,
  } = props;
  const classes = useStyles();

  console.log('ewfwrfopjw', orderFields)

  return (
    <AdminPopup
      title="Is this Order delivered?"
      label="Save"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      handleSubmit={handleSubmit}
      maxWidth="lg"
    >
       <FormControl margin="dense" variant="outlined" className={classes.textField}>
          <InputLabel>Choose</InputLabel>
          <Select
            label="Choose"
            value={orderFields.isDelivered}
            onChange={handleOrderFields('isDelivered')}
          >
            {[{label: 'Yes', value: true}, {label: 'No', value: false}]
              .map((isDelivered) => (
                <MenuItem value={isDelivered.value}>{isDelivered.label}</MenuItem>
              ))}
          </Select>
        </FormControl>
    </AdminPopup>
  );
}
