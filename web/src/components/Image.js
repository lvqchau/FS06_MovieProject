import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { storage } from "../Firebase";

const Image = props => {
  const { src, alt, ...other } = props;
  const [src1, setSrc] = useState("");
  useEffect(() => {
    storage
      .ref()
      .child(`images/${src}`)
      .getDownloadURL()
      .then(url => {
        console.log(url);
        setSrc(url);
        return url;
      })
      .catch(error => {});
  }, []);

  return (
    <LazyLoadImage
      alt={alt}
      src={src1 || "http://via.placeholder.com"}
      {...other}
    />
  );
};

export default Image;
