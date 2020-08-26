import React, { useState, useEffect } from 'react';
import Apple from './Apple';
import Tent from './Tent';
import {checkSame} from '../utils/utils'

const GridSquare = ({
  updateStockpile,
  stockpile,
  startTent,
  apple,
  square
}) => {
  const [isApple, setIsApple] = useState(false);
  const [isTent, setIsTent] = useState(false)

  useEffect(() => {
    if (checkSame(startTent, square)) {
      setIsTent(true)
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (checkSame(apple, square)) setIsApple(true);
  }, [apple, square]);

  const tentClick = () => {
    if (stockpile > 0 && !isTent) {
      updateStockpile(-1);
      setIsTent(true);
    }
  };

  return (
    <div className={'grid-square'} onClick={tentClick}>
      {isTent && (
        <Tent
          setIsTent={setIsTent}
        />
      )}
      {isApple && (
        <Apple
          updateStockpile={updateStockpile}
          setIsApple={setIsApple}
          isTent={isTent}
        />
      )}
    </div>
  );
};

export default GridSquare;
