import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Slide from "@material-ui/core/Slide";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Sidebar from "../components/Sidebar";

import colors from "../constants/colors";

const styles = theme => ({
  menuButton: {
    "&.MuiButtonBase-root": {
      outline: "none"
    }
  },
  toolbar: {
    "&.MuiToolbar-root": {
      background: colors.primary
    }
  },
  drawer: {
    "& .MuiPaper-root": {
      width: 300
    }
  }
});

const AdminLayout = props => {
  const { classes } = props;
  // useEffect(() => {
  //   let credentials = localStorage.getItem("userLogin");
  //   if (credentials) {
  //     let credetialsObj = JSON.parse(credentials);
  //     props.dispatch(actFetchCredentials(credetialsObj));
  //     restConnector.defaults.headers[
  //       "Authorization"
  //     ] = `Bearer ${credetialsObj.accessToken}`;
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);


  return (
    <div style={{ display: 'flex' }}>
      <Sidebar role="admin" />
      <Container>{props.children}</Container>

    </div>
  );
};

export default withStyles(styles)(AdminLayout);