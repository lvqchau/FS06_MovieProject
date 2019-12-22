import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Image = (props) => {
  const { src, alt, ...other } = props;
  const baseURL = "http://localhost:3001/api";  
  const getImageUrl = (imageUrl) => {
    if (imageUrl[0] !== '/' || imageUrl.includes('http')) return imageUrl
    return `${baseURL}${imageUrl}`
  }
  return (
    <LazyLoadImage
      alt={alt}
      src={src}
      {...other}
    />
  );
};

export default Image;