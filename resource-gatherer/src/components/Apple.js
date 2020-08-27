import React, { useEffect } from 'react';
import apple from '../Apple.png';

const Apple = ({ updateStockpile, setIsApple, isTent }) => {
  
  useEffect(() => {
    setTimeout(() => {
      setIsApple(false);
    }, 5000);
  }, [setIsApple]);

  const appleClick = () => {
    if (isTent) {
      updateStockpile(1);
      setIsApple(false);
    }
  };

  return (
    <img className='apple-img' src={apple} alt='apple' onClick={appleClick} />
  );
};

export default Apple;
