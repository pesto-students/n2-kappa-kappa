import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { IconButton, Tabs, Tab } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';

import clsx from 'clsx';

// Icons
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  ShoppingCartOutlined as ShoppingCartIcon,
} from '@material-ui/icons/';

/* COMPONENTS */
// atoms
import Button from '@kappa/components/src/atoms/button';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import ForgetPass from './components/forgetPass';

import CategoriesListMenu from './components/categoriesListMenu';
import Cart from '../cart';
import Typography from '@kappa/components/src/atoms/typography';

/* STYLES */
import useStyles from './consumerNavbar.styles';
import logo from '../../../assets/images/logo.png';
import PersonIcon from '../../../assets/images/person';

import ActionCreators from '../../../actions';

const ConsumerNavbar = ({ categories, fetchingAuth, fetchingCategories, user, fetchUser }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  const [isSignInOpen, setIsSignInOpen] = React.useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = React.useState(false);
  const [isCartVisible, setIsCartVisible] = React.useState(false);
  const [isForgetPassOpen, setIsForgetPassOpen] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const anchorRef = React.useRef(null);

  const handleSignIn = () => {
    setIsSignUpOpen(true);
    setIsSignInOpen(false);
    setIsForgetPassOpen(false);
  };

  const handleSignUp = () => {
    setIsSignInOpen(true);
    setIsSignUpOpen(false);
    setIsForgetPassOpen(false);
  };

  const handleForgetPass = () => {
    setIsSignUpOpen(false);
    setIsSignInOpen(false);
    setIsForgetPassOpen(true);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) {
      fetchUser();
    }
  }, []);

  return (
    <>
      <div className={classes.sectionDesktop}>
        <div className={classes.sectionLeftDesktop}>
          <Tabs
            value={value}
            onChange={handleChange}
            className={classes.tabs}
          >
            <Tab
              label='SHOP'
              className={classes.tab}  
              ref={anchorRef}
              onClick={handleToggle}
            />
          </Tabs>
        </div>
    
          <CategoriesListMenu
            setOpen={setOpen}
            open={open}
            anchorRef={anchorRef}
            categories={categories}
            fetching={fetchingCategories}
          />

        <Link className={classes.logoContainer} to="/">

          <img src={logo} className={classes.logo} alt="Mr-Nomad-Logo" />
        </Link>
        <div className={classes.sectionRightDesktop}>
          {user.name ? (
            <Button
              className={classes.button}
              label={user.name}
            />
          ) : (
              <IconButton className={classes.button} onClick={() => setIsSignInOpen(true)}>
                <PersonIcon />
              </IconButton>
            )}

          <IconButton className={classes.button} onClick={() => setIsCartVisible(true)}>
            <ShoppingCartIcon />
          </IconButton>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </div>
      </div>

      <div className={classes.sectionMobile}>
        <div className={classes.sectionLeftMobile}>
          <IconButton className={classes.iconButton}>
            <MenuIcon />
          </IconButton>
        </div>
        <div>
          <IconButton className={classes.iconButton}>
            <SearchIcon />
          </IconButton>

          <IconButton className={classes.iconButton}>
            <ShoppingCartIcon />
          </IconButton>
        </div>
      </div>
      <Cart isCartVisible={isCartVisible} setIsCartVisible={setIsCartVisible} />
      <SignIn
        isOpen={isSignInOpen}
        setIsOpen={setIsSignInOpen}
        handleSignIn={handleSignIn}
        handleForgetPass={handleForgetPass}
      />
      <SignUp
        isOpen={isSignUpOpen}
        setIsOpen={setIsSignUpOpen}
        handleSignUp={handleSignUp}
        handleForgetPass={handleForgetPass}
      />
      <ForgetPass
        isOpen={isForgetPassOpen}
        setIsOpen={setIsForgetPassOpen}
        handleForgetPass={handleForgetPass}
        handleSignIn={handleSignIn}
        handleSignUp={handleSignUp}
      />
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    fetchingAuth: state.auth.fetching,
    fetchingCategories: state.categories.fetching,
    message: state.auth.message,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConsumerNavbar);
