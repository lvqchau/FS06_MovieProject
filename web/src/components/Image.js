import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { storage } from "../Firebase";

import PlaceholderS from "../assets/images/placeholder.png";
import PlaceholderM from "../assets/images/null.png";

const Image = props => {
  const { src, alt, isStatic, size, ...other } = props;
  const [img, setImg] = useState("");
  
  useEffect(() => {
    if (src[0] !== '/' || src.includes('http') || isStatic)
      setImg(src)
    else {
      storage
        .ref()
        .child(`images/${src}`)
        .getDownloadURL()
        .then(url => {
          console.log(url);
          setImg(url);
          return url;
        })
        .catch(error => { });
    }
  }, []);

  return (
    <>
      {
        !img && size == 0 &&
        <LazyLoadImage
          alt={alt}
          src={PlaceholderS}
          {...other}
        />
      }
      {
        !img && size != 0 &&
        <LazyLoadImage
          alt={alt}
          src={PlaceholderM}
          {...other}
        />
      }
      {
        img &&
        <LazyLoadImage
          alt={alt}
          src={img}
          {...other}
        />
      }
    </>
  );
};

export default Image;
