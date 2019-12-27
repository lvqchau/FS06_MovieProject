import React, { Fragment, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Image from '../../../components/Image';
import { seatList } from '../dummyData';
const styles = {
  container: {
    padding: '2em'   
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  cineInfo: {
    display: 'flex',
    alignItems: 'center'
  },
  image: {
    width: '3em',
    height: '3em',
    marginRight: 10
  },
  branchInfo: {
    fontSize: 15,
    margin: 0,
    paddingBottom: 5,
    color: 'black',
    '& span': {
      color: 'gray',
      fontWeight: 600
    }
  },
  roomInfo: {
    fontSize: 13,
    margin: 0,
    color: 'gray'
  },
  countdown: {
    textAlign: 'center',
    '& p': {
      fontSize: 10,
      color: 'gray',
      margin: 0
    },
    '& h1': {
      color: 'red',
      margin: 0
    }
  },
  screenDisplay: {
    width: '90%',
    margin: 'auto',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    '& p': {
      fontSize: 10,
      position: 'absolute',
      top: 5,
      left: '50%',
      transform: 'translateX(-50%)'
    }
  },
  screen: {
    width: '100%',
    height: 10,
    background: 'black',
    margin: '0px 30px 50px 30px',
    boxShadow: '0 0 35px black'
  },
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    borderTop: '0px solid white',
    borderLeft: '30px solid white',
    borderRight: '30px solid white',
    borderBottom: '50px solid transparent',
    boxSizing: 'border-box'
  },
  row: {
    display: "flex"
  },
  flexContainer2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  // seats
  square: {
    background: "gray",
    margin: 2,
    width: "2em",
    height: "2em",
    border: "none",
    cursor: "pointer"
  },
  squareActive: {
    background: "blue",
    margin: 2,
    width: "2em",
    height: "2em",
    border: "none",
    cursor: "pointer"
  },
  squareNull: {
    outline: "none",
    border: "none",
    margin: 2,
    width: '2em',
    height: '2em',
    pointerEvents: 'none',
    background: 'transparent'
  },
  squareOrange: {
    background: "orange",
    margin: 2,
    width: "2em",
    height: "2em",
    border: "none",
    cursor: "pointer"
  },
  squareGray: {
    background: "gray",
    margin: 2,
    width: "2em",
    height: "2em",
    border: "none",
    pointerEvents: "none"
  },
  squareActive2: {
    background: "green",
    margin: 2,
    width: "2em",
    height: "2em",
    border: "none",
    cursor: "pointer"
  }
}

const SeatList = (props) => {
  const { classes } = props;
  const [final, setFinal] = useState(seatList);
  const setActive2 = (row, chair) => {
    let newRoom = [...final];
    newRoom[row][chair].active = !final[row][chair].active;
    setFinal(newRoom);
  };

  return (
    <div className={classes.container}>
      {/* Cine Info Top */}
      <div className={classes.flexContainer}>
        <div className={classes.cineInfo}>
          <Image src={"/cinemas/logos/cgv.png"} className={classes.image}/>
          <div>
            <p className={classes.branchInfo}>
              <span>CGV </span>
              - Cresent Mall
            </p>
            <p className={classes.roomInfo}>
              Hôm nay - 15:25 - Cinema 4
            </p>
          </div>
        </div>
        <div className={classes.countdown}>
          <p>thời gian giữ ghế</p>
          {/* setTimeout */}
          <h1>5:00</h1>
        </div>
      </div>
      {/* Seat List Display */}
      <div className={classes.seatDisplay}>
        <div className={classes.screenDisplay}>
          <div className={classes.screen}></div>
          <p>Màn hình</p>
          <div className={classes.overlay}></div>
        </div>

        <div className={classes.seats}>
          <div className={classes.flexContainer2}>
            {final && final.map((item, index) => {
              return (
                <div className={classes.row} key={index}>
                  {item.map((chair, index2) => {
                    if (chair.idSeat === null) {
                      return (
                        <button className={classes.squareNull} key={index2}>
                          {chair.id}
                        </button>
                      );
                    } else {
                      if (!chair.active) {
                        return (
                          <button
                            className={
                              chair.available
                                ? classes.squareOrange
                                : classes.squareGray
                            }
                            key={index2}
                            onClick={() => setActive2(index, index2)}
                          >
                            {chair.id}
                          </button>
                        );
                      } else {
                        return (
                          <button
                            className={classes.squareActive2}
                            key={index2}
                            onClick={() => setActive2(index, index2)}
                          >
                            {chair.id}
                          </button>
                        );
                      }
                    }
                  })}
                </div>
              );
            })}
          </div>
        </div>

        <div className={classes.seatInfo}>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(SeatList);