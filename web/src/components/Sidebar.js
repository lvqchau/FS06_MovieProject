import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

import MenuIcon from '@material-ui/icons/Menu';
import UserIcon from '@material-ui/icons/SupervisedUserCircle';
import LaptopIcon from '@material-ui/icons/LaptopChromebook';
import PhotoIcon from '@material-ui/icons/AddAPhoto';

import colors from '../constants/colors';
import { useEffect } from "react";

const styles = theme => ({
  sidebar: {
    width: 'fit-content',
    height: '100vh',
    background: 'white',
    boxShadow: '1px 0px 10px 0px rgba(0,0,0,0.3)',
    textAlign: 'center',
    zIndex: '9999'
  },
  sidebarContent: {
    padding: '10px 16px',
    '@media (min-width: 600px)': {
      padding: '10px 24px',
    }
  },
  menuButton: {
    '&.MuiButtonBase-root': {
      outline: 'none',
      width: 'fit-content',
      color: 'red',
      margin: '5px',
      '@media (min-width: 600px)': {
        margin: '10px',
      }
    }
  },
  link: {
    display: "flex",
    alignItems: "center",
    textTransform: "uppercase",
    color: "black",
    padding: 5,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      '&.active': {
        color: 'green',
      },
      '& .textHide': {
        opacity: 1,
        visibility: 'visible',
        width: '200%',
      }
    },
    position: 'relative',
    '& .textHide': {
      fontSize: 11,
      background: 'red',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      zIndex: '-1',
      left: 0,
      paddingLeft: 50,
      position: 'absolute',
      opacity: 0,
      visibility: 'hidden',
      width: 0,
      margin: 0,
      transition: 'width 0.4s ease-out'
    }
  },
  linkFull: {
    display: "flex",
    alignItems: "center",
    textTransform: "uppercase",
    color: "black",
    padding: 5,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none"
    },
    '& .textHide': {
      margin: 0,
      fontSize: 13,
      paddingLeft: 16,
      visibility: 'visible'
    },
    '&.active': {
      color: 'green',
    },
  },
  accountContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 16px',
    '@media (min-width: 600px)': {
      padding: '10px 24px',
    }
  },
  username: {
    margin: '0 0 0 10px',
    fontWeight: 500
  },
  sidebarIconActive: {
    width: '1.2em',
    height: '1.2em',
    color: colors.textPrimary
  },
  sidebarIcon: {
    width: '1.2em',
    height: '1.2em',
    color: colors.gray
  },
  menuIcon: {
    width: '1.2em',
    height: '1.2em',
    color: colors.primary,
    cursor: 'pointer'
  },
  iconLabel: {
    opacity: 0,
    visibility: 'hidden',
    width: 0
  },
  hideSidebar: {
    display: 'flex',
    alignItems: 'center'
  }
})

const Sidebar = props => {
  const { classes, location } = props;
  const [activeLink, setActive] = useState(0)
  const [fullWidth, setFull] = useState(false)

  useEffect(() => {
    switch (location.pathname.split('/')[2]) {
      case 'cinema':
        setActive(1);
        break;
      case 'movie':
        setActive(2);
        break;
      default: break;
    }
  },[location.pathname])

  return (
    <div className={classes.sidebar}>
      <MenuIcon className={classes.menuIcon} onClick={() => setFull(!fullWidth)} />
      <NavLink exact to='/admin' className={!fullWidth ? classes.link : classes.linkFull} onClick={() => setActive(0)}>
        {
          activeLink === 0
            ?
            <div className={classes.hideSidebar}>
              <UserIcon className={classes.sidebarIconActive} />
              <p className="textHide">Dashboard</p>
            </div>
            :
            <div className={classes.hideSidebar}>
              <UserIcon className={classes.sidebarIcon} />
              <p className="textHide">Dashboard</p>
            </div>
        }
      </NavLink>
      <NavLink exact to='/admin/cinema' className={!fullWidth ? classes.link : classes.linkFull} onClick={() => setActive(1)}>
        {
          activeLink === 1
            ?
            <div className={classes.hideSidebar}>
              <LaptopIcon className={classes.sidebarIconActive} />
              <p className="textHide">Cinema</p>
            </div>
            :
            <div className={classes.hideSidebar}>
              <LaptopIcon className={classes.sidebarIcon} />
              <p className="textHide">Cinema</p>
            </div>
        }
      </NavLink>
      <NavLink exact to='/admin/movie' className={!fullWidth ? classes.link : classes.linkFull} onClick={() => setActive(2)}>
        {
          activeLink === 2
            ?
            <div className={classes.hideSidebar}>
              <PhotoIcon className={classes.sidebarIconActive} />
              <p className="textHide">Movie</p>
            </div>
            :
            <div className={classes.hideSidebar}>
              <PhotoIcon className={classes.sidebarIcon} />
              <p className="textHide">Movie</p>
            </div>
        }
      </NavLink>
    </div>
  );
};

export default withStyles(styles)(Sidebar);