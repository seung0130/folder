import React, { useState, useEffect } from 'react';
import module from '../api/Axios';

const Pixabay = () => {
  const [images, setImages] = useState([]); 
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
  
  useEffect(() => {
    
    const imgNumber=getRandom(0,10);

    const fetchRandomImages = async () => {
        const response = await module.get();
        console.log(imgNumber);
        setImages(response.data.hits[imgNumber].webformatURL);
    
    };
    fetchRandomImages();
  },[]);

  return (
  
        <img src={images} alt='loading' />
     
        
);
};

export default Pixabay;
