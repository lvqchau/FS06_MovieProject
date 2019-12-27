import React from "react";
import { withStyles } from "@material-ui/styles";
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
  // const { classes } = props;
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
      <Sidebar role="admin" {...props}/>
      <Container>{props.children}</Container>

    </div>
  );
};

export default withStyles(styles)(AdminLayout);