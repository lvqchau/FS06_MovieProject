import React, { useState, useEffect, useRef } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import TabPanel from './components/TabPanel';
import { withStyles } from '@material-ui/styles';

import { cinemaData, branchData } from './dummyData';
import Image from '../../components/Image';
import Cine1 from '../../assets/images/cinema/cine1.png';
import Cine2 from '../../assets/images/cinema/cine2.png';
import Cine3 from '../../assets/images/cinema/cine3.png';
import Cine4 from '../../assets/images/cinema/cine4.png';
import Cine5 from '../../assets/images/cinema/cine5.png';
import Cine6 from '../../assets/images/cinema/cine6.png';
import BranchBHD from '../../assets/images/cinema/bhd-star-cineplex-3-2.jpg';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    minWidth: 350
  },
  root: {
    maxWidth: '44em',
    minWidth: '28em',
    border: '1px solid rgba(238,238,238,.88)',
    flexGrow: 1,
    display: 'flex',
    '& .MuiTabs-indicator': {
      display: 'none'
    }
  },
  img: {
    width: '3em',
    height: '3em'
  },
  panelCine: {
    overflow: 'hidden',
    '&.MuiTypography-root': {
      width: '100%'
    },
    '& .MuiBox-root': {
      padding: 0,
      display: 'flex',
      minWidth: 0
    }
  },
  tabCinema: {
    width: '4em',
    position: 'relative',
    borderRight: '1px solid rgba(238,238,238,.88)',
    '& .MuiTab-root': {
      padding: '10px 1px',
      minWidth: 0,
      width: 'fit-content',
      margin: 'auto'
    },
    '& .MuiTab-textColorInherit': {
      opacity: '0.5',
      '&.Mui-selected': {
        transition: '0.5s ease',
        opacity: '1 !important'
      }
    },
  },
  borderLine: {
    width: '50%',
    height: 2,
    background: 'rgba(238,238,238,.88)',
    margin: 'auto'
  },
  tabBranch: {
    minHeight: 'none',
    borderRight: '1px solid rgba(238,238,238,.88)',
    width: '20em',
    '& .MuiTab-root': {
      textAlign: 'left',
      borderBottom: '1px solid rgba(238,238,238,.88)',
      padding: '6px 2px',
      margin: '0 10px'
    },
    '& .MuiTab-textColorInherit': {
      opacity: '0.5',
      '&.Mui-selected': {
        transition: '0.5s ease',
        opacity: '1 !important'
      }
    },
    '@media (min-width: 600px)': {
      '& .MuiTab-root': {
        minWidth: 0
      }
    }
  },
  branch: {
    width: '100%'
  },
  branchInfo: {
    marginLeft: 10,
    height: 'fit-content',
    overflowX: 'hidden',
  },
  branchName: {
    textTransform: 'capitalize',
    fontSize: 10,
    margin: 0,
    paddingBottom: 4,
    lineHeight: 1
  },
  branchAdd: {
    textTransform: 'capitalize',
    fontSize: 9,
    margin: 0,
    lineHeight: 1,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  },
  link: {
    margin: 0,
    fontSize: 9,
    color: 'red',
    textTransform: 'initial',
  }
};

const Home = (props) => {
  const { classes } = props;
  let textInput = useRef(null);
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const [panelHeight, setHeight] = useState('0');
  const tmpArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  useEffect(() => {
    const height = textInput.current.getElementsByClassName("MuiTabs-fixed")[0].offsetHeight+72;
    setHeight(height+'px');
  },[textInput])

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        className={classes.tabCinema}
        ref={textInput}
      >
        <Tab
          label={<Image alt={cinemaData[0].label} 
          src={Cine1} className={classes.img} />}
          disableFocusRipple disableTouchRipple />
        <Tab
          label={<Image alt={cinemaData[1].label} 
          src={Cine2} className={classes.img} />}
          disableFocusRipple disableTouchRipple />
        
        <Tab
          label={<Image alt={cinemaData[2].label} 
          src={Cine3} className={classes.img} />}
          disableFocusRipple disableTouchRipple />
        <Tab
          label={<Image alt={cinemaData[3].label} 
          src={Cine4} className={classes.img} />}
          disableFocusRipple disableTouchRipple />
        <Tab
          label={<Image alt={cinemaData[4].label}
            src={Cine5} className={classes.img} />}
          disableFocusRipple disableTouchRipple />
        <Tab
          label={<Image alt={cinemaData[5].label}
            src={Cine6} className={classes.img} />}
          disableFocusRipple disableTouchRipple />
      </Tabs>
      {
        cinemaData.map((cinema, index) => (
          <TabPanel value={value} key={cinema.label} index={index} className={classes.panelCine} style={{ height: panelHeight}}>
            <Tabs
              value={value2}
              onChange={handleChange2}
              indicatorColor="primary"
              orientation="vertical"
              variant="scrollable"
              scrollButtons="off"
              className={classes.tabBranch}
              style={{ height: panelHeight }}
            >
              {
                branchData.map((branch, index) => (
                  branch.cinemaLabel === cinema.label &&
                  <Tab label={
                    <div className={classes.branch} style={{display: 'flex', }}>
                      <Image src={BranchBHD} alt={branch.label} className={classes.img} />
                      <div className={classes.branchInfo}>
                        <p className={classes.branchName}>
                          <span>{cinema.label}</span> - {branch.name}
                        </p>
                        <p className={classes.branchAdd}>{branch.label}</p>
                        <Link className={classes.link} to='/h'>[Chi tiết]</Link>
                      </div>
                    </div>
                  } disableFocusRipple disableTouchRipple/>
                ))
              }
            </Tabs>
            {
              tmpArray.map(index => (
                <TabPanel value={value2} index={index-1}>hello</TabPanel>
              ))
            }
          </TabPanel>
        ))
      }
    </div>
  );
}

export default withStyles(styles)(Home)