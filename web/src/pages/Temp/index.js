import React, { useState, useEffect, useRef } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./components/TabPanel";
import { withStyles } from "@material-ui/styles";

import { cinemaData, branchData } from "./dummyData";
import Image from "../../components/Image";
import BranchBHD from "./assets/bhd-star-cineplex-3-2.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

const styles = {
  container: {
    minWidth: 350
  },
  root: {
    maxWidth: "100%",
    minWidth: "350px",
    border: "1px solid rgba(238,238,238,.88)",
    flexGrow: 1,
    display: "flex",
    "& .MuiTabs-indicator": {
      display: "none"
    }
  },
  img: {
    width: "3em",
    height: "3em"
  },
  panelCine: {
    overflow: "hidden",
    "&.MuiTypography-root": {
      width: "100%"
    },
    "& .MuiBox-root": {
      padding: 0,
      display: "flex",
      minWidth: 0
    }
  },
  tabCinema: {
    width: "4em",
    position: "relative",
    borderRight: "1px solid rgba(238,238,238,.88)",
    "& .MuiTab-root": {
      padding: "10px 1px",
      minWidth: 0,
      width: "fit-content",
      margin: "auto"
    },
    "& .MuiTab-textColorInherit": {
      opacity: "0.5",
      "&.Mui-selected": {
        transition: "0.5s ease",
        opacity: "1 !important"
      }
    }
  },
  borderLine: {
    width: "50%",
    height: 2,
    background: "rgba(238,238,238,.88)",
    margin: "auto"
  },
  tabBranch: {
    minHeight: "none",
    borderRight: "1px solid rgba(238,238,238,.88)",
    width: "20em",
    "& .MuiTab-root": {
      textAlign: "left",
      borderBottom: "1px solid rgba(238,238,238,.88)",
      padding: "6px 2px",
      margin: "0 10px"
    },
    "& .MuiTab-textColorInherit": {
      opacity: "0.5",
      "&.Mui-selected": {
        transition: "0.5s ease",
        opacity: "1 !important"
      }
    },
    "@media (min-width: 600px)": {
      "& .MuiTab-root": {
        minWidth: 0
      }
    }
  },
  branch: {
    width: "100%"
  },
  branchInfo: {
    marginLeft: 10,
    height: "fit-content",
    overflowX: "hidden"
  },
  branchName: {
    textTransform: "capitalize",
    fontSize: 10,
    margin: 0,
    paddingBottom: 4,
    lineHeight: 1
  },
  branchAdd: {
    textTransform: "capitalize",
    fontSize: 9,
    margin: 0,
    lineHeight: 1,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  },
  link: {
    margin: 0,
    fontSize: 9,
    color: "red",
    textTransform: "initial"
  }
};

const Home2 = props => {
  const { classes } = props;
  let textInput = useRef(null);
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const [panelHeight, setHeight] = useState("0");
  const tmpArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [listcinema, setListCinema] = useState({ isLoading: true, data: [] });
  const [cinema, setCinema] = useState({ isLoading: true, data: [] });
  const [isLoading, setLoading] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  useEffect(() => {
    if (!listcinema.isLoading) {
      const height =
        textInput.current.getElementsByClassName("MuiTabs-fixed")[0]
          .offsetHeight + 72;
      setHeight(height + "px");
    }
  }, [textInput, listcinema]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:5000/api/list-cinemas"
    })
      .then(res => {
        console.log(res.data);
        setListCinema({ isLoading: false, data: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:5000/api/cinemas"
    })
      .then(res => {
        console.log(res);
        setCinema({ isLoading: false, data: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className={classes.root}>
        {!listcinema.isLoading ? (
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            className={classes.tabCinema}
            ref={textInput}
          >
            {listcinema.data.map(item => (
              <Tab
                label={
                  <Image
                    alt={item.label}
                    src={item.logoimg}
                    className={classes.img}
                  />
                }
                disableFocusRipple
                disableTouchRipple
              />
            ))}
          </Tabs>
        ) : (
          <p>loading</p>
        )}

        {!cinema.isLoading ? (
          listcinema.data.map((listcinemaItem, index) => (
            <TabPanel
              value={value}
              key={listcinemaItem.label}
              index={index}
              className={classes.panelCine}
              style={{ height: panelHeight }}
            >
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
                {cinema.data.map(
                  (branch, index) =>
                    branch.listcinemaId === listcinemaItem.id && (
                      <Tab
                        key={index}
                        label={
                          <div
                            className={classes.branch}
                            style={{ display: "flex" }}
                          >
                            <Image
                              src={branch.image}
                              alt={branch.label}
                              className={classes.img}
                              isStatic={false}
                            />
                            <div className={classes.branchInfo}>
                              <p className={classes.branchName}>
                                <span>{listcinemaItem.label}</span> -{" "}
                                {branch.branchname}
                              </p>
                              <p className={classes.branchAdd}>
                                {branch.address}
                              </p>
                              <Link className={classes.link} to="/h">
                                [Chi tiết]
                              </Link>
                            </div>
                          </div>
                        }
                        disableFocusRipple
                        disableTouchRipple
                      />
                    )
                )}
              </Tabs>
              {tmpArray.map(index => (
                <TabPanel value={value2} index={index - 1} key={index}>
                  hello
                </TabPanel>
              ))}
            </TabPanel>
          ))
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  );
};

export default withStyles(styles)(Home2);
