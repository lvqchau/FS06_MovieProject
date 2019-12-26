import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Image from '../../components/Image';
import { Avatar } from '@material-ui/core';

const styles = {
  container: {
    height: '100vh',
    overflow: 'hidden',
    position: 'relative'
  },
  navbar: {
    position: 'sticky',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    height: '4.5em',
    padding: '0 5% 0 10%',
    alignItems: 'center',
    boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.2)',
    transition: 'width 0.4s ease'
  },
  flexContainer: {
    height: '100%',
    display: 'flex',
  },
  movie: {
    transition: 'all 0.4s ease',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  viewContainer: {
    transition: 'all 0.4s ease',
    width: '65%'
  },
  seatChoice: {
    position: 'absolute',
    height: '100%',
    width: '30%',
    top: 0,
    right: 0,
    boxShadow: 'none',
    transition: 'visibility 5s, opacity 5s, right 0.4s, box-shadow 1.5s',
    '&.active': {
      boxShadow: '-5px 0px 10px 0px rgba(0,0,0,0.2)',
      transition: 'visibility 0s, opacity 0s, right 0.4s, box-shadow 0s',
    }
  },
  image: {
    width: '35vw'
  },
  indexButton: {
    background: 'none',
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    height: '100%',
    border: 'none',
    outline: 'none',
    fontSize: 14,
    fontWeight: 600,
    transition: 'all 0.4s',
    margin: '0 15px',
    borderTop: '2px solid transparent',
    '& .indexSpan': {
      fontSize: 20,
      marginRight: 5
    },
    '&.active': {
      color: 'orange',
      borderTop: '2px solid orange'
    },
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
      <div className={classes.navbar} style={{ width: `calc(100% - 30% - ${width.seatRight})` }}>
        <div style={{height: '100%'}}>
          <button className={view == 0 ? `${classes.indexButton} active` : classes.indexButton} onClick={() => setView(0)}>
            <span className="indexSpan">01</span>
            Chọn vé
          </button>
          <button className={view == 1 ? `${classes.indexButton} active` : classes.indexButton} onClick={() => setView(1)}>
            <span className="indexSpan">02</span>
            Chọn ghế và thanh toán
        </button>
        </div>
        {/* <div className={classes.user}> */}
          <Avatar src="../../assets/images/user.svg" width={30} height={30}/>
          {/* <p style={{marginLeft: 5}}>Quỳnh Châu</p> */}
        {/* </div> */}
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