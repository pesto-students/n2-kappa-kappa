import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';

// Icons
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  ShoppingCartOutlined as ShoppingCartIcon,
} from '@material-ui/icons/';

/* STYLES */
import useStyles from './sectionMobile.styles';

const SectionMobile = ({
  logo,
  mobileSearchVisible,
  setMobileSearchVisible,
  handleKeyDown,
  searchText,
  handleSearch,
  setIsCartVisible,
  setIsMobileMenuVisible,
  setIsSignInOpen,
  user
}) => {
  const classes = useStyles();

  return (
    <div className={classes.sectionMobile}>
      <div className={classes.sectionLeftMobile}>
        <Link className={classes.logoContainer} to='/'>
          <img src={logo} className={classes.logo} alt='Mr-Nomad-Logo' />
        </Link>
      </div>
      <div className={classes.sectionRightMobile}>

        {
          mobileSearchVisible
            ? (
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  autoFocus
                  onBlur={() => setMobileSearchVisible(false)}
                  placeholder='Search…'
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInputMobile,
                  }}
                  type='text'
                  onKeyDown={handleKeyDown}
                  value={searchText}
                  onChange={handleSearch}
                />
              </div>

            ) : (
              <>
                <IconButton
                  onClick={() => setMobileSearchVisible(true)}
                  className={classes.iconButton}
                >
                  <SearchIcon />
                </IconButton>
                {user.name ? (
                  <IconButton
                    className={classes.button}
                    onClick={() => setIsCartVisible(true)}
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                ) : (
                    <IconButton
                      className={classes.button}
                      onClick={() => setIsSignInOpen(true)}
                    >
                      <ShoppingCartIcon />
                    </IconButton>
                  )}

                <IconButton
                  onClick={() => setIsMobileMenuVisible(true)}
                  className={classes.iconButton}
                >
                  <MenuIcon />
                </IconButton>
              </>
            )
        }
      </div>
    </div>
  );
};

export default SectionMobile;
