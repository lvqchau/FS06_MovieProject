import React from "react";
import { withStyles } from "@material-ui/styles";
import ImageUpload from "../../components/ImageUpload";

const styles = {
  para: {
    color: "red"
  }
};

const AuthScreen = props => {
  const { classes } = props;
  return (
    <div>
      {/* <p className={classes.para}>Auth</p> */}
      <ImageUpload />
    </div>
  );
};

export default withStyles(styles)(AuthScreen);
