import React, { useState } from 'react';
import apple from '../Apple.png';

const useStockpile = (initialStockpile) => {
  const [stockpile, setStockpile] = useState(1);

  const updateStockpile = (num) => {
    if (stockpile >= 0) return setStockpile(stockpile + num);
    else setStockpile('YOU LOSE');
  };

  const renderStockpile = () => (
    <div id='stockpile'>
      <p className='stockpile-text'>Stockpile:</p>
      <p className='stockpile-text'>{stockpile}</p>
      <img src={apple} alt='Apples in stockpile' />
    </div>
  );

  return { renderStockpile, updateStockpile, stockpile };
};

export default useStockpile;
