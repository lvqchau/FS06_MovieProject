import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Image from './Image';
import { Link } from 'react-router-dom';

const styles = {
  footer: {
    minHeight: '13em',
    background: 'black',
    position: 'absolute',
    bottom: 0,
    color: 'white',
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '1em',
    margin: 'auto',
    '& ul': {
      overflow: 'hidden',
      listStyle: 'none',
      padding: 0,
      '& li': {
        position: 'relative',
        color: 'white',
        '&:hover': {
          color: 'orange'
        },
        '&:before': {
          content: '""',
          position: 'absolute',
          borderRadius: '50%',
          top: '50%',
          left: 0,
          width: 5,
          height: 5,
          background: 'orange'
        }
      }
    }
  },
  logo: {
    width: '2em',
    height: '2em'
  },
  topMovie: {
    width: '25%',
    marginRight: 10
  },
  topNews: {
    width: '25%',
    marginRight: 10
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    paddingLeft: 15,
    '&:hover': {
      color: 'orange'
    }
  },
  partnerContainer: {
    width: '25%',
    marginRight: 10
  },
  partner: {
    display: 'grid',
    gridGap: 10,
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
  },
  appContainer: {
    width: '25%'
  }
}

const Footer = (props) => {
  const { classes } = props;

  const topMovieData = [
    { name: 'Frozen', id: 'frozen' },
    { name: 'SpiderMan', id: 'spiderman' },
    { name: 'SpiderMan', id: 'spiderman' },
    { name: 'SpiderMan', id: 'spiderman' },
    { name: 'SpiderMan', id: 'spiderman' },
    { name: 'SpiderMan', id: 'spiderman' },
    { name: 'SpiderMan', id: 'spiderman' }
  ]

  const topNewsData = [
    { name: '100% cà chua tươi, Ký Sinh Trùng xứng đáng là bộ phim hay nhất của Bong Joon Ho', id: 'ca-chua-tuoi' },
    { name: '100% cà chua tươi, Ký Sinh Trùng xứng đáng là bộ phim hay nhất của Bong Joon Ho', id: 'ca-chua-tuoi' },
    { name: '100% cà chua tươi, Ký Sinh Trùng xứng đáng là bộ phim hay nhất của Bong Joon Ho', id: 'ca-chua-tuoi' },
    { name: '100% cà chua tươi, Ký Sinh Trùng xứng đáng là bộ phim hay nhất của Bong Joon Ho', id: 'ca-chua-tuoi' },
    { name: '100% cà chua tươi, Ký Sinh Trùng xứng đáng là bộ phim hay nhất của Bong Joon Ho', id: 'ca-chua-tuoi' },
    { name: '100% cà chua tươi, Ký Sinh Trùng xứng đáng là bộ phim hay nhất của Bong Joon Ho', id: 'ca-chua-tuoi' },
    { name: '100% cà chua tươi, Ký Sinh Trùng xứng đáng là bộ phim hay nhất của Bong Joon Ho', id: 'ca-chua-tuoi' }
  ]
  return (
    <div className={classes.footer}>
      <div className={classes.topMovie}>
        <h5>Phim nổi bật</h5>
        <ul>
          {
            topMovieData.map((movie, index) => {
              return <li key={index}>
                <Link to={`/movie/${movie.id}`} className={classes.link}>
                  {movie.name}
                </Link>
              </li>
            })
          }
        </ul>
      </div>
      <div className={classes.topNews}>
        <h5>Tin tức mới nhất</h5>
        <ul>
          {
            topNewsData.map((news, index) => {
              return <li key={index}>
                <Link to={`/news/${news.id}`} className={classes.link}>
                  {news.name}
                </Link>
              </li>
            })
          }
        </ul>
      </div>
      <div className={classes.partnerContainer}>
        <h5>Đối tác</h5>
        <div className={classes.partner}>
          <Image src={"/cinemas/logos/cgv.png"} className={classes.logo} />
          <Image src={"/cinemas/logos/cgv.png"} className={classes.logo} />
          <Image src={"/cinemas/logos/cgv.png"} className={classes.logo} />
          <Image src={"/cinemas/logos/cgv.png"} className={classes.logo} />
          <Image src={"/cinemas/logos/cgv.png"} className={classes.logo} />
          <Image src={"/cinemas/logos/cgv.png"} className={classes.logo} />
        </div>
      </div>
      <div className={classes.appConainer}>
        <h5>Tải app về ngay</h5>
      </div>
    </div>
  );
};

export default withStyles(styles)(Footer);