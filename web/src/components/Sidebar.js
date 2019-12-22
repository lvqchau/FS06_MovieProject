import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";

import MenuIcon from '@material-ui/icons/Menu';
import UserIcon from '@material-ui/icons/SupervisedUserCircle';
import LaptopIcon from '@material-ui/icons/LaptopChromebook';

import colors from '../constants/colors';
import Avatar from './Avatar';

const styles = theme => ({
  sidebar: {
    width: 'fit-content',
    height: '100vh',
    boxShadow: '1px 0px 10px 0px rgba(0,0,0,0.3)',
    textAlign: 'center'
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
      textDecoration: "none"
    },
    position: 'relative',
    '& .textHide': {
      background: 'red',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      zIndex: '-1',
      left: 0,
      paddingLeft: '5em',
      position: 'absolute',
      opacity: 0,
      visibility: 'hidden',
      width: 0,
      margin: 0,
      transition: 'all 0.4s ease-out'
    },
    '&:hover': {
      '&.active': {
        color: 'green',
      },
      '& .textHide': {
        opacity: 1,
        visibility: 'visible',
        width: '180%',
      },
    }
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
    alignItems: 'center',

  }
})

const Sidebar = props => {
  const { classes, role, openDrawer } = props;
  const [activeLink, setActive] = useState(0)
  const [fullWidth, setFull] = useState(false)
  return (
    <div className={classes.sidebar}>
      <MenuIcon className={classes.menuIcon} onClick={() => setFull(!fullWidth)} />
      <NavLink exact to='/admin' className={classes.link} onClick={() => setActive(0)}>
        {
          activeLink === 0
            ?
            <div className={classes.hideSidebar}>
              <UserIcon className={classes.sidebarIconActive} />
              <p className="textHide" style={{ fontSize: 10 }}>Dashboard</p>
            </div>
            :
            <div className={classes.hideSidebar}>
              <UserIcon className={classes.sidebarIcon} />
              <p className="textHide" style={{ fontSize: 10 }}>Dashboard</p>
            </div>
        }
      </NavLink>
      <NavLink exact to='/admin/cinema' className={classes.link} onClick={() => setActive(1)}>
        {
          activeLink === 1
            ?
            <div className={classes.hideSidebar}>
              <LaptopIcon className={classes.sidebarIconActive} />
              <p className="textHide" style={{ fontSize: 10 }}>Cinema</p>
            </div>
            :
            <div className={classes.hideSidebar}>
              <LaptopIcon className={classes.sidebarIconActive} />
              <p className="textHide" style={{ fontSize: 10 }}>Cinema</p>
            </div>
        }
      </NavLink>
    </div>
  );
};

export default withStyles(styles)(Sidebar);