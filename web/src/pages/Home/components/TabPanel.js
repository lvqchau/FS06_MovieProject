import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const styles = (theme => ({
  tabContainer: {
    width: '100%',
    height: 410,
    backgroundColor: '#fff',
    // borderTop: '#707070 1px solid' 
  }
}))

const TabPanel = (props) => {
  const { children, value, index, classes, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      className={classes.tabContainer}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

export default withStyles(styles)(TabPanel)