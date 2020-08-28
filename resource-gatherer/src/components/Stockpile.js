import React, { useState, useEffect } from 'react';
import apple from '../Apple.png';

const useStockpile = (name, initial) => {
  const [stockpile, setStockpile] = useState(initial);

  const updateStockpile = (num) => {
    const outcome = stockpile + num
    if (outcome >= 0) return setStockpile(outcome);
    else setStockpile('YOU LOSE');
  };

  const renderStockpile = () => (
      <p className='stockpile-text'>{name}: {stockpile} <img src={apple} alt={`${name} in stockpile`} /></p>
      
  );

  useEffect(() => {
    const appleRot = setInterval(() => updateStockpile(-1), 10000)
    return () => clearInterval(appleRot)
  }, [stockpile])

  return [renderStockpile, updateStockpile, stockpile];
};

export default useStockpile;
