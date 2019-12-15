import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  para: {
    color: 'red'
  }
}

const AuthScreen = (props) => {
  const { classes } = props;
  return (
    <div>
      <p className={classes.para}>Auth</p>
    </div>
  );
};

export default withStyles(styles)(AuthScreen);