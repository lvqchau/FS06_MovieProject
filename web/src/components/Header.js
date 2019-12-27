import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Image from './Image';

const styles = {
  header: {
    boxSizing: 'border-box',
    padding: '0 1.5em',
    height: '3.5em',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'white',
    boxShadow: '0 0px 10px 0px rgba(0,0,0,0.3)'
  },
  image: {
    width: '2em',
    height: '2em'
  },
  avatar: {
    width: '1.5em',
    height: '1.5em',
    // borderRadius: '50%'
  },
  links: {

  },
  link: {
    padding: '0 0.5em'
  },
  user: {
    display: 'flex',
    alignItems: 'center'
  },
  username: {
    marginLeft: 5
  }
}

const Header = (props) => {
  const { classes } = props;
  return (
    <div className={classes.header}>
      <Image src={"/cinemas/logos/cgv.png"} className={classes.image}/>
      <div className={classes.links}>
        <Link to="/" className={classes.link}>Đặt vé</Link>
        <Link to="/" className={classes.link}>Phim</Link>
        <Link to="/" className={classes.link}>Lịch chiếu</Link>
        <Link to="/" className={classes.link}>Tin tức</Link>
      </div>
      <div className={classes.user}>
        <Avatar src={"/cinemas/logos/cgv.png"} className={classes.avatar}/>
        <p className={classes.username}>Quỳnh Châu</p>
      </div>
    </div>
  );
};

export default withStyles(styles)(Header);