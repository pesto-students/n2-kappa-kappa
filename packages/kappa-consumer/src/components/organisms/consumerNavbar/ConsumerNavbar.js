import React from 'react';

import {
  IconButton, Tabs, Tab,
} from '@material-ui/core';
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
import Loader from '@kappa/components/src/atoms/loader';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import CategoriesListMenu from './components/categoriesListMenu';
import Cart from '../cart';

/* STYLES */
import useStyles from './consumerNavbar.styles';

const ConsumerNavbar = ({
  categories,
  fetching,
}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  const [isSignInOpen, setIsSignInOpen] = React.useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = React.useState(false);
  const [isCartVisible, setIsCartVisible] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const anchorRef = React.useRef(null);

  const handleSignIn = () => {
    setIsSignUpOpen(true);
    setIsSignInOpen(false);
  };

  const handleSignUp = () => {
    setIsSignUpOpen(false);
    setIsSignInOpen(true);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      <div className={classes.sectionDesktop}>

        <div className={classes.sectionLeftDesktop}>
          <Tabs
            value={value}
            indicatorColor="primary"
            onChange={handleChange}
            className={classes.tabs}
          >
            <Tab
              label="SHOP"
              className={classes.tab}
              ref={anchorRef}
              onClick={handleToggle}
            />
            {/* <Tab label="BLOG" className={classes.tab} />
                <Tab label="ABOUT" className={classes.tab} />
                <Tab label="FAQ" className={classes.tab} /> */}
          </Tabs>
        </div>
        {!fetching && categories
          ? (
            <CategoriesListMenu
              setOpen={setOpen}
              open={open}
              anchorRef={anchorRef}
              categories={categories}
            />
          ) : (
            <Loader />
          )}

        <div className={classes.sectionRightDesktop}>
          <Button
            color="primary"
            className={classes.button}
            label="Account"
            onClick={() => setIsSignInOpen(true)}
          />
          <Button color="primary" className={classes.button} label="Search" />
          <Button
            color="primary"
            className={clsx(classes.button, classes.cart)}
            label="Cart"
            onClick={() => setIsCartVisible(true)}
          />
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
      <Cart
        isCartVisible={isCartVisible}
        setIsCartVisible={setIsCartVisible}
      />
      <SignIn
        isOpen={isSignInOpen}
        setIsOpen={setIsSignInOpen}
        handleSignIn={handleSignIn}
      />
      <SignUp
        isOpen={isSignUpOpen}
        setIsOpen={setIsSignUpOpen}
        handleSignUp={handleSignUp}
      />
    </>
  );
};

export default ConsumerNavbar;
