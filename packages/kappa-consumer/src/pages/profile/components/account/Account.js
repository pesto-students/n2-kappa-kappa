/* eslint-disable react/require-default-props */
/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

/* COMPONENTS */
import Grid from '@kappa/components/src/atoms/grid';
import Button from '@kappa/components/src/atoms/button';
import TextField from '@kappa/components/src/atoms/textField';
import FormControl from '@kappa/components/src/atoms/formControl';
import InputLabel from '@kappa/components/src/atoms/inputLabel';
import Select from '@kappa/components/src/atoms/select';
import FormHelperText from '@kappa/components/src/atoms/formHelperText';
import Loader from '@kappa/components/src/atoms/loader';
import MenuItem from '@kappa/components/src/atoms/menuItem';
import Typography from '@kappa/components/src/atoms/typography';

/* CONSTANTS */
import COUNTRIES from '@kappa/components/src/constants/countries';

/* UTILS */
import { useForm, Form } from '../../../../utils/useForm';

/* SERVICES */
import ActionCreators from '../../../../actions';
import validateEmail from '../../../../utils/validateEmail';

/* STYLES */
import useStyles from './account.styles';

const Account = ({
  user, fetching, updateUser, message,
}) => {
  const classes = useStyles();

  const initialFValues = {
    email: user ? user.email : '',
    name: user ? user.name : '',
    country: user ? user.country : '',
    error: false,
  };

  // eslint-disable-next-line consistent-return
  const validate = (fieldValues = values) => {
    const temp = { ...errors };
    if ('name' in fieldValues) temp.name = fieldValues.name ? '' : 'Name is required.';
    if ('email' in fieldValues) {
      temp.email = validateEmail(fieldValues.email)
        ? ''
        : 'Email is not valid.';
    }
    if ('country' in fieldValues) temp.country = fieldValues.country.length !== 0 ? '' : 'Country is required.';
    setErrors({
      ...temp,
    });

    if (fieldValues === values) return Object.values(temp).every((x) => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const { name, email, country } = values;
      updateUser({
        name,
        email,
        country,
      });
    }
  };

  const {
    values, setValues, errors, setErrors, handleInputChange,
  } = useForm(initialFValues, true, validate);

  useEffect(() => {
    setValues({
      email: user ? user.email : '',
      name: user ? user.name : '',
      country: user ? user.country : '',
      error: false,
    });
  }, [setValues, user]);

  if (fetching) {
    return <Loader />;
  }

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid container item xs={12} sm={10} md={8} spacing={2}>
          {message ? (
            <Typography
              variant="body2"
              className={classes.message}
              color="error"
            >
              {message}
            </Typography>
          ) : null}
          <Form className={classes.accountUpdateForm}>
            <TextField
              label="Name"
              autoFocus
              fullWidth
              name="name"
              variant="outlined"
              margin="dense"
              value={values.name}
              onChange={handleInputChange}
              error={!!errors.name}
              helperText={errors.name}
              type="text"
              required
            />

            <TextField
              required
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="outlined"
              value={values.email}
              name="email"
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email}
            />

            <FormControl
              required
              className={classes.country}
              variant="outlined"
              margin="dense"
              error={!!errors.country}
            >
              <InputLabel>Country</InputLabel>
              <Select
                label="Country"
                value={values.country}
                name="country"
                onChange={handleInputChange}
              >
                {COUNTRIES.map((country) => (
                  <MenuItem key={country.label} value={country.label}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>{errors.country}</FormHelperText>
            </FormControl>

            <Button
              type="submit"
              label="Update"
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={(e) => handleSubmit(e)}
            />
          </Form>
        </Grid>
      </Grid>
    </div>
  );
};

Account.propTypes = {
  fetching: PropTypes.bool,
  updateUser: PropTypes.func,
  message: PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    fetching: state.auth.fetching,
    message: state.auth.message,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
