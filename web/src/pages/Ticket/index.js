import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Image from '../../components/Image';

const styles = {
  container: {
    height: '100vh',
    overflow: 'hidden',
    position: 'relative'
  },
  navbar: {
    height: '4.5em',
    display: 'flex',
    alignItems: 'center',
    background: 'gray',
    boxSizing: 'border-box',
    zIndex: 5,
    transition: 'width 0.5s ease',
  },
  flexContainer: {
    height: '100%',
    display: 'flex',
  },
  movie: {
    transition: 'all 0.5s ease',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  viewContainer: {
    transition: 'all 0.5s ease',
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
    transition: 'visibility 6s, opacity 6s, right 0.5s',
    '&.active': {
      transition: 'visibility 0s, opacity 0s, right 0.5s',
    }
  },

  image: {
    width: '35vw'
  }
};

const Ticket = (props) => {
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
      <div className={classes.navbar} style={{ width: `calc(100% - 30% - ${width.seatRight})`}}>
        <Button onClick={() => setView(0)}>
          <span className={classes.viewIndex}>01</span>
          Chọn số lượng vé
        </Button>
        <Button onClick={() => setView(1)}>
          <span className={classes.viewIndex}>02</span>
          Chọn ghế và thanh toán
        </Button>
      </div>
      <div className={classes.flexContainer}>
        <div className={classes.movie} style={{ width: width.movWidth }}>
          <Image src="https://s3img.vcdn.vn/123phim/2019/11/chi-chi-em-em-sister-sister-c18-15747394235000.jpg" className={classes.image}/>
        </div>
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
        {
          view == 0 ?
            <div className={classes.seatChoice} style={{ right: width.seatRight, opacity: 0, visibility: 'hidden' }}>
              <Button>Choose ticket</Button>
              <Button onClick={() => setView(0)}>Choose ticket</Button>
              <Button onClick={() => setView(0)}>Choose ticket</Button>
              <Button onClick={() => setView(0)}>Choose ticket</Button>
              <Button onClick={() => setView(0)}>Choose ticket</Button>
              {/* <Button onClick={() => setView(0)}>Choose ticket</Button> */}
              <Button className={classes.order} disabled={true}>Đặt vé</Button>
            </div>
            :
            <div className={`${classes.seatChoice} active`} style={{ right: width.seatRight, opacity: 1, visibility: 'visible' }}>
              <Button>Choose ticket</Button>
              <Button onClick={() => setView(0)}>Choose ticket</Button>
              <Button onClick={() => setView(0)}>Choose ticket</Button>
              <Button onClick={() => setView(0)}>Choose ticket</Button>
              <Button onClick={() => setView(0)}>Choose ticket</Button>
              {/* <Button onClick={() => setView(0)}>Choose ticket</Button> */}
              <Button className={classes.order} disabled={true}>Đặt vé</Button>
            </div>
        }
      </div>
    </div>
  );
};

export default withStyles(styles)(Ticket);