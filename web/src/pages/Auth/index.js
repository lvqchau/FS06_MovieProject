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
      <p>BHD Star Bitexco</p>
      <button>Detail</button>
    </div>
  );
};

export default withStyles(styles)(AuthScreen);
