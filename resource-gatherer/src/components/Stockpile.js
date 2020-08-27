import React, { useState, useEffect } from 'react';
import apple from '../Apple.png';

const useStockpile = () => {
  const [stockpile, setStockpile] = useState(1);

  const updateStockpile = (num) => {
    const outcome = stockpile + num
    if (outcome >= 0) return setStockpile(outcome);
    else setStockpile('YOU LOSE');
  };

  const renderStockpile = () => (
    <div id='stockpile'>
      <p className='stockpile-text'>Stockpile:</p>
      <p className='stockpile-text'>{stockpile}</p>
      <img src={apple} alt='Apples in stockpile' />
    </div>
  );

  useEffect(() => {
    const appleRot = setInterval(() => updateStockpile(-1), 10000)
    return () => clearInterval(appleRot)
  }, [stockpile])

  return { renderStockpile, updateStockpile, stockpile };
};

export default useStockpile;
