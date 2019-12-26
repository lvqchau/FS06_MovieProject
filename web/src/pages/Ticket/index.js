import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Image from '../../components/Image';

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
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  viewContainer: {
    background: 'salmon',
    width: '65%'
  },
  seatChoice: {
    position: 'absolute',
    height: '100%',
    width: '30%',
    top: 0,
    right: 0,
    background: 'darkblue',
    transition: 'right 0.3s ease'
  },
  image: {
    width: '35vw'
  }
};

const Ticket = (props) => {
  //phải login
  const { classes } = props;
  const [view, setView] = useState(0)
  const [width, setWidth] = useState({
    movWidth: "35%",
    seatRight: "-30%"
  })

  useEffect(() => {
    if (view == 0)
      setWidth({
        movWidth: "35%",
        seatRight: "-30%"
      })
    else 
      setWidth({
        movWidth: "5%",
        seatRight: "0%"
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
        <div className={classes.movie} style={{ width: width.movWidth }}>
          <Image src="https://s3img.vcdn.vn/123phim/2019/11/chi-chi-em-em-sister-sister-c18-15747394235000.jpg" className={classes.image}/>
        </div>
        {/* contains ticket count or contains seat list */}
        {
          view == 0 ?
            <div className={classes.viewContainer}>
              <div className={classes.ticketBox}>TICKETTTTTTT COUNTTTTTTT</div>  
            </div>
            :
            <div className={classes.viewContainer}>
              <div className={classes.seatList}>SEATTTTTTT LISTTTTTT</div> 
            </div>
          }
        {/* contains seat choice view */}
        <div className={classes.seatChoice} style={{ right: width.seatRight }}>
          <Button onClick={() => setView(0)}>Choose ticket</Button>
          <Button onClick={() => setView(0)}>Choose ticket</Button>
          <Button onClick={() => setView(0)}>Choose ticket</Button>
          <Button onClick={() => setView(0)}>Choose ticket</Button>
          <Button onClick={() => setView(0)}>Choose ticket</Button>
          <Button onClick={() => setView(0)}>Choose ticket</Button>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Ticket);