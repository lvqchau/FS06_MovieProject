import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Image from '../../components/Image';
import { Avatar } from '@material-ui/core';
import TicketBox from './components/TicketBox';
import SeatList from './components/SeatList';
import SeatChoice from './components/SeatChoice';

const styles = {
  container: {
    height: '100%',
    overflow: 'hidden',
    position: 'relative'
  },
  navbar: {
    position: 'sticky',
    boxSizing: 'border-box',
    background: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    height: '5em',
    padding: '0 5% 0 10%',
    alignItems: 'center',
    boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.2)',
    transition: 'width 0.4s',
    width: '100%',
    '&.active': {
      width: '70%',
    }
  },
  flexContainer: {
    height: '100%',
    display: 'flex',
  },
  movie: {
    transition: 'all 0.4s ease',
    width: '35%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'flex-end',
    '&.active': {
      width: '5%'
    }
  },
  viewContainer: {
    width: '65%',
    transition: 'all 0.4s ease'
  },
  seatChoice: {
    background: 'white',
    position: 'absolute',
    height: '100%',
    width: '30%',
    top: 0,
    right: 0,
    boxShadow: 'none',
    opacity: 0,
    visibility: 'hidden',
    right: '-30%',
    transition: 'visibility 5s, opacity 5s, right 0.4s, box-shadow 1.5s',
    '&.active': {
      right: 0,
      opacity: 1,
      visibility: 'visible',
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
    }
  }
};

const Ticket = (props) => {
  const { classes } = props;
  const [view, setView] = useState(0)

  return (
    <div className={classes.container}>
      <div className={view == 0 ? classes.navbar : `${classes.navbar} active`}>
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
        <div className={view == 0 ? classes.movie : `${classes.movie} active`}>
          <Image src="https://s3img.vcdn.vn/123phim/2019/11/chi-chi-em-em-sister-sister-c18-15747394235000.jpg" className={classes.image}/>
        </div>
        <div className={classes.viewContainer}>
          {
            view == 0 ? <TicketBox /> : <SeatList />
          }
        </div>
        <div className={view == 0 ? classes.seatChoice : `${classes.seatChoice} active`}>
          <SeatChoice />
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Ticket);