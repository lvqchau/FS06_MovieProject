import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  container: {
    // width: '100%',
    height: '100vh',
    overflow: 'hidden',
    position: 'relative'
  },
  navbar: {
    width: '100%',
    height: 60,
    background: 'gray',
    zIndex: 5
  },
  flexContainer: {
    height: '100%',
    display: 'flex',
  },
  movie: {
    background: 'aqua',
    transition: 'width 0.3s ease'
  },
  viewContainer: {
    background: 'salmon',
    width: '65%'
  },
  seatChoice: {
    position: 'absolute',
    background: 'darkblue',
    transition: 'width 0.3s ease',
    height: '100%',
    top: 0,
    right: 0
  }
};

const Ticket = (props) => {
  //phải login
  const { classes } = props;
  const [view, setView] = useState(0)
  const [width, setWidth] = useState({
    movWidth: "35%",
    seatWidth: "0%"
  })

  useEffect(() => {
    if (view == 0)
      setWidth({
        movWidth: "35%",
        seatWidth: "0%"
      })
    else 
      setWidth({
        movWidth: "5%",
        seatWidth: "30%"
      })
  },[view])

  return (
    <div className={classes.container}>
      <div className={classes.navbar}>
        <Button onClick={() => setView(0)}>Choose ticket</Button>
        <Button onClick={() => setView(1)}>Choose seat</Button>
      </div>
      <div className={classes.flexContainer}>
        {/* contains movie image */}
        <div className={classes.movie} style={{ width: width.movWidth }}>movie</div>
        {/* contains ticket count or contains seat list */}
        {
          view == 0 ?
            <div className={classes.viewContainer}>
              <div className={classes.ticketBox}>ticketbox</div>  
            </div>
            :
            <div className={classes.viewContainer}>
              <div className={classes.seatList}>seatlist</div> 
            </div>
          }
        {/* contains seat choice view */}
        <div className={classes.seatChoice} style={{ width: width.seatWidth }}>seatchoice</div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Ticket);