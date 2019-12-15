import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  // col: {
  //   display: 'grid',
  //   width: '100%',
  //   gridTemplateRows: `repeat()`
  // },
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  row: {
    display: 'flex'
  },
  square: {
    background: 'gray',
    margin: 2,
    width: '2em',
    height: '2em',
    border: 'none',
    cursor: 'pointer'
  },
  squareActive: {
    background: 'blue',
    margin: 2,
    width: '2em',
    height: '2em',
    border: 'none',
    cursor: 'pointer'
  },
  squareNull: {
    outline: 'none',
    border: 'none',
    margin: 2,
    width: '2em',
    height: '2em',
    pointerEvents: 'none'
  },
  squareOrange: {
    background: 'orange',
    margin: 2,
    width: '2em',
    height: '2em',
    border: 'none',
    cursor: 'pointer'
  },
  squareGray: {
    background: 'gray',
    margin: 2,
    width: '2em',
    height: '2em',
    border: 'none',
    pointerEvents: 'none'
  },
  squareActive2: {
    background: 'green',
    margin: 2,
    width: '2em',
    height: '2em',
    border: 'none',
    cursor: 'pointer'
  },
}

const Admin = (props) => {
  const { classes } = props;
  //available: cho User lựa những ghế còn trống
  //active: cho User lựa trên UI
  //idSeat: null => design ghế không có
  const [room, setRoom] = useState([])
  const [final, setFinal] = useState({})
  const [curSize, setSize] = useState({ row: 0, col: 0 })
  
  const setActive = (row, chair) => {
    let newRoom = [...room];
    newRoom[row][chair].active = !room[row][chair].active;
    setRoom(newRoom);
  }
  
  const setActive2 = (row, chair) => {
    let newRoom = [...final];
    newRoom[row][chair].active = !final[row][chair].active;
    setFinal(newRoom);
  }

  const saveSeat = () => {
    let finalArr = [...room];
    let co = 1;
    finalArr.forEach((item, index) => {
      item.forEach((seat, index2) => {
        if (seat.active) {
          let id = '';
          switch (index) {
            case 0: id = 'A'; break;
            case 1: id = 'B'; break;
            case 2: id = 'C'; break;
            case 3: id = 'D'; break;
            case 4: id = 'E'; break;
            case 5: id = 'F'; break;
            default: break;
          }
          finalArr[index][index2].idSeat = id + co;
          finalArr[index][index2].active = false;
          co++;
        }
        else {
          finalArr[index][index2].idSeat = null;
        }
      })
      co = 1
    })
    const finalRoom = { finalArr, row: curSize.row, col: curSize.col }
    setFinal(finalRoom);
    //call API Post 
  }

  const handleChange = (e) => {
    setSize({
      ...curSize,
      [e.target.name]: [e.target.value]
    })
  }

  const handleSubmit = () => {
    let newArr = [];
    for (let i = 0; i < curSize.row; i++) {
      let rowArr = [];
      for (let j = 0; j < curSize.col; j++) {
        rowArr.push({ idSeat: null, available: true, active: false })
      }
      newArr.push(rowArr);
    }
    setRoom(newArr);
    console.log(newArr);
  }

  return (
    <div className={classes.container}>
      <input onChange={handleChange} name='col' placeholder='column' type='number'/>
      <input onChange={handleChange} name='row' placeholder='row' type='number'/>
      <button onClick={handleSubmit}>Submit</button>
      <div className={classes.flexContainer}>
        {
          room.map((item, index) => {
            return (
              <div className={classes.row} key={index}>
                {
                  item.map((chair, index2) => {
                    return (
                      <button
                        className={chair.active ? classes.squareActive : classes.square}
                        key={index2}
                        onClick={() => setActive(index, index2)}
                      >{chair.id}</button>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
      <button
        style={{ background: 'green', color: 'white', width: 100 }}
        onClick={saveSeat}
      >Save</button>
      <div className={classes.flexContainer}>
        {
          final && final.finalArr && final.finalArr.map((item, index) => {
            return (
              <div className={classes.row} key={index}>
                {
                  item.map((chair, index2) => {
                    if (chair.idSeat === null) {
                      return <button
                        className={classes.squareNull}
                        key={index2}
                      >{chair.id}</button>
                    } else {
                      if (!chair.active) {
                        return <button
                          className={chair.available ? classes.squareOrange : classes.squareGray}
                          key={index2}
                          onClick={() => setActive2(index, index2)}
                        >{chair.id}</button>
                      } else {
                        return <button
                          className={classes.squareActive2}
                          key={index2}
                          onClick={() => setActive2(index, index2)}
                        >{chair.id}</button>
                      }
                    }
                  })
                }
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default withStyles(styles)(Admin);