import React from 'react';
import { Link } from 'react-router-dom';

import { IconButton, Typography } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';

// Icons
import {
  Search as SearchIcon,
  ShoppingCartOutlined as ShoppingCartIcon,
} from '@material-ui/icons/';

/* COMPONENTS */
import ProfileMenu from '../profileMenu';

/* STYLES */
import useStyles from './sectionDesktop.styles';
import PersonIcon from '../../../../../assets/images/person';

const renderTabs = (classes, enterTab, leaveTab) => (
  <div className={classes.tabsRoot}>
    <div
      className={classes.tabsContainer}
      onMouseEnter={enterTab}
      onMouseLeave={leaveTab}
    >
      <Typography className={classes.tab}>
        Shop
      </Typography>
    </div>
  </div>
);

const SectionDesktop = ({
  enterTab,
  leaveTab,
  logo,
  handleKeyDown,
  searchText,
  handleSearch,
  user,
  logoutUser,
  setProfileMenu,
  setIsSignInOpen,
  setIsCartVisible,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.sectionDesktop}>
      <div className={classes.sectionLeftDesktop}>
        <Link className={classes.logoContainer} to="/">
          <img src={logo} className={classes.logo} alt="Mr-Nomad-Logo" />
        </Link>
        {renderTabs(classes, enterTab, leaveTab)}
      </div>

      <div className={classes.sectionRightDesktop}>
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
            type="text"
            onKeyDown={handleKeyDown}
            value={searchText}
            onChange={handleSearch}
          />
        </div>

        {user.name ? (
          <ProfileMenu
            data={user}
            logoutUser={logoutUser}
            setProfileMenu={setProfileMenu}
          />
        ) : (
          <>
            <IconButton
              className={classes.button}
              onClick={() => setIsSignInOpen(true)}
            >
              <PersonIcon />
            </IconButton>
          </>
        )}

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
      </div>
    </div>
  );
};

export default SectionDesktop;
